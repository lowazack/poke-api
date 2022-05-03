async function fetchAPI (url, uri){
    try {
        let res = await fetch(`${url}${uri}`)
        return await res.json();
    } catch (e) {
        console.log(e)
        return []
    }
}

async function getAllPokemon(){
    return await fetchAPI('https://pokeapi.co/api/v2/', 'pokemon?limit=-1')
}

async function getSinglePokemon(name){
    return await fetchAPI('https://pokeapi.co/api/v2/pokemon/', name)
}

export {fetchAPI, getAllPokemon, getSinglePokemon}
