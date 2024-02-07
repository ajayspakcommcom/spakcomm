import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import RecentProject from '@/model/RecentProject';

interface RecentProjectProps {

}




const projectData: RecentProject[] = [
    { id: 1, imagePath: '1.png' },
    { id: 2, imagePath: '1.png' },
    { id: 3, imagePath: '1.png' },
    { id: 4, imagePath: '1.png' },
    { id: 5, imagePath: '1.png' },
    { id: 6, imagePath: '1.png' },
    { id: 7, imagePath: '1.png' },
    { id: 8, imagePath: '1.png' },
    { id: 9, imagePath: '1.png' },
    { id: 10, imagePath: '1.png' },
    { id: 11, imagePath: '1.png' },
    { id: 12, imagePath: '1.png' },
    { id: 13, imagePath: '1.png' },
    { id: 14, imagePath: '1.png' },
    { id: 15, imagePath: '1.png' },
    { id: 16, imagePath: '1.png' },
];



const RecentProject: React.FC<RecentProjectProps> = ({ }) => (
    <>
        <Container className='what-we-do-container'>
            <Row>
                <Col>
                    <h2>Recent projects</h2>
                </Col>
            </Row>
            <Row>
                {projectData.map((project) => (
                    <Col key={project.id} lg={3} className='my-col'>
                        <Image src={require(`../public/assets/img/projects/${project.imagePath}`)} className='img-fluid' alt={`project ${project.id}`} />
                    </Col>
                ))}
            </Row>
            <Row>
                <Col lg={3} className='my-col'>
                    <button className="custom-btn">All Project »</button>
                </Col>
            </Row>
        </Container>
    </>
);

export default React.memo(RecentProject);