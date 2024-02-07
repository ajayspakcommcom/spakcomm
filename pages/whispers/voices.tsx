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

            </Wrapper>
            <Footer />
        </>
    );
};

export default Index;