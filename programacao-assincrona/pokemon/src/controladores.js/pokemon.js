const { listarPokemons, detalharPokemon } = require('utils-playground');


async function listaPokemon(req, res) {

    const { pagina } = req.query;

    if (pagina) {
        const { results } = await listarPokemons(Number(pagina));

        return res.status(200).json(results);
    }

    const { results } = await listarPokemons();

    return res.status(200).json(results);

}

async function pokemonPorNome(req, res) {
    const { nomePokemon } = req.params;

    const { id, nome, height, weight, base_experience, forms, abilities, species } = await detalharPokemon(nomePokemon);

    const resultado = {
        id,
        nome,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species
    }

    return res.status(200).json(resultado);
}

module.exports = {
    listaPokemon,
    pokemonPorNome
}