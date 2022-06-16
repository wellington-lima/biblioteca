import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"
import api from "../../database/api"
import './styles.css'

const valorInicial = {
  titulo: '',
  autor: '',
  editora: '',
  paginas: 0
}

function NovoLivro() {
  const [livro, setLivro] = useState (valorInicial)

  const navigate = useNavigate()

  function editarLivro(evento: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evento.target

    setLivro({...livro, [name]: value})
  }

  async function cadastrarLivro(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    try {
      await api.post('livros', livro)
      navigate('/')
    } catch (error) {
      console.log(`Erro ao cadastrar o livro: ${error}`);
    }
  }

  return (
    <>
      <Navbar />

      <div className="main-novo-livro">
        <form onSubmit={cadastrarLivro}>
          <header>
            <h1>Cadastrar livro</h1>
          </header>

          <div className="campo">
            <label htmlFor="titulo">Título: </label  >
            <input type="text" name="titulo" id="titulo" onChange={(e) => editarLivro(e)} required />
          </div>

          <div className="campo">
            <label htmlFor="autor">Autor: </label >
            <input type="text" name="autor" id="autor" onChange={(e) => editarLivro(e)} required />
          </div>

          <div className="campo">
            <label htmlFor="editora">Editora: </label >
            <input type="text" name="editora" id="editora" onChange={(e) => editarLivro(e)} required />
          </div>

          <div className="campo">
            <label htmlFor="paginas">Páginas: </label >
            <input type="text" name="paginas" id="paginas" onChange={(e) => editarLivro(e)} required />
          </div>

          <div className="botoes">
            <button type="submit" className="botao btnSalvar">Salvar</button>
            <button className="botao btnCancelar" onClick={() => navigate('/')}>Cancelar</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default NovoLivro