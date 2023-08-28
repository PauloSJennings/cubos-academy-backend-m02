const { Router } = require('express');
const { listaProdutos, calculaFrete, produtoPorId } = require('./controladores/produtos');
const rotas = Router();


rotas.get('/produtos', listaProdutos);
rotas.get('/produtos/:idProduto', produtoPorId);
rotas.get('/produtos/:idProduto/frete/:cep', calculaFrete);



module.exports = rotas;