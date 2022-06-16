import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import CardLivro from "../../components/CardLivro"

import api from "../../database/api"
import './styles.css'
import { ILivro } from '../../components/CardLivro'

function Home() {

  const [livros, setLivros] = useState<ILivro[]>([])

  useEffect(() => {
    api
    .get('livros')
    .then((response) => {
      setLivros(response.data)
    })
    .catch((err) => {
      console.log(`Erro ao listar os livros: ${err}`);
    })
  },[])

  return (
    <>
      <Navbar />

      <div className="main-home">
        <div className="title-home">
          <h1>Meus livros</h1>
          <span className="total-livros">Total de livros: {livros.length}</span>
        </div>

        <section className="lista-livros">
          {
            livros.map(livro => (
              <CardLivro key={livro.id}
                id = {livro.id} 
                titulo= {livro.titulo}
                autor = {livro.autor}
                editora = {livro.editora}
                paginas = {livro.paginas} 
              />
            ))
          }
        </section>
      </div>
    </>
  )
}

export default Home