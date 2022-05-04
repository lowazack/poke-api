import {Box, Select, Image, SimpleGrid, Text, Heading, Progress} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {getSinglePokemon} from "../../lib/fetch";

export default function CompareColumn({pokemonNames, activeName, nameCallback}) {

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        if (activeName) {
            setPokemonState()
        } else {
            setPokemon(null)
        }
    }, [activeName])

    async function setPokemonState() {
        let [pokemon, pokemonSpecies] = await getSinglePokemon(activeName)
        setPokemon({pokemon, pokemonSpecies})
    }

    return (
        <Box shadow="md" borderRadius="10px" p={2}>
            <Select placeholder='Select Pokémon' onChange={e => nameCallback(e.target.value)}>
                {pokemonNames.map((name, key) => (
                    <option key={key}>{name}</option>
                ))}
            </Select>

            {pokemon ? <>
                <Image
                    src={pokemon.pokemon.sprites.front_default}
                    display="block"
                    w="100%"
                    maxW="200px"
                    mx="auto"
                />
                <Heading size="md" mb={2} textAlign="center">Type</Heading>
                <SimpleGrid columns={2} borderRadius={5} spacing={1} overflow="hidden" mb={5}>
                    {pokemon.pokemon.types.map((type, key) => (
                        <Box key={key} textAlign="center" backgroundColor="gray.300">
                            {type.type.name}
                        </Box>
                    ))}
                </SimpleGrid>

                <Heading size="md" mb={2} textAlign="center">Abilities</Heading>
                <SimpleGrid columns={2} borderRadius={5} spacing={1} overflow="hidden" mb={5}>
                    {pokemon.pokemon.abilities.map((ability, key) => (
                        <Box key={key} textAlign="center" backgroundColor="gray.300">
                            {ability.ability.name}
                        </Box>
                    ))}
                </SimpleGrid>

                <Heading size="md" mb={2} textAlign="center">Stats</Heading>
                {pokemon.pokemon.stats.map((stat, key)=> (
                    <Box mb={3} key={key}>
                        <Heading size="sm" mb={0} textAlign="center">{stat.stat.name}</Heading>
                        <Progress hasStripe colorScheme='red' value={(stat.base_stat / 255) * 100} />
                    </Box>
                ))}
            </> : null}
        </Box>

    )
}
