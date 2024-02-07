import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import ExpertyProject from '@/model/ExpertyProject';
import { useRouter } from 'next/router';
import expertyData from '@/data/experties.json';

interface ExpertiesProps {

}

const expertiesData: ExpertyProject[] = expertyData;

const Experties: React.FC<ExpertiesProps> = () => {

    const router = useRouter();

    const handleNavigation = (id: number) => {
        console.log(id);
        router.push(`/craftsmanship/experties/${id}`);
    };


    return (
        <>
            <Container className='experties-wrapper'>
                <Row>
                    <Col lg={12}>
                        <div className='content'>
                            {expertiesData.map((slide) => (
                                <div className='box' key={slide.id}>
                                    <div className='pointer' onClick={() => handleNavigation(slide.id)}>
                                        <div>
                                            <Image src={require(`../public/assets/img/experties/${slide.imagePath}`)} className='img-fluid' alt={`project ${slide.id}`} width={100} height={100} />
                                        </div>
                                        <span>{slide.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default React.memo(Experties);