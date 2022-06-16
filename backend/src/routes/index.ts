import {Router} from 'express';
import livroRoutes from './livro.rotuer';
import autorRoutes from './autor.router';

const router = Router();

router.get('/', (req,res) => {
    return res.send('Biblioteca Index');
})

router.use('/livros', livroRoutes);
router.use('/autores', autorRoutes);

export default router;