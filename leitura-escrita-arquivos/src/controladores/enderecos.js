const fs = require('fs/promises');
const { buscarEndereco } = require('utils-playground');

async function buscaEndereco(req, res) {
    let { cep } = req.params;
    cep = cep.split('');
    cep.splice(5, 0, '-');
    cep = cep.join('');

    try {
        let listaDeEnderecos = await fs.readFile('../03/src/enderecos.json');

        listaDeEnderecos = JSON.parse(listaDeEnderecos);

        let endereco = listaDeEnderecos.find((endereco) => endereco.cep === cep);

        if (!endereco) {
            endereco = await buscarEndereco(cep);
            listaDeEnderecos.push(endereco);
            const listaStringfy = JSON.stringify(listaDeEnderecos);
            await fs.writeFile('../03/src/enderecos.json', listaStringfy);

            return res.status(200).json(endereco);
        } else {
            return res.status(200).json(endereco);
        }

    } catch (erro) {
        return res.json({ mensagem: `Ocorreu um erro: ${erro.message}` })
    }
}

module.exports = {
    buscaEndereco
}