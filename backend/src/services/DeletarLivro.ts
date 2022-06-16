import pool from "../config/database";

class DeletarLivro {
    static async execute(id:number){
        const sql = 'DELETE FROM livros WHERE id = $1';
        const livro = await pool.query(sql, [id]);
        return livro;
    }
}

export default DeletarLivro;