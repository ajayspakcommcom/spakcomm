import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Container } from 'react-bootstrap';
import { GetServerSideProps } from 'next';
import ImageLightGallery from '@/components/image-light-gallery';
import { ProjectCategory, ProjectSubCategory } from '@/libs/common';

interface SeoData {
    pageTitle: string;
    description: string;
    keywords: string;
    author: string;
}

const galleyData = [
    { id: 1, imageUrl: '../assets/img/projects/BSV/Brochure/nexobrid-product-brochure.png', title: 'BSV Nexobrid Product Brochure', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.BROCHURE },
    { id: 2, imageUrl: '../assets/img/projects/BSV/Brochure/nexobrid-product-monograph.png', title: 'BSV Nexobrid Product Monograph', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.BROCHURE },

    { id: 5, imageUrl: '../assets/img/projects/BSV/LBL/nexobrid-flyer.png', title: 'nexobrid flyer', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.FLYER },

    { id: 3, imageUrl: '../assets/img/projects/BSV/LBL/crisavoc-lbl-1.png', title: 'crisavoc lbl', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.LBL },
    { id: 4, imageUrl: '../assets/img/projects/BSV/LBL/crisavoc-lbl-2.png', title: 'crisavoc lbl', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.LBL },
    { id: 6, imageUrl: '../assets/img/projects/BSV/LBL/nexobrid-lbl-1.png', title: 'nexobrid lbl', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.LBL },
    { id: 7, imageUrl: '../assets/img/projects/BSV/LBL/nexobrid-lbl-2.png', title: 'nexobrid lbl', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.LBL },

    { id: 8, imageUrl: '../assets/img/projects/BSV/Poster/bsv-greeting-letter.png', title: 'Bsv Greeting Letter', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.LETTER },
    { id: 9, imageUrl: '../assets/img/projects/BSV/Poster/histoglob-poster.png', title: 'Histoglob Poster', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.POSTER },
    { id: 10, imageUrl: '../assets/img/projects/BSV/Poster/nexobrid-application-poster.png', title: 'Nexobrid Application Poster', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.POSTER },
    { id: 11, imageUrl: '../assets/img/projects/BSV/Poster/nexobrid-poster.png', title: 'Nexobrid Poster', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.POSTER },
    { id: 12, imageUrl: '../assets/img/projects/BSV/Poster/thank-you-bsv.png', title: 'Thank You Letter Bsv', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.THANK_YOU_LETTER },

    { id: 13, imageUrl: '../assets/img/projects/BSV/Stall/nexobrid-stall.png', title: 'Nexobrid Stall Bsv', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STALL },

    { id: 14, imageUrl: '../assets/img/projects/BSV/Standee/crisavoc-standee.png', title: 'crisavoc standee Bsv', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },
    { id: 15, imageUrl: '../assets/img/projects/BSV/Standee/nexobrid-nabi-standee.png', title: 'Nexobrid Nabi Standee Bsv', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },
    { id: 16, imageUrl: '../assets/img/projects/BSV/Standee/nexobrid-standee.png', title: 'Nexobrid Standee Bsv', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.STANDEE },

    { id: 14, imageUrl: '../assets/img/projects/BSV/Folder/1.png', title: 'folder Bsv', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.FOLDER },
    { id: 15, imageUrl: '../assets/img/projects/BSV/Folder/2.png', title: 'folder Bsv', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.FOLDER },
    { id: 16, imageUrl: '../assets/img/projects/BSV/Folder/3.png', title: 'folder Bsv', category: ProjectCategory.Pharma, subCategory: ProjectSubCategory.FOLDER },
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