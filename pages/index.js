import NextLink from 'next/link'
import {Button, Container, Box, Heading, Image, Link, List, ListItem, SimpleGrid, useColorModeValue} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
    return(
        <Layout>
        <Container>

            <br />

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                <Heading as='h2' variant="page-title">
                Alexey Maksimets
                </Heading>
                <p>( Software Engineering student / Web Dev )</p>
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
                src='/images/pfp.jpg'
                alt="PFP"
                />
            </Box>
            </Box>
            <Section delay={0.1}>
            <Heading as='h3' variant='section-title'>
                About
            </Heading>
            <Paragraph>
            Alex is a freelance front-end developer and final year 
            Software Engineering student based in Melbourne <br /> 
            Passionate about building &amp; contributing to projects that make people's 
            lives better.<br/>Currently lead developer working on {' '}
            <NextLink href='/works/swinhealth'><Link>SwinHealth</Link></NextLink>
            </Paragraph>
            <Box align='center' my={4}>
                <NextLink href='/works/'>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='blue'>
                        Things I worked on
                    </Button>
                </NextLink>
            </Box>
            </Section>

        <Section delay={0.15}>
            <Heading as='h3' variant='section-title'>
                Bio
            </Heading>

            <BioSection>
                <BioYear>1999</BioYear>
                Born in Kyiv (Київ), Ukraine
            </BioSection>

            <BioSection>
                <BioYear>2019 - present</BioYear>
                Bachelor of Computer Science at Swinburne Uni.<br /> 
                Works as a freelance front-end development              
            </BioSection>
            
        </Section>

        <Section delay={0.2}>
            <Heading as='h3' variant='section-title'>
                Online links
            </Heading>

            <List>
                <ListItem>
                    <Link href="https://github.com/aMaksimets" target="_blank">
                    <Button
                    variant='ghost'
                    colorSheme='teal'
                    leftIcon={<IoLogoGithub />}
                    >
                        @aMaksimets
                    </Button>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link href="https://www.linkedin.com/in/alex-maksimets/" target="_blank">
                    <Button
                    variant='ghost'
                    colorSheme='teal'
                    leftIcon={<IoLogoLinkedin />}
                    >
                        alex-maksimets
                    </Button>
                    </Link>
                </ListItem>
            </List>
        </Section>

        </Container>
        </Layout>
    )
}

export default Page