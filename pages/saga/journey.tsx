import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import JourneyItem from '@/components/journey-item';
import { GetServerSideProps } from 'next';

interface SeoData {
    pageTitle: string;
    description: string;
    keywords: string;
    author: string;
}


const Index: React.FC<SeoData> = ({ pageTitle, description, keywords, author }) => {



    return (
        <>
            <SEO pageTitle={pageTitle} description={description} keywords={keywords} author={author} />
            <Header />
            <Wrapper>
                <OtherHeader img='journey.png' heading='Journey' paragraph='The heart & purpose of Spakcomm' />

                <Container>
                    <p className='text-justify'>As we navigate through the vibrant tapestry that encapsulates Spakcomm’s journey, we uncover a path marked by tenacity, innovation, and evolution. From humble roots sprouted in a cozy Mumbai apartment to blossoming into a powerhouse of creativity and authenticity, our journey stands as a testimony to relentless pursuit and unwavering passion. A voyage not merely measured in years but in the milestones that mark our growth, the transformations that echo our adaptability, and the indelible imprints we’ve left in the hearts of the brands we’ve nurtured. Here, we invite you to delve into the pivotal moments that define the Spakcomm odyssey, a narrative rich with accomplishments, learning, and continual renewal.</p>
                </Container>

                <Container className='journey-wrapper'>
                    <JourneyItem img='humble.png' heading='Humble Beginnings' paragraph='In 2008, Mumbai’s heart saw the inception of Spakcomm, a beacon of innovation & creativity in the realm of branding and design.' />
                    <JourneyItem img='growth.png' heading='Growth & Innovations' paragraph='Spakcomm embarked on an expansive journey, continuously innovating and adapting, leaving a unique imprint on each project.' />
                    <JourneyItem img='authentic.png' heading='Authentic Connections' paragraph='At Spakcomm’s core lies the drive to cultivate deep, authentic connections between brands and their audiences, fostering community engagement through resonant stories.' />
                    <JourneyItem img='bright.png' heading='Towards Brighter Horizons' paragraph='Steadfastly progressing, Spakcomm eyes brighter horizons, fuelled by a relentless pursuit of excellence and the aspiration to bring fresh, vibrant visions to life, promising a future of growth and inspiration.' />
                </Container>

            </Wrapper>
            <Footer />
        </>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps<SeoData> = async ({ query, req, res, resolvedUrl, defaultLocale, draftMode, locale, locales, params, preview, previewData }) => {
    // Fetch SEO data from your API or database
    const seoData: SeoData = {
        pageTitle: 'Spak Communication Pvt Ltd | Journey',
        description: 'Desicription Journey',
        keywords: 'Creative Agency, Digital Marketing, Website Design, Branding, Corporate Identity',
        author: 'Shiv Kar',
    };

    // Return SEO data as props
    return {
        props: seoData,
    };
};