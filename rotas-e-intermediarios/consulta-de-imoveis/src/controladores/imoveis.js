const imoveis = require('../../dados/imoveis');

function get(req, res) {
    res.send(imoveis);
}

function getPorId(req, res) {
    let { id } = req.params;
    let arrayFiltrado = [];

    arrayFiltrado = imoveis.filter((imovel) => imovel.id === Number(id))

    res.send(arrayFiltrado);
}


module.exports = {
    get,
    getPorId
}