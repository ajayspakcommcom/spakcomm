import React from 'react';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import SEO from '../components/seo';
import Wrapper from '@/layout/wrapper';



const ErrorPage: React.FC = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Error Page'} description={'Description'} keywords={'Keywords'} author={'Author'} />
            <Header />
            <main>
                <h1>Error</h1>
            </main>
            <Footer />
        </Wrapper>
    );
};

export default ErrorPage;