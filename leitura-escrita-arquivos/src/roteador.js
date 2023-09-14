const { Router } = require('express');
const { buscaEndereco } = require('./controladores/enderecos');
const rotas = Router();

rotas.get('/enderecos/:cep', buscaEndereco);

module.exports = rotas