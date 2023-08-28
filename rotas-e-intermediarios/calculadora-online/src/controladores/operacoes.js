function somar(req, res) {
    let { num1, num2 } = req.query;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    const resultado = num1 + num2;

    res.send(resultado.toString());
}

function subtrair(req, res) {
    let { num1, num2 } = req.query;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    const resultado = num1 - num2;

    res.send(resultado.toString());
}

function dividir(req, res) {
    let { num1, num2 } = req.query;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    const resultado = num1 / num2;

    res.send(resultado.toString());
}

function multiplicar(req, res) {
    let { num1, num2 } = req.query;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    const resultado = num1 * num2;

    res.send(resultado.toString());
}





module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
}