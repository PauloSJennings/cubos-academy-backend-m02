const express = require('express');
const rotas = require('./roteador');
const app = express();

app.use(rotas)
app.use(express.json());
app.listen(3000);