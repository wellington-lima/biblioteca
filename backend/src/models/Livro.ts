import pool from "../config/database";
import ListarLivrosService from "../services/ListarLivrosService";
import BuscarLivroPorTituloService from "../services/BuscarLivroPorTituloService";
import BuscarLivroPorIdService from "../services/BuscarLivroPorIdService";
import CriarLivroService from "../services/CriarLivroService";
import ModificarLivroService from "../services/ModificarLivroService";
import DeletarLivro from "../services/DeletarLivro";


export interface Ilivro {
    id: number,
    titulo: string,
    autor: string,
    editora: string,
    paginas: number
}
class livro {
    private id: number;
    private titulo: string;
    private autor: string;
    private editora: string;
    private paginas: number;

    static index() {
        return ListarLivrosService.execute();
    }

    static create({titulo, autor, editora, paginas}: Omit<Ilivro, 'id'>)  {
        const res = CriarLivroService.execute({titulo, autor, editora, paginas});
        const livro =  this.findByTitulo(titulo);
        return livro;
    }

    static findByTitulo(titulo: string) {
        return BuscarLivroPorTituloService.execute(titulo);
    }

    static update({ id, titulo, autor, editora, paginas}: Ilivro)  {
        const res = ModificarLivroService.execute({ id, titulo, autor, editora, paginas});
        const livro = this.findById(id);
        return livro;
    }

    static findById(id: number) {
        return BuscarLivroPorIdService.execute(id);
    }

    static delete(id: number) {
        return DeletarLivro.execute(id);
    }
}

export default livro;