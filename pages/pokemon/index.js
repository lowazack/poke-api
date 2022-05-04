import {getAllPokemon, getSinglePokemon} from "../../lib/fetch";

import {SimpleGrid, Container, Divider, Select} from '@chakra-ui/react'
import InfoCard from "../../components/InfoCard";
import {useEffect, useState} from "react";
import {getGenerationNames, getTypeNames} from "../../lib/utility";

export default function AllPokemon({allPokemon, types, generations}) {
    const [typeFilter, setTypeFilter] = useState(null)
    const [generationFilter, setGenerationFilter] = useState(null)

    function filteredPokemon() {
        if (!typeFilter && !generationFilter) {
            return allPokemon;
        } else if (typeFilter && !generationFilter) {
            return allPokemon.filter(pokemon => {
                pokemon.types.includes(typeFilter);
            })
        } else if (!typeFilter && generationFilter) {
            return allPokemon.filter(pokemon => {
                return pokemon.generation === generationFilter;
            })
        } else {
            return allPokemon.filter(pokemon => {
                return (
                    pokemon.types.includes(typeFilter)
                    && pokemon.generation === generationFilter
                );
            })
        }
    }

    return (
        <>
            <Container maxW="container.lg" display="flex">
                <Select onChange={e => setTypeFilter(e.target.value === '0'? null:e.target.value)}>
                    <option value={0}>Filter Type</option>
                    {types.map((type, key) => (
                        <option key={key}>{type}</option>
                    ))}
                </Select>
                <Select onChange={e => setGenerationFilter(e.target.value === '0'? null:e.target.value)}>
                    <option value={0}>Filter Generation</option>
                    {generations.map((generation, key) => (
                        <option key={key}>{generation}</option>
                    ))}
                </Select>
            </Container>
            <Container maxW="container.lg" my="10px">
                <Divider/>
            </Container>
            <Container maxW="container.lg">
                <SimpleGrid columns={4} spacing={10}>
                    {filteredPokemon().map((pokemon, key) => (
                        <InfoCard key={key} {...pokemon} useLink={true}/>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}

export async function getStaticProps(context) {
    let allPokemon = [];
    const [allBasic, types, generations] = await Promise.all([
        getAllPokemon(),
        getTypeNames(),
        getGenerationNames()
    ])


    for (let pokeKey in allBasic.results) {
        let [pokemon, pokemonSpecies] = await getSinglePokemon(allBasic.results[pokeKey].name);
        allPokemon.push({
            name: pokemon.species.name,
            image: pokemon.sprites.front_default,
            types: pokemon.types.map((type) => {
                return type.type.name
            }),
            generation: pokemonSpecies.generation.name
        })

        if (process.env.DEVELOPMENT && allPokemon.length > 10) {
            break;
        }
    }

    return {
        props: {
            allPokemon,
            types,
            generations
        },
    }
}
