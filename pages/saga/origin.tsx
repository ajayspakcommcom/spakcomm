import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row } from 'react-bootstrap';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

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
                <OtherHeader img='origin.png' heading='Origin' paragraph='The birth of Spakcomm' />
                <Container>
                    <p className='text-justify'>In the energetic alleys of Mumbai, a dream took form in 2008, a vision that promised to transform the face of branding and creative communication. Spakcomm was not just founded; it was carefully crafted from a vision that sought to blend artistry with purpose, innovation with tradition. The seedling of passion planted in a modest apartment sprouted into a thriving ecosystem where ideas flourish, narratives are woven, and brands find their true essence. The birth of Spakcomm was a testament to the conviction that branding could be a poetic venture, where each creation sings its own song, echoing the vibrant hues and dynamic pulse of its birthplace.</p>
                    <Image src={require('../../public/assets/img/center-img.png')} className='img-fluid p-v-30' alt='center img' />
                    <p className='text-justify'>As the sun rose on a new era of creativity, Spakcomm stood as a beacon of innovation, ready to chart a course into unexplored territories. A relentless pursuit for perfection and a hunger for carving out unique narratives became our guiding principles. From those initial moments, a fiery determination was ignited, propelling us to craft stories that resonate on a profound level, fostering connections that go beyond the visual. Our inception marks not just the birth of a creative agency but the dawn of a movement; a pledge to redefine the parameters of branding with passion, soul, and an unwavering commitment to authenticity. Spakcomm was, and remains, a vibrant testament to the magic that occurs when creativity meets purpose, blossoming into a sanctuary where brands come to life, blooming in full vibrant spectacle.</p>
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
        pageTitle: 'Spak Communication Pvt Ltd | Origin',
        description: 'Desicription Origion',
        keywords: 'Creative Agency, Digital Marketing, Website Design, Branding, Corporate Identity',
        author: 'Shiv Kar',
    };

    // Return SEO data as props
    return {
        props: seoData,
    };
};