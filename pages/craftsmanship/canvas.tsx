import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Container } from 'react-bootstrap';
import { GetServerSideProps } from 'next';
import ImageLightGallery from '@/components/image-light-gallery';
import { ProjectCategory, ProjectSubCategory, CLIENTS } from '@/libs/common';

interface SeoData {
    pageTitle: string;
    description: string;
    keywords: string;
    author: string;
}

interface GalleryData {
    id?: number;
    imageUrl?: string;
    title?: string;
    client?: string;
    category?: string;
    subCategory?: string;
}

const galleyData: GalleryData[] = [
    { id: 1, imageUrl: '../assets/img/projects/BSV/Brochure/nexobrid-product-brochure.png', title: 'BSV Nexobrid Product Brochure', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.BROCHURE },
    { id: 2, imageUrl: '../assets/img/projects/BSV/Brochure/nexobrid-product-monograph.png', title: 'BSV Nexobrid Product Monograph', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.BROCHURE },
    { id: 5, imageUrl: '../assets/img/projects/BSV/LBL/nexobrid-flyer.png', title: 'nexobrid flyer', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.FLYER },
    { id: 3, imageUrl: '../assets/img/projects/BSV/LBL/crisavoc-lbl-1.png', title: 'crisavoc lbl', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.LBL },
    { id: 4, imageUrl: '../assets/img/projects/BSV/LBL/crisavoc-lbl-2.png', title: 'crisavoc lbl', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.LBL },
    { id: 6, imageUrl: '../assets/img/projects/BSV/LBL/nexobrid-lbl-1.png', title: 'nexobrid lbl', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.LBL },
    { id: 7, imageUrl: '../assets/img/projects/BSV/LBL/nexobrid-lbl-2.png', title: 'nexobrid lbl', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.LBL },
    { id: 8, imageUrl: '../assets/img/projects/BSV/Poster/bsv-greeting-letter.png', title: 'Bsv Greeting Letter', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.LETTER },
    { id: 9, imageUrl: '../assets/img/projects/BSV/Poster/histoglob-poster.png', title: 'Histoglob Poster', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.POSTER },
    { id: 10, imageUrl: '../assets/img/projects/BSV/Poster/nexobrid-application-poster.png', title: 'Nexobrid Application Poster', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.POSTER },
    { id: 11, imageUrl: '../assets/img/projects/BSV/Poster/nexobrid-poster.png', title: 'Nexobrid Poster', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.POSTER },
    { id: 12, imageUrl: '../assets/img/projects/BSV/Poster/thank-you-bsv.png', title: 'Thank You Letter Bsv', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.THANK_YOU_LETTER },
    { id: 13, imageUrl: '../assets/img/projects/BSV/Stall/nexobrid-stall.png', title: 'Nexobrid Stall Bsv', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STALL },
    { id: 14, imageUrl: '../assets/img/projects/BSV/Standee/crisavoc-standee.png', title: 'crisavoc standee Bsv', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },
    { id: 15, imageUrl: '../assets/img/projects/BSV/Standee/nexobrid-nabi-standee.png', title: 'Nexobrid Nabi Standee Bsv', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },
    { id: 16, imageUrl: '../assets/img/projects/BSV/Standee/nexobrid-standee.png', title: 'Nexobrid Standee Bsv', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },
    { id: 17, imageUrl: '../assets/img/projects/BSV/Folder/1.png', title: 'folder Bsv', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.FOLDER },
    { id: 18, imageUrl: '../assets/img/projects/BSV/Folder/2.png', title: 'folder Bsv', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.FOLDER },
    { id: 19, imageUrl: '../assets/img/projects/BSV/Folder/3.png', title: 'folder Bsv', client: CLIENTS.BSV, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.FOLDER },
    { id: 20, imageUrl: '../assets/img/projects/BI/Certificate/appreciation-certificate-1.png', client: CLIENTS.BI, title: 'certificate bi', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 21, imageUrl: '../assets/img/projects/BI/Certificate/appreciation-certificate-2.png', client: CLIENTS.BI, title: 'certificate bi', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 22, imageUrl: '../assets/img/projects/BI/Certificate/appreciation-certificate-3.png', client: CLIENTS.BI, title: 'certificate bi', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 23, imageUrl: '../assets/img/projects/BI/Certificate/appreciation-certificate-4.png', client: CLIENTS.BI, title: 'certificate bi', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 24, imageUrl: '../assets/img/projects/BI/Certificate/appreciation-certificate-5.png', client: CLIENTS.BI, title: 'certificate bi', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 25, imageUrl: '../assets/img/projects/BI/LBL/1.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 26, imageUrl: '../assets/img/projects/BI/LBL/2.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 27, imageUrl: '../assets/img/projects/BI/LBL/3.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 28, imageUrl: '../assets/img/projects/BI/LBL/4.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 29, imageUrl: '../assets/img/projects/BI/LBL/5.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 30, imageUrl: '../assets/img/projects/BI/LBL/6.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 31, imageUrl: '../assets/img/projects/BI/LBL/7.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 32, imageUrl: '../assets/img/projects/BI/LBL/8.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 33, imageUrl: '../assets/img/projects/BI/LBL/9.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 34, imageUrl: '../assets/img/projects/BI/LBL/11.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 35, imageUrl: '../assets/img/projects/BI/LBL/12.png', title: 'certificate bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.CERTIFICATE },
    { id: 36, imageUrl: '../assets/img/projects/BI/other/Assurance-Card.png', title: 'Assurance Card bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.ASSURED_CARD },
    { id: 37, imageUrl: '../assets/img/projects/BI/other/BI-Tent-Card.png', title: 'BI Tent Card bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.TENT_CARD },
    { id: 38, imageUrl: '../assets/img/projects/BI/other/insync-Coaster.png', title: 'insync Coaster bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.COASTER },
    { id: 39, imageUrl: '../assets/img/projects/BI/Poster/1.png', title: 'poster bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.POSTER },
    { id: 40, imageUrl: '../assets/img/projects/BI/Poster/3.png', title: 'poster bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.POSTER },
    { id: 41, imageUrl: '../assets/img/projects/BI/Stall/1.png', title: 'stall bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STALL },
    { id: 42, imageUrl: '../assets/img/projects/BI/Stall/3.png', title: 'stall bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STALL },
    { id: 43, imageUrl: '../assets/img/projects/BI/Stall/3.png', title: 'stall bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STALL },
    { id: 44, imageUrl: '../assets/img/projects/BI/Standee/1.png', title: 'stall bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },
    { id: 45, imageUrl: '../assets/img/projects/BI/Standee/2.png', title: 'stall bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },
    { id: 46, imageUrl: '../assets/img/projects/BI/Standee/3.png', title: 'stall bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },
    { id: 47, imageUrl: '../assets/img/projects/BI/Standee/4.png', title: 'stall bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },
    { id: 48, imageUrl: '../assets/img/projects/BI/Standee/5.png', title: 'stall bi', client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },
    { id: 49, imageUrl: '../assets/img/projects/BI/VA/1.png', title: `${ProjectSubCategory.VA} bi`, client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.VA },
    { id: 50, imageUrl: '../assets/img/projects/BI/VA/2.png', title: `${ProjectSubCategory.VA} bi`, client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.VA },
    { id: 51, imageUrl: '../assets/img/projects/BI/VA/3.png', title: `${ProjectSubCategory.VA} bi`, client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.VA },
    { id: 52, imageUrl: '../assets/img/projects/BI/VA/4.png', title: `${ProjectSubCategory.VA} bi`, client: CLIENTS.BI, category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.VA },
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