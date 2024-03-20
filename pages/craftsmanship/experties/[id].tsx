import React, { useEffect, useState } from 'react';

import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import expertyData from '@/data/experties.json';
import ExpertyProject from '@/model/ExpertyProject';
import fs from 'fs';
import path from 'path';
import ServiceDetail from '@/components/service-detail';
import { GetServerSideProps } from 'next';

interface SeoData {
    pageTitle: string;
    description: string;
    keywords: string;
    author: string;
}


interface Props {
    item: ExpertyProject
}

const filePath = path.join(process.cwd(), 'data', 'experties.json');

const Index: React.FC<Props> = ({ item }) => {

    const [data, setData] = useState<ExpertyProject | null>(null);

    useEffect(() => {
        console.log(item);

        setData(item)

        return () => setData(null);
    }, [item]);


    return (
        <>
            <SEO pageTitle={item.detail.title} description={item.detail.subTitle} keywords={'Keywords'} author={'Author'} />
            <Header />
            <Wrapper>
                <OtherHeader img='origin.png' heading={item.detail.title} paragraph={item.detail.subTitle} />
                <Container>
                    <p>{item.detail.headingPara}</p>
                </Container>

                {/* {JSON.stringify(item.detail.service)} */}

                <ServiceDetail itemData={item.detail.service} />

                {/* <Container className='home-before-footer'>
                    <Row>
                        <Col lg={8}>
                            <strong>
                                {item.detail.bottomPara}
                            </strong>
                        </Col>
                    </Row>
                </Container> */}

            </Wrapper>
            <Footer />
        </>
    );
};

export default Index;


export const getServerSideProps = async ({ params }: { params: { id: string } }) => {

    const { id } = params;


    try {
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const item = jsonData.find((item: ExpertyProject) => item.id === parseInt(id, 10));

        if (!item) {
            return {
                notFound: true
            };
        }

        return {
            props: {
                item
            }
        };

    } catch (error) {
        console.error(error);
        return {
            notFound: true
        };
    }

};