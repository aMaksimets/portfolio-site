import NextLink from 'next/link'
import {Container, Box, Heading, Image, Link, useColorModeValue, Button} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return(
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a front-end dev and CompSci student!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                <Heading as='h2' variant="page-title">
                Alexey Maksimets
                </Heading>
                <p>Web developer, CS student</p>
                
                </Box>
            <Box
            flexShrink={0} 
            mt={{base:4, md:0}} 
            ml={{md:6}} 
            align="center">
                <Image 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth='100px'
                display='inline-block'
                borderRadius="full"
                src='/images/alex.jpg'
                alt="PFP"
                />
            </Box>
            </Box>
            <Section delay={0.1}>
            <Heading as='h3' variant='section-title'>
                Work
            </Heading>
            <Paragraph>
                Alex is a Computer Science student, Freelance web developer and IT Conultant
                <br/>Currently lead developer working on {' '}
            <NextLink href='/works/swinhealth'><Link>SwinHealth</Link></NextLink>
            </Paragraph>
            <Box align='center' my={4}>
                <NextLink href='/works/'>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                        My portfolio
                    </Button>
                </NextLink>
            </Box>
            </Section>

        <Section delay={0.2}>
            <Heading as='h3' variant='section-title'>
                Bio
            </Heading>
            <BioSection>
                <BioYear>2019</BioYear>
                Started degree and working freelance (front-end developer)                
            </BioSection>
            <BioSection>
                <BioYear>2022</BioYear>
                Finishin Bachelor Computer Science
            </BioSection>
        </Section>
        </Container>
        </Layout>
    )
}

export default Page