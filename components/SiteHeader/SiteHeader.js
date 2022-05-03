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

                    <Box ml="auto" display={['none', null, 'block']}>
                        {links.map((link, key) => (
                            <Button key={key} ml="10px" onClick={link.action()}>{link.name}</Button>
                        ))}
                    </Box>
                </Container>
            </header>
        </>
    )
}
