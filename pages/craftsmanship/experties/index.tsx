import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Experties from '@/components/experties';


const Index: React.FC = () => {
    return (
        <>
            <SEO pageTitle={'Experties'} description={'Description'} keywords={'Keywords'} author={'Author'} />
            <Header />
            <Wrapper>
                <OtherHeader img='origin.png' heading='Experties' paragraph='Mastering skills for exceptional outcomes' />
                <Container>
                    <p>This showcases a spectrum of mastered skills and deep knowledge that set the foundation for exceptional outcomes. It’s a testament to our commitment to excellence, highlighting our proficiency in various domains from creative design to technological innovation. This space is dedicated to demonstrating how our specialized skills translate into tangible success for our clients and projects.</p>
                </Container>

                <div className='experties-wrapper'>
                    <Experties />
                </div>

                <Container className='home-before-footer'>
                    <Row>
                        <Col lg={8}>
                            <strong>
                                Imaginative Minds. Masterful Artists. Creative Visionaries. Genius Designers. Trailblazing Artisans. Sculptors of Dreams. Innovative Conceptualists. Crafting Virtuosos. Leading Creators.
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