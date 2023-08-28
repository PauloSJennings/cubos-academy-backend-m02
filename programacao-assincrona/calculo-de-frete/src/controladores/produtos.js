const arrayDeProdutos = require('../bancodedados/produtos')
const { getStateFromZipcode } = require('utils-playground');

async function listaProdutos(req, res) {
    return await res.status(200).json(arrayDeProdutos);
}

async function calculaFrete(req, res) {
    const { idProduto, cep } = req.params;

    const estado = await getStateFromZipcode(cep);
    const produto = arrayDeProdutos.find((produto) => produto.id === Number(idProduto));
    let frete = 0;

    if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    if (estado === 'SP' || estado === 'RJ') {
        frete = produto.valor * 0.15;
    } else if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
        frete = produto.valor * 0.12;
    } else {
        frete = produto.valor * 0.10;
    }

    const resultado = {
        produto,
        estado,
        frete
    }

    return res.status(200).json(resultado);
}

async function produtoPorId(req, res) {
    const { idProduto } = req.params;

    const produto = await arrayDeProdutos.find((produto) => produto.id === Number(idProduto));

    if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    return res.status(200).json(produto);
}

module.exports = {
    listaProdutos,
    calculaFrete,
    produtoPorId
}