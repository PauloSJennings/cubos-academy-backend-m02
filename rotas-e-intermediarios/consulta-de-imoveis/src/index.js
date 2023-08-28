const express = require('express')
const rotas = require('./roteadores')

app = express()

app.use(rotas)



app.listen(8000)