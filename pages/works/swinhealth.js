import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='SwinHealth'>
        <Container>
            <Title>
            SwinHealth <Badge>2022</Badge>
            </Title>
            <P>
            Swinhealth is a new A Telehealth platform which directly connects patients and doctors.
            </P>
            <br />
            <P>
            Note: Currently doesn't redirect to the website.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                <Meta>Status</Meta>
                    <span>Work in progress </span>
                    <span role='img' aria-label='construction'>🚧</span> 
                </ListItem>
                <ListItem>
                <Meta>GitHub repository</Meta>
                    <Link href='https://github.com/aMaksimets/swinhealth/'>
                    github.com/aMaksimets/swinhealth/ <ExternalLinkIcon mx='2px'/>
                    </Link>
                </ListItem>
                <ListItem>
                <Meta>Stack</Meta>
                    <span>NodeJS, React, MongoDB</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/swinhealth_mockup.png" alt="SwinHealth" />
        </Container>
        </Layout>
    )
}

export default Work