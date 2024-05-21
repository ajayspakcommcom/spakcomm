import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import TestimonialSwiper from '@/components/testimonial';
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
                <OtherHeader img='voices.png' heading='Voices' paragraph='The heart & purpose of Spakcomm' />
                <TestimonialSwiper />
            </Wrapper>
            <Footer />
        </>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps<SeoData> = async ({ query, req, res, resolvedUrl, defaultLocale, draftMode, locale, locales, params, preview, previewData }) => {
    // Fetch SEO data from your API or database
    const seoData: SeoData = {
        pageTitle: 'Spak Communication Pvt Ltd | Voices',
        description: 'Desicription Voices',
        keywords: 'Creative Agency, Digital Marketing, Website Design, Branding, Corporate Identity',
        author: 'Shiv Kar',
    };

    // Return SEO data as props
    return {
        props: seoData,
    };
};