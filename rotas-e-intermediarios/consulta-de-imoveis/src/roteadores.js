const { Router } = require('express')
const { get, getPorId } = require('./controladores/imoveis')

const rotas = Router()


rotas.get('/imoveis', get)
rotas.get('/imoveis/:id', getPorId)


module.exports = rotas
