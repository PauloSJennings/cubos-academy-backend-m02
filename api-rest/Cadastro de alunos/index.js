const express = require('express')
const app = express()
const rotas = require('./roteador')
const { validaSenha } = require('./intermediarios')



app.use(validaSenha)

app.use(express.json())

app.use(rotas)


app.listen(3000)