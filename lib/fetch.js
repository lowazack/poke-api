async function fetchAPI(url, uri) {
    try {
        let res = await fetch(`${url}${uri}`)
        return await res.json();
    } catch (e) {
        return []
    }
}

const pokeAPI = 'https://pokeapi.co/api/v2/'

async function getAllPokemon() {
    return await fetchAPI(pokeAPI, 'pokemon?limit=-1')
}

async function getSinglePokemon(name) {
    const [pokemon, pokemonSpecies] = await Promise.all([
        fetchAPI(pokeAPI, `pokemon/${name}`),
        fetchAPI(pokeAPI, `pokemon-species/${name}`),
    ])

    return [pokemon, pokemonSpecies];

}

async function getTypes() {
    return await fetchAPI(pokeAPI, 'type')
}

async function getGenerations() {
    return await fetchAPI(pokeAPI, 'generation')
}


export {fetchAPI, getAllPokemon, getSinglePokemon, getTypes, getGenerations}
