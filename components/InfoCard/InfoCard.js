import { Box, Image, Text, Link} from '@chakra-ui/react'

export default function InfoCard({image, name, useLink}){
    return (
        <Box shadow="md" borderRadius="10px">
            <Image src={image} w={"100%"} alt={`${name} sprite`}/>
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
