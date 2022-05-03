import {Box, Button} from '@chakra-ui/react';
import {CloseIcon} from "@chakra-ui/icons";
export default function PulloutNav({showPullout, callback}){
    return (
        <>
            {showPullout? <Box pos="fixed" right="20px" top="20px" bottom="20px" maxW="400px" backgroundColor="white" w="calc(100% - 40px)" shadow="md" p="20px">
                <Box display="flex">
                    <Button ml="auto" onClick={callback.off}>
                        <CloseIcon/>
                    </Button>
                </Box>
            </Box>: null}
        </>
    )
}
