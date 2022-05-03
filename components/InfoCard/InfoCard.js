import { Box, Image, Text, Link} from '@chakra-ui/react'
import {useEffect} from "react";

export default function ({image, name, useLink}){
    useEffect(()=> {
        console.log(image);
    })
    return (
        <Box shadow="md" borderRadius="10px">
            <Image src={image} w={"100%"} />
            <Box px="10px">
                {useLink?
                    <Link href={`/pokemon/${name}`}>
                        <Text as="h3" fontSize="lg" textTransform="capitalize" fontWeight="Bold" >
                            {name}
                        </Text>
                    </Link> :
                    <Text as="h3" fontSize="lg" textTransform="capitalize" fontWeight="Bold" >
                        {name}
                    </Text>
                }
            </Box>
        </Box>
    )
}
