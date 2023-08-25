let { arrayAlunos, aluno_id } = require('../dados/alunos')


function listaAlunos(req, res) {
    return res.status(200).json(arrayAlunos)
}

function encontraAluno(req, res) {
    const { id } = req.params
    const aluno = arrayAlunos.find((aluno) => aluno.id === Number(id))

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' })
    }

    return res.status(200).json(aluno)

}

function cadastraAluno(req, res) {
    let { nome, sobrenome, idade, curso } = req.body

    nome = nome.trim()

    if (!nome || !sobrenome || !curso) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'Idade inválida' })
    }

    const novoAluno = {
        id: aluno_id++,
        nome,
        sobrenome,
        idade,
        curso
    }

    arrayAlunos.push(novoAluno)

    return res.status(201).send()

}

function deletaAluno(req, res) {
    const { id } = req.params

    if (id <= 0) {
        return res.status(400).json({ mensagem: 'Id inválido' })
    }

    aluno = arrayAlunos.find((aluno) => aluno.id === Number(id))

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' })
    }

    arrayAlunos.splice(arrayAlunos.indexOf(aluno), 1)

    return res.status(200).json(aluno)
}



module.exports = {
    listaAlunos,
    encontraAluno,
    cadastraAluno,
    deletaAluno
}