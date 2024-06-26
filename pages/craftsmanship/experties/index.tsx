import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Experties from '@/components/experties';
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
                <OtherHeader img='expertise.png' heading='Experties' paragraph='Mastering skills for exceptional outcomes' />
                <Container>
                    <p className='text-justify'>This showcases a spectrum of mastered skills and deep knowledge that set the foundation for exceptional outcomes. It’s a testament to our commitment to excellence, highlighting our proficiency in various domains from creative design to technological innovation. This space is dedicated to demonstrating how our specialized skills translate into tangible success for our clients and projects.</p>
                </Container>

                <div className='experties-wrapper'>
                    <Experties />
                </div>

            </Wrapper>
            <Footer />
        </>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps<SeoData> = async ({ query, req, res, resolvedUrl, defaultLocale, draftMode, locale, locales, params, preview, previewData }) => {
    // Fetch SEO data from your API or database
    const seoData: SeoData = {
        pageTitle: 'Spak Communication Pvt Ltd | Experities',
        description: 'Desicription Experities',
        keywords: 'Creative Agency, Digital Marketing, Website Design, Branding, Corporate Identity',
        author: 'Shiv Kar',
    };

    // Return SEO data as props
    return {
        props: seoData,
    };
};