import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import api from "../../database/api"
import { ILivro } from "../../components/CardLivro"
import MensagemExcluir from "../../components/MensagemExcluir"

import './styles.css'

 const valorInicial = {
    id: 0,
    titulo: '',
    autor: '',
    editora: '',
    paginas: 0
}

function EditarLivro() {
  const [livro, setLivro] = useState<ILivro>(valorInicial)
  const [msgExcluir, setMsgExcluir] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    api
    .get(`livros/${id}`)
    .then((response) => {
      setLivro(response.data[0])
    })
    .catch((err) => {
      console.log(`Erro ao consultar o livro: ${err}`);
    })
  },[])

  const navigate = useNavigate()

  function editarLivro(evento: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evento.target

    setLivro({...livro, [name]: value})
  }

  async function cadastrarLivro(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
      
    try {
      await api.put(`livros/${id}`, livro)
      navigate('/')
    } catch (error) {
      console.log(`Erro ao editar o livro: ${error}`);
    }
  }

  async function excluirLivro() {
    setMsgExcluir(true)
   /*  try {
      await api.delete(`livros/${id}`)
      navigate('/')
    } catch (error) {
      console.log(`Erro ao excluir o livro: ${error}`);
    } */
  }

  return (
    <>
      <Navbar />

      {(msgExcluir) ? 
        <MensagemExcluir id={livro.id} titulo={livro.titulo} confirmarExclusao = {setMsgExcluir} /> : 

        <div className="main-novo-livro">
        <form onSubmit={cadastrarLivro}>
          <header className="header-editar">
            <h1>Editar livro</h1>
            <button type="button" className="button-excluir" onClick={excluirLivro}>Excluir livro</button>
          </header>

          <div className="campo">
            <label htmlFor="titulo">Título: </label  >
            <input type="text" name="titulo" id="titulo" value={livro?.titulo} onChange={(e) => editarLivro(e)} required />
          </div>

          <div className="campo">
            <label htmlFor="autor">Autor: </label >
            <input type="text" name="autor" id="autor" value={livro?.autor} onChange={(e) => editarLivro(e)} required />
          </div>

          <div className="campo">
            <label htmlFor="editora">Editora: </label >
            <input type="text" name="editora" id="editora" value={livro?.editora} onChange={(e) => editarLivro(e)} required />
          </div>

          <div className="campo">
            <label htmlFor="paginas">Páginas: </label >
            <input type="text" name="paginas" id="paginas" value={livro?.paginas} onChange={(e) => editarLivro(e)} required />
          </div>

          <div className="botoes">
            <button type="submit" className="botao btnSalvar">Salvar</button>
            <button className="botao btnCancelar" onClick={() => navigate('/')}>Cancelar</button>
          </div>
        </form>
      </div>      
    }
    </>
  )
}

export default EditarLivro