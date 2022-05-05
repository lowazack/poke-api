import {Container, SimpleGrid} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {getMyPokemon} from "../lib/myPokemon";
import {getSinglePokemon} from "../lib/fetch";
import InfoCard from "../components/InfoCard";

export default function MyPokemon() {
    const [myPokemon, setMyPokemon] = useState([])
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        setMyPokemon(getMyPokemon())
    }, [])

    useEffect(() => {
        getPokemon()
    }, [myPokemon])

    async function getPokemon() {
        let allPokemon = [];

        for (let pokeKey in myPokemon) {
            let [pokemon, pokemonSpecies] = await getSinglePokemon(myPokemon[pokeKey]);
            allPokemon.push({
                name: pokemon.species.name,
                image: pokemon.sprites.front_default,
                types: pokemon.types.map((type) => {
                    return type.type.name
                }),
                generation: pokemonSpecies.generation ? pokemonSpecies.generation.name : 'undefined'
            })
        }

        setPokemon(allPokemon)
    }

    function removeCallback(name) {
        setPokemon(pokemon.filter(single => {
                return single.name !== name
            })
        )
    }

    return (
        <>
            <Container maxW="container.lg">
                <SimpleGrid columns={[2, null, 4]} spacing={[5, null, 10]}>
                    {pokemon.map((pokemon, key) => (
                        <InfoCard key={key} {...pokemon} useLink={true} removeCallback={removeCallback}/>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}
