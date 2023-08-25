const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let i = 0;

app.get('/', (req, res) => {
    res.send(`É a vez de ${jogadores[i]} jogar!`);
    if (i < 4) {
        i++;
    } else {
        i = 0;
    }
});

app.listen(3000, () => { console.log('Servidor rodando na porta 3000') });