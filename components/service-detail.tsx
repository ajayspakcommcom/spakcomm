import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import ExpertyProject from '@/model/ExpertyProject';



interface ExpertiesProps {
    itemData: string[]
}


const ServiceDetail: React.FC<ExpertiesProps> = ({ itemData }) => {

    const [data, setData] = useState<string[]>();

    useEffect(() => {

        setData([...itemData]);

        return () => console.log('unbind Service Detail');
    }, []);

    return (
        <>
            <Container className='experties-wrapper'>
                <Row>
                    <Col lg={12}>
                        <ul className='service-ul'>
                            {data && data.map((slide, indx) => (
                                <li key={indx}>
                                    <span>{slide}</span>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default React.memo(ServiceDetail);