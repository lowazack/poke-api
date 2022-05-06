import {Box, ChakraProvider} from '@chakra-ui/react'
import SiteHeader from "../components/SiteHeader";
import { useBoolean } from '@chakra-ui/react'
import PulloutNav from "../components/PulloutNav";
import {useRouter} from "next/router";
import Search from "../components/Search/Search";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    const [showPullout, setShowPullout] = useBoolean(false)
    const [showSearch, setShowSearch] = useBoolean(false)

    const links = [
        {
            name: 'Pokémon',
            dest: '/pokemon'
        },
        {
            name: 'Compare',
            dest: '/compare'
        },

        {
            name: 'My Pokémon',
            dest: '/my-pokemon'
        },
    ]


    return (
        <ChakraProvider>

            <Head>
                <title>Pokemon API</title>
                <meta name="description" content="Find and compare Pokemon"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <SiteHeader callback={setShowPullout} links={links} pulloutShown={showPullout}/>

            <Box mt="100px">
                <Component {...pageProps} />
            </Box>

            <PulloutNav showPullout={showPullout} callback={setShowPullout}  links={links}/>
            { showSearch? <Search callback={setShowSearch}/>: null }
        </ChakraProvider>
    )
}

export default MyApp
