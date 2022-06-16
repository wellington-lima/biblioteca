import { Router } from "express";
import LivroController from "../controller/LivroController";

const livroRoutes = Router();

livroRoutes.get('/', async(req,res) => {
    const livros = await LivroController.listarLivros();
    return res.status(200).json(livros)
})

livroRoutes.get('/:id',async (req,res) => {
    const id = parseInt(req.params.id);
    const livros = await LivroController.buscarPorId(id);
    return res.status(200).json(livros)
})

livroRoutes.post('/',async (req,res) => {
    const { titulo, autor, editora, paginas} = req.body;
    const livros = await LivroController.cadastrar({ titulo, autor, editora, paginas});    
    return res.status(200).json(livros);
})

livroRoutes.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, autor, editora, paginas} = req.body;
    const livros = await LivroController.editar({ id, titulo, autor, editora, paginas});
    return res.status(200).json(livros);
})

livroRoutes.delete('/:id',async (req, res) => {
    const id = parseInt(req.params.id);
    const livros = await LivroController.excluir(id);
    return res.status(200).send(`O livro ${id} foi excluído com sucesso`);
})

export default livroRoutes;