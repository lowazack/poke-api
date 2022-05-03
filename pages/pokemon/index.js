import {getAllPokemon, getSinglePokemon} from "../../lib/fetch";

import {SimpleGrid, Container} from '@chakra-ui/react'
import InfoCard from "../../components/InfoCard";

export default function Pokemon({allPokemon}) {
    return (
        <>
            <Container maxW="container.md">
                <SimpleGrid columns={3} spacing={10}>
                    {allPokemon.map((pokemon, key) => (
                        <InfoCard key={key} {...pokemon} useLink={true}/>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}

export async function getStaticProps(context) {
    let allPokemon = [];
    let allBasic = (await getAllPokemon()).results

    for (let key in allBasic) {
        let single = await getSinglePokemon(allBasic[key].name);

        allPokemon.push({
            name: single.species.name,
            image: single.sprites.front_default,
        })
    }

    return {
        props: {
            allPokemon
        },
    }
}
