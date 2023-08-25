const express = require('express');

const app = express();

let sec = 0;
let min = 0;
let contagem = null;

function cronometro() {
    sec++;
    if (sec > 59) {
        min++;
        sec = 0;
    }
};


app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec}`)
})

app.get('/iniciar', (req, res) => {
    res.send('Cronômetro iniciado!');
    contagem = setInterval(cronometro, 1000);
})

app.get('/pausar', (req, res) => {
    res.send('Cronômetro pausado!');
    clearInterval(contagem)
})

app.get('/continuar', (req, res) => {
    res.send('Cronômetro continuando!');
    contagem = setInterval(cronometro, 1000);
})

app.get('/zerar', (req, res) => {
    res.send('Cronômetro zerado!');
    sec = 0;
    min = 0;
})




app.listen(3000, () => { console.log('Servidor rodando na porta 3000') });
