import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar"
import api from "../../database/api"
import './styles.css'

function NovoLivro2() {

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [editora, setEditora] = useState('')
  const [paginas, setPaginas] = useState(0)

  const navigate = useNavigate()

  function cadastrarLivro(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    api
    .post('livros', {titulo, autor, editora, paginas})
    .then(() => navigate('/'))
    .catch((err) => {
      console.log(`Erro ao cadastrar o livro: ${err}`);
    })
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
            <input type="text" name="titulo" id="titulo" value={titulo} onChange={(e)=>setTitulo(e.target.value)} required />
          </div>

          <div className="campo">
            <label htmlFor="autor">Autor: </label >
            <input type="text" name="autor" id="autor" value={autor} onChange={(e)=>setAutor(e.target.value)} required />
          </div>

          <div className="campo">
            <label htmlFor="editora">Editora: </label >
            <input type="text" name="editora" id="editora" value={editora} onChange={(e)=>setEditora(e.target.value)} required />
          </div>

          <div className="campo">
            <label htmlFor="paginas">Páginas: </label >
            <input type="text" name="paginas" id="paginas" value={paginas} onChange={(e)=>setPaginas(parseInt(e.target.value))} required/>
          </div>

          <div className="botoes">
            <button type="submit" className="botao btnSalvar">Salvar</button>
            <button className="botao btnCancelar">Cancelar</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default NovoLivro2