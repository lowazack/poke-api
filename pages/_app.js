import {ChakraProvider} from '@chakra-ui/react'
import SiteHeader from "../components/SiteHeader";
import { useBoolean } from '@chakra-ui/react'
import PulloutNav from "../components/PulloutNav";
import {useRouter} from "next/router";
import Search from "../components/Search/Search";
import Head from "next/head";


function MyApp({Component, pageProps}) {
    const [showPullout, setShowPullout] = useBoolean(false)
    const [showSearch, setShowSearch] = useBoolean(false)
    const router = useRouter();

    const links = [
        {
            name: 'Search',
            action: () => setShowSearch.on
        }
    ]

    return (
        <ChakraProvider>

            <Head>
                <title>Pokemon API</title>
                <meta name="description" content="Find and compare Pokemon"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <SiteHeader callback={setShowPullout} links={links}/>
            <Component {...pageProps} />
            <PulloutNav showPullout={showPullout} callback={setShowPullout} />
            { showSearch? <Search callback={setShowSearch}/>: null }
        </ChakraProvider>
    )
}

export default MyApp
