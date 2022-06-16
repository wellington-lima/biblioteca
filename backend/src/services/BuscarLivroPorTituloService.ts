import pool from "../config/database";
import { Ilivro } from "../models/Livro";

class BuscarLivroPorIdService {
    static async execute(titulo: string){
        const sql= 'SELECT * FROM livros WHERE titulo = $1';
        const livro = await pool.query(sql, [titulo])
        return livro.rows;
    }
}

export default BuscarLivroPorIdService;