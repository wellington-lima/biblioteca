import pool from "../config/database";
import { Ilivro } from "../models/Livro";

class ModificarLivroService {
    static async execute({ id, titulo, autor, editora, paginas}: Ilivro){
        const sql = 'UPDATE livros set titulo = $1, autor = $2, editora = $3, paginas = $4 WHERE id = $5';
        return await pool.query(sql, [titulo, autor, editora, paginas, id]);
    }
}

export default ModificarLivroService;