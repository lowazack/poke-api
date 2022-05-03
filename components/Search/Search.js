import {Box, Container, Input, Button} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";

export default function Search({callback}){
    return (
        <Box position="fixed" w="100vw" h="100vh" top="0" left="0" bgGradient='linear(to-b, red.200, #00000000)'>
            <Container mt="20px">
                <Button mb="10px" backgroundColor="transparent">
                    <CloseIcon onClick={callback.off}/>
                </Button>
                <Box display="flex">
                    <Input backgroundColor="white" size="md" placeholder="Search"/>
                    <Button ml="10px">
                        Search
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
