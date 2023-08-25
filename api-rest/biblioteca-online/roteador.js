const { Router } = require('express');
const rotas = Router();
const { listaLivros, livroPorId, adicionaLivro, substituiLivro, atualizaLivro, deletaLivro } = require('./controladores/livros');



rotas.get('/livros', listaLivros);
rotas.get('/livros/:id', livroPorId);
rotas.post('/livros', adicionaLivro);
rotas.put('/livros/:id', substituiLivro);
rotas.patch('/livros/:id', atualizaLivro);
rotas.delete('/livros/:id', deletaLivro);



module.exports = rotas;