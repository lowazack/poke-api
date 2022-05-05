import {Box, Image, Text, Link, IconButton} from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'
import {useEffect, useState} from "react";
import {getMyPokemon, toggleSavedPokemon} from "../../lib/myPokemon";


export default function InfoCard({image, name, useLink, removeCallback}) {

    const [myPokemon, setMyPokemon] = useState([])

    useEffect(() => {
        setMyPokemon(getMyPokemon())
    }, [])


    function toggleActive() {
        let activePokemon = toggleSavedPokemon(name)
        setMyPokemon(activePokemon)


        if (myPokemon.includes(name) && removeCallback){
            removeCallback(name)
        }

    }

    return (
        <Box shadow="md" borderRadius="10px">
            <Box position="relative">
                <Image src={image} w={"100%"} alt={`${name} sprite`}/>
                <IconButton
                    onClick={toggleActive}
                    aria-label={`toggle-${name}`}
                    icon={<StarIcon/>}
                    color={myPokemon.includes(name) ? 'red' : 'gray'}
                    position="absolute"
                    top={0} right={0}
                />
            </Box>
            <Box px="10px">
                {useLink ?
                    <Link href={`/pokemon/${name}`}>
                        <Text as="h3" fontSize="lg" textTransform="capitalize" fontWeight="Bold">
                            {name}
                        </Text>
                    </Link> :
                    <Text as="h3" fontSize="lg" textTransform="capitalize" fontWeight="Bold">
                        {name}
                    </Text>
                }
            </Box>
        </Box>
    )
}
