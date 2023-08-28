const { Router } = require('express');
const { listaPokemon, pokemonPorNome } = require('./controladores.js/pokemon');
const rotas = Router();

rotas.get('/pokemon', listaPokemon);
rotas.get('/pokemon/:nomePokemon', pokemonPorNome);

module.exports = rotas;