function toggleSavedPokemon(name){
    let currentPokemon = localStorage.getItem('savedPokemon')
    if(!currentPokemon) {
        let value = [name]
        localStorage.setItem('savedPokemon', JSON.stringify(value))
        return value
    } else {
        currentPokemon = JSON.parse(currentPokemon)
        if (currentPokemon.includes(name)){
            currentPokemon.splice(currentPokemon.indexOf(name), 1)
            localStorage.setItem('savedPokemon', JSON.stringify(currentPokemon))
        } else {
            currentPokemon.push(name)
            localStorage.setItem('savedPokemon', JSON.stringify(currentPokemon))
        }
        return currentPokemon
    }
}

function getMyPokemon(){
    let currentPokemon = localStorage.getItem('savedPokemon')

    if (!currentPokemon){
        return Array
    } else {
        return JSON.parse(currentPokemon)
    }
}

export {toggleSavedPokemon, getMyPokemon}
