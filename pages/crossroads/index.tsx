import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";

const Index: React.FC = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Crossroads'} description={'Description'} keywords={'Keywords'} author={'Author'} />
            <h1>Crossroads</h1>
        </Wrapper>
    );
};

export default Index;