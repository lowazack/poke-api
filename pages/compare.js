import {getAllPokemon, getSinglePokemon} from "../lib/fetch";
import {getGenerationNames, getTypeNames} from "../lib/utility";
import {Container,SimpleGrid, Box, Select} from "@chakra-ui/react";
import {useState} from "react";
import CompareColumn from "../components/CompareColumn";

export default function Compare({pokemonNames}) {

    const [pokemon1, setPokemon1] = useState(null)
    const [pokemon2, setPokemon2] = useState(null)

    return (
        <>
            <Container maxW="container.lg">
                <SimpleGrid columns={2} spacing={3}>
                    <CompareColumn pokemonNames={pokemonNames} activeName={pokemon1} nameCallback={setPokemon1}/>
                    <CompareColumn pokemonNames={pokemonNames} activeName={pokemon2} nameCallback={setPokemon2}/>
                </SimpleGrid>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    let pokemonNames = (await getAllPokemon())
        .results
        .map(pokemon => {
            return pokemon.name
        })

    return {
        props: {
            pokemonNames,
        },
    }
}
