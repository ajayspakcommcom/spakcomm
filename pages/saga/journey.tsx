import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import JourneyItem from '@/components/journey-item';


const Index: React.FC = () => {
    return (
        <>
            <SEO pageTitle={'Journey'} description={'Description'} keywords={'Keywords'} author={'Author'} />
            <Header />
            <Wrapper>
                <OtherHeader img='origin.png' heading='Journey' paragraph='The heart & purpose of Spakcomm' />
                <Container className='journey-wrapper'>
                    <JourneyItem img='humble.png' heading='Humble Beginnings' paragraph='In 2008, Mumbai’s heart saw the inception of Spakcomm, a beacon of innovation & creativity in the realm of branding and design.' />
                    <JourneyItem img='growth.png' heading='Growth & Innovations' paragraph='Spakcomm embarked on an expansive journey, continuously innovating and adapting, leaving a unique imprint on each project.' />
                    <JourneyItem img='authentic.png' heading='Authentic Connections' paragraph='At Spakcomm’s core lies the drive to cultivate deep, authentic connections between brands and their audiences, fostering community engagement through resonant stories.' />
                    <JourneyItem img='bright.png' heading='Towards Brighter Horizons' paragraph='Steadfastly progressing, Spakcomm eyes brighter horizons, fuelled by a relentless pursuit of excellence and the aspiration to bring fresh, vibrant visions to life, promising a future of growth and inspiration.' />
                </Container>

                <Container className='home-before-footer'>
                    <Row>
                        <Col lg={8}>
                            <strong>
                                Visionary Crafters. Creative Innovators. Inspired Makers. Artistic Geniuses. Imagination Leaders. Design Pioneers. Creative Champions. Dream Weavers. Conceptual Wizards.
                            </strong>
                        </Col>
                    </Row>
                </Container>

            </Wrapper>
            <Footer />
        </>
    );
};

export default Index;