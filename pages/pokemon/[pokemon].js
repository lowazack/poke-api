import {getSinglePokemon} from "../../lib/fetch";
import {Container, Image, Grid, GridItem, Heading, Box, Text} from '@chakra-ui/react'

export default function Pokemon({pokemon, pokemonSpecies}) {

    function typesString() {
        let types = []
        for (const index in pokemon.types) {
            types.push(pokemon.types[index].type.name)
        }
        return types.join(', ');
    }

    function abilitiesString() {
        let abilities = []
        for (const index in pokemon.abilities) {
            let ability = pokemon.abilities[index];
            abilities.push(`${ability.ability.name}${ability.is_hidden ? '(Hidden)' : null}`)
        }
        return abilities.join(', ')
    }

    function getFlavourText() {
        let flavourText = ''
        pokemonSpecies.flavor_text_entries.forEach(entry => {
            if (entry.language.name === 'en'){
                return flavourText = entry.flavor_text
                throw 'break'
            }
        })
        return flavourText
    }

    return (
        <>
            <Container maxW="container.md" mb="20px">
                <Grid templateColumns={['repeat(1, 1fr)', null, 'repeat(3, 1fr)']} gap={6}>
                    <GridItem shadow="md" borderRadius="10px">
                        <Image src={pokemon.sprites.front_default} alt={`${pokemon.name} Sprite`} w="full"/>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Heading textTransform="capitalize" mb="5px">{pokemon.name}</Heading>
                        <Text mb="20px">
                            { getFlavourText() }
                        </Text>
                        <Box mb="10px">
                            <Heading as="h3" size="md">Types</Heading>
                            <Text>{typesString()}</Text>
                        </Box>

                        <Box mb="10px">
                            <Heading as="h3" size="md">Available Abilities</Heading>
                            <Text>{abilitiesString()}</Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
            <Container maxW="container.md" mb="20px">
                <Heading size="lg" as="h2">Moves</Heading>

                <Box shadow="md" borderRadius="10px" overflow={"hidden"}>
                    <Grid templateColumns='repeat(3, 1fr)' backgroundColor="red.200">
                        <GridItem p="10px" fontWeight="bold">
                            Name
                        </GridItem>
                        <GridItem p="10px"  fontWeight="bold">
                            Learned At
                        </GridItem>
                        <GridItem p="10px"  fontWeight="bold">
                            Learn Method
                        </GridItem>
                    </Grid>
                    {pokemon.moves.map((move, key) => (
                        <Grid templateColumns='repeat(3, 1fr)' key={key}  backgroundColor={key % 2? 'gray.100':''}>
                            <GridItem p="10px">
                                {move.move.name}
                            </GridItem>
                            <GridItem p="10px">
                                {move.version_group_details[0].level_learned_at}
                            </GridItem>
                            <GridItem p="10px">
                                {move.version_group_details[0].move_learn_method.name}
                            </GridItem>
                        </Grid>
                    ))}
                </Box>
            </Container>
        </>
    )
}

export async function getServerSideProps(context) {

    try {
        const [pokemon, pokemonSpecies] = await getSinglePokemon(context.query.pokemon)

        return {
            props: {
                pokemon,
                pokemonSpecies
            },
        }

    } catch (e) {
        return e
    }
}
