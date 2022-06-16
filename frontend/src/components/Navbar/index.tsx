import { Link } from 'react-router-dom'

import './styles.css'

function Navbar() {
  return(
    <div className="nav">
      <div className="titulo">Minha biblioteca</div>
      <div className="links">
        <Link to="/" className="link-menu">Home</Link>
        <Link to="/novo" className="link-menu">Cadastrar livro</Link>
      </div>
    </div>
  )
}

export default Navbar