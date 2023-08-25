let { listaDeConvidados } = require('../dados/convidados');

function listarConvidados(req, res) {
    let { nome } = req.query;

    if (nome) {
        nome = nome.trim();
        if (listaDeConvidados.includes(nome)) {
            return res.status(200).json({ mensagem: "Convidado presente." })
        } else {
            return res.status(404).json({ mensagem: "O convidado buscado não está presente na lista." })
        }
    }

    return res.status(200).json(listaDeConvidados);
}

function cadastraNome(req, res) {
    const { nome } = req.body;

    if (listaDeConvidados.includes(nome)) {
        return res.status(200).json({ mensagem: 'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.' });
    } else {
        listaDeConvidados.push(nome);
    }

    return res.status(200).json({ mensagem: 'Convidado adicionado.' });
}

function deletaNome(req, res) {
    let { nome } = req.params;
    nome = nome.trim();

    if (listaDeConvidados.includes(nome)) {
        listaDeConvidados.splice(listaDeConvidados.indexOf(nome), 1);
        return res.status(200).json({ mensagem: 'Convidado removido' });
    } else {
        return res.status(404).json({ mensagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.' });
    }


}


module.exports = {
    listarConvidados,
    cadastraNome,
    deletaNome
}