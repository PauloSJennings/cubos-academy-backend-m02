const express = require('express');
const app = express();
const { validaEntrada } = require('./intermediarios')
const { somar, subtrair, dividir, multiplicar } = require('./controladores/operacoes');

app.use(validaEntrada);

app.get('/somar', somar);
app.get('/subtrair', subtrair);
app.get('/dividir', dividir);
app.get('/multiplicar', multiplicar);


app.listen(3000);