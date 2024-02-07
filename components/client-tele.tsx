import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import RecentProject from '@/model/RecentProject';
import AutoSlideSwipper from './auto-slide-swipper';



interface ClientTeleProps {

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


const ClientTele: React.FC<ClientTeleProps> = ({ }) => (
    <>
        <AutoSlideSwipper />
    </>
);

export default React.memo(ClientTele);