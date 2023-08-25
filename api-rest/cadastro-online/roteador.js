const { Router } = require('express')
const { listaAlunos, encontraAluno, cadastraAluno, deletaAluno } = require('./controladores/alunos')

const rotas = Router()

rotas.get('/alunos', listaAlunos)
rotas.get('/alunos/:id', encontraAluno)
rotas.post('/alunos', cadastraAluno)
rotas.delete('/alunos/:id', deletaAluno)


module.exports = rotas