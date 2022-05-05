import SearchingUnown from "../components/SearchingUnown";
import {Heading, Text, Container, Link} from "@chakra-ui/react";

export default function Custom500() {
    return (
        <>
            <SearchingUnown/>

            <Container w="container.sm" textAlign="center" mt="50px">
                <Heading>500</Heading>
                <Text mb="20px">Oops you seem lost, why not go back home</Text>
                <Link href={'/'} p="10px" bgColor="red.400" color="white" borderRadius="10px">
                    Home
                </Link>
            </Container>

        </>
    )
}
