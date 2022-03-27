import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbSwinHealth from '../public/images/works/swinhealth_mockup.png'
import thumbManiwani from '../public/images/works/maniwani.png'



const Works = () => {
    return (
    <Layout>
    <Container>
        <Heading as='h3' fontSize={20} mb={4}>
            Works
        </Heading>
        <SimpleGrid columns={[1,1,2]}>
            <Section>
                <WorkGridItem id='swinhealth' title='Swinhealth' thumbnail={thumbSwinHealth}>
                A Telehealth platform for patients and doctors.
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id='maniwani' title='Maniwani' thumbnail={thumbManiwani}>
                Imageboard (forum). <br/>
                Powered by NodeJS, MongoDB
                </WorkGridItem>
            </Section>
        </SimpleGrid>
    </Container>
    </Layout>
    )
}

export default Works