const { Router } = require('express');
const { listarConvidados, cadastraNome, deletaNome } = require('./controladores/convidados');

const rotas = Router();


rotas.get('/convidados', listarConvidados);
rotas.post('/convidados', cadastraNome);
rotas.delete('/convidados/:nome', deletaNome);


module.exports = rotas;