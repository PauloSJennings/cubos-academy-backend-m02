let { listaDeLivros, proximoId } = require('../dados/livros');

function listaLivros(req, res) {
    return res.status(200).json(listaDeLivros);
}

function livroPorId(req, res) {
    const { id } = req.params;

    if (id <= 0) {
        return res.status(400).json({ mensagem: 'ID inválido' });
    }

    const livro = listaDeLivros.find((livro) => livro.id === Number(id));

    if (!livro) {
        return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }

    return res.status(200).json(livro);
}

function adicionaLivro(req, res) {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
    }

    const novoLivro = {
        id: proximoId++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    listaDeLivros.push(novoLivro);

    return res.status(200).json(novoLivro);
}

function substituiLivro(req, res) {
    const { id } = req.params;

    const { titulo, autor, ano, numPaginas } = req.body;

    let livro = listaDeLivros.find((livro) => livro.id === Number(id));

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser substituído para o ID informado.' });
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.numPaginas = numPaginas;

    return res.status(200).json(livro);

}

function atualizaLivro(req, res) {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    let livro = listaDeLivros.find((livro) => livro.id === Number(id));

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser alterado para o ID informado.' });
    }

    if (titulo) {
        livro.titulo = titulo;
    }

    if (autor) {
        livro.autor = autor;
    }

    if (ano) {
        livro.ano = ano;
    }

    if (numPaginas) {
        livro.numPaginas = numPaginas;
    }

    return res.status(200).json({ mensagem: 'Livro alterado' });
}

function deletaLivro(req, res) {
    const { id } = req.params;

    let livro = listaDeLivros.find((livro) => livro.id === Number(id));

    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro a ser deletado para o ID informado.' });
    }

    listaDeLivros.splice(listaDeLivros.indexOf(livro), 1);

    return res.status(200).json({ mensagem: 'Livro removido' });
}

module.exports = {
    listaLivros,
    livroPorId,
    adicionaLivro,
    substituiLivro,
    atualizaLivro,
    deletaLivro
}

