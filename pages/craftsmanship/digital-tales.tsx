import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
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
                <OtherHeader img='origin.png' heading='Digital Tales' paragraph='The heart & purpose of Spakcomm' />
                <Container>
                    <p className='text-justify'>In the energetic alleys of Mumbai, a dream took form in 2008, a vision that promised to transform the face of branding and creative communication. Spakcomm was not just founded; it was carefully crafted from a vision that sought to blend artistry with purpose, innovation with tradition. The seedling of passion planted in a modest apartment sprouted into a thriving ecosystem where ideas flourish, narratives are woven, and brands find their true essence. The birth of Spakcomm was a testament to the conviction that branding could be a poetic venture, where each creation sings its own song, echoing the vibrant hues and dynamic pulse of its birthplace.</p>
                    <Image src={require('../../public/assets/img/center-img.png')} className='img-fluid p-v-30' alt='center img' />
                    <p className='text-justify'>With each endeavor, we reaffirm our commitment to not only be conveyors of messages but to be the confidants of brands that seek to leave a lasting imprint in the hearts of their audience. We are the nurturers of dreams, the custodians of authenticity, relentlessly striving to amplify the unique heartbeat of each brand we collaborate with. Our purpose is crystal clear – to foster spaces where creativity blossoms in its truest form, where ideas are celebrated and narratives are nurtured with integrity and love. In the grand tapestry of digital narratives, we are the artisans, threading the heart and soul of Spakcomm into every project, every campaign, and every connection we forge, weaving a world where every story matters, where every brand finds its true home.</p>
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
        pageTitle: 'Spak Communication Pvt Ltd | Digital Tales',
        description: 'Desicription Digital Tales',
        keywords: 'Creative Agency, Digital Marketing, Website Design, Branding, Corporate Identity',
        author: 'Shiv Kar',
    };

    // Return SEO data as props
    return {
        props: seoData,
    };
};