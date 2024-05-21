import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Container } from 'react-bootstrap';
import { GetServerSideProps } from 'next';
import ImageLightGallery from '@/components/image-light-gallery';

interface SeoData {
    pageTitle: string;
    description: string;
    keywords: string;
    author: string;
}

const galleyData = [
    { id: 1, imageUrl: '../assets/img/projects/BSV/Brochure/nexobrid-product-brochure.png', title: 'BSV Nexobrid Product Brochure', category: 'Pharma' },
    { id: 2, imageUrl: '../assets/img/projects/BSV/Brochure/nexobrid-product-monograph.png', title: 'BSV Nexobrid Product Monograph', category: 'Pharma' },
    { id: 3, imageUrl: '../assets/img/projects/BSV/IVA/crisavoc-iva.png', title: 'BSV Crisavoc Iva', category: 'Pharma' },
    { id: 4, imageUrl: '../assets/img/projects/BSV/IVA/nexobrid-iva.png', title: 'BSV Nexobrid Iva', category: 'Pharma' },
];

const Index: React.FC<SeoData> = ({ pageTitle, description, keywords, author }) => {

    return (
        <>
            <SEO pageTitle={pageTitle} description={description} keywords={keywords} author={author} />
            <Header />
            <Wrapper>
                <OtherHeader img='canvas.png' heading='Canvas' paragraph='The heart & purpose of Spakcomm' />
                <Container>
                    <p className='text-justify'>In the energetic alleys of Mumbai, a dream took form in 2008, a vision that promised to transform the face of branding and creative communication. Spakcomm was not just founded; it was carefully crafted from a vision that sought to blend artistry with purpose, innovation with tradition. The seedling of passion planted in a modest apartment sprouted into a thriving ecosystem where ideas flourish, narratives are woven, and brands find their true essence. The birth of Spakcomm was a testament to the conviction that branding could be a poetic venture, where each creation sings its own song, echoing the vibrant hues and dynamic pulse of its birthplace.</p>
                    <ImageLightGallery galleryImgData={galleyData} />
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
        pageTitle: 'Spak Communication Pvt Ltd | Canvas',
        description: 'Desicription Canvas',
        keywords: 'Creative Agency, Digital Marketing, Website Design, Branding, Corporate Identity',
        author: 'Shiv Kar',
    };

    // Return SEO data as props
    return {
        props: seoData,
    };
};