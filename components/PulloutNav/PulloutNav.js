import {Box, Button, Divider, Link} from '@chakra-ui/react';
import {CloseIcon} from "@chakra-ui/icons";
export default function PulloutNav({showPullout, callback, links}){
    return (
        <>
            {showPullout? <Box pos="fixed" right="20px" top="20px" bottom="20px" maxW="400px" backgroundColor="white" w="calc(100% - 40px)" shadow="md" p="20px">
                <Box display="flex">
                    <Button ml="auto" onClick={callback.off}>
                        <CloseIcon/>
                    </Button>
                </Box>
                <Divider my={4}/>
                <Box>
                    {links.map((linkObj, key) => (
                        <Link
                            key={key}
                            display="block"
                            textAlign="center"
                            ml="10px"
                            shadow="md"
                            borderWidth="2px"
                            borderStyle="solid"
                            borderColor="gray.300"
                            py={2}
                            px={4}
                            mb="10px"
                            borderRadius="10px"
                            href={linkObj.dest}>
                            {linkObj.name}
                        </Link>
                    ))}
                </Box>
            </Box>: null}
        </>
    )
}
