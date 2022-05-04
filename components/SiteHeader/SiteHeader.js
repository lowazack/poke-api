import { Container, Image, Link, Button, Box } from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons'


export default function SiteHeader({callback, links}){
    return (
        <>
            <header>
                <Container maxW="container.lg" p="10px" shadow="md" my="20px" borderRadius="10px" w="calc(100% - 40px)" display="flex"m>
                    <Link href="/">
                        <Image src="/img/logo.svg" alt="Poke Api Logo" />
                    </Link>

                    <Button ml="auto" onClick={callback.on} display={['block', null, 'none']}>
                        <HamburgerIcon />
                    </Button>

                    <Box ml="auto" my="auto" display={['none', null, 'block']}>
                        {links.map((linkObj, key) => (
                            <Link
                                key={key}
                                ml="10px"
                                bgColor="gray.300"
                                py={2}
                                px={4}
                                borderRadius="10px"
                                href={linkObj.dest}>
                                {linkObj.name}
                            </Link>
                        ))}
                    </Box>
                </Container>
            </header>
        </>
    )
}
