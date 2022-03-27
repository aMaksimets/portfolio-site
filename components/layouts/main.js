import Head from 'next/head'
import NavBar from '../navbar.js'
import {Box, Container} from '@chakra-ui/react'
import Footer from '../footer.js'

const Main = ({children, router}) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Alexey's homepage" />
                <meta name="author" content="Alexey Maksimets" />
                <meta name="author" content="aMaksimets" />
                <title>Alexey Maksimets - homepage</title>
            </Head>

            <NavBar path={router.asPath}/>

            <Container maxW='container.md' pt={14}>
                {children}
                <Footer/>
            </Container>
        </Box>
    )
}

export default Main