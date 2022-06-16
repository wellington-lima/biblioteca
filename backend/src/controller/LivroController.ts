import Livro from "../models/Livro";
import { Ilivro } from "../models/Livro";

class LivroController {
    static listarLivros() {
        return Livro.index();
    }

    static buscarPorId (id: number){
        return Livro.findById(id);
    }

    static buscarPorTitulo(titulo: string) {
        return Livro.findByTitulo(titulo);
    }

    static cadastrar({ titulo, autor, editora, paginas} : Omit <Ilivro, 'id'>){
        return Livro.create({ titulo, autor, editora, paginas});
    }

    static editar({ id, titulo, autor, editora, paginas}: Ilivro){
        return Livro.update({  id, titulo, autor, editora, paginas})
    }

    static excluir(id: number){
        return Livro.delete(id);
    }
}

export default LivroController;