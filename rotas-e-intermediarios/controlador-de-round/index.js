const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let i = 0;

app.get('/', (req, res) => {
    res.send(`É a vez de ${jogadores[i]} jogar!`);
    if (i < jogadores.length - 1) {
        i++;
    } else {
        i = 0;
    }
});

app.get('/remover', (req, res) => {
    const { indice } = req.query;
    if (indice > jogadores.length - 1) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)
    } else {
        jogadores.splice(indice, 1);
    }
    res.send(jogadores);
});

app.get('/adicionar', (req, res) => {
    let { nome, indice } = req.query;
    nome = nome.slice(0, 1).toUpperCase() + nome.slice(1)

    if (indice) {
        if (indice > jogadores.length - 1) {
            res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`);
        }
        jogadores.splice(indice, 0, nome);
    } else {
        jogadores.push(nome);
    }

    res.send(jogadores);
});


app.listen(8000)