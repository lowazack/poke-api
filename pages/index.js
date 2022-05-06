import {Heading, Text, Container, Link, Box} from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <Container maxW="container.lg" >
                <Box textAlign="center"
                     h="calc(100vh - 200px)"
                     borderRadius="10px" overflow="hidden"
                     shadow="md"
                     backgroundImage="https://images.unsplash.com/photo-1638613067237-b1127ef06c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
                     backgroundPosition="right, center"
                     backgroundSize="cover"
                     maxH="700px"
                     display="flex"
                     flexDirection="column"
                     alignItems="center"
                     justifyContent={"center"}
                     textShadow="2px 2px 2px ##fff;"

                >
                    <Heading>
                        Poke API
                    </Heading>
                    <Text>
                        Your tool for helping you catch them all.
                    </Text>
                    <Link href="/pokemon"
                          backgroundColor="red.500"
                          py={2}
                          px={4}
                          borderRadius="10px"
                          textTransform="uppercase"
                          color="white"
                    >All Pokemon</Link>
                </Box>
            </Container>
        </>
    )
}


