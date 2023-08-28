function validaEntrada(req, res, next) {
    const { num1, num2 } = req.query;

    if (!num1 || !num2) {
        return res.send('Faltam parêmetros para calcular');
    }

    if (isNaN(num1) || isNaN(num2)) {
        return res.send('Parêmetro não numérico recebido')
    }

    next();

}


module.exports = {
    validaEntrada
}