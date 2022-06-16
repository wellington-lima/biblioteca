import { useNavigate } from 'react-router-dom'
import api from '../../database/api'
import './styles.css'

interface IMensagem {
    id: number;
    titulo: string;
    confirmarExclusao: (type: boolean) => void
  }

function MensagemExcluir({id, titulo, confirmarExclusao}: IMensagem) {

    const navigate = useNavigate()

    async function excluirLivro() {
        try {
          await api.delete(`livros/${id}`)
          navigate('/')
        } catch (error) {
          console.log(`Erro ao excluir o livro: ${error}`);
        }
      }

    return(
        <>
            <div className="main-msg-excluir">
                <div className="mensagem">
                    <p>Tem certeza que deseja excluir o livro </p>
                    <p><strong>{titulo}</strong>?</p>
                    
                    <div className="msg-botao">
                        <button type="button" className="btn-msg-excluir" onClick={excluirLivro}>Sim</button>
                        <button type="button" className="btn-msg-excluir" onClick={()=>confirmarExclusao(false)}>Não</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MensagemExcluir