import {getSinglePokemon} from "../../lib/fetch";
import {SimpleGrid, Container} from '@chakra-ui/react'
import {useEffect} from "react";

export default function Pokemon({pokemon}){
    useEffect(() => {
        console.log(pokemon)
    }, [pokemon])
    return (
        <Container maxW="container.lg">
            sdfsdf
        </Container>
    )
}

export async function getServerSideProps(context) {

    try {
        let pokemon = await getSinglePokemon(context.query.pokemon)

        return {
            props: {
                pokemon
            },
        }

    } catch (e){
        return e
    }
}
