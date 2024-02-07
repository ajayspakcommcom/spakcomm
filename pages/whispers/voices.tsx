import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import TestimonialSwiper from '@/components/testimonial';


const Index: React.FC = () => {
    return (
        <>
            <SEO pageTitle={'Voices'} description={'Description'} keywords={'Keywords'} author={'Author'} />
            <Header />
            <Wrapper>
                <OtherHeader img='origin.png' heading='Voices' paragraph='The heart & purpose of Spakcomm' />

                <TestimonialSwiper />

                <Container className='home-before-footer'>
                    <Row>
                        <Col lg={8}>
                            <strong>
                                Strategic Dreamers. Dynamic Illustrators. Your Brand’s Reliable Guardian. Passionate Creators. Insightful Collaborators. Design Maestros. Imagination Wizards. Your Zealous Associates.
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