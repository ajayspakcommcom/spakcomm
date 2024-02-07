import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AutoSlideSwipper from '@/model/AutoSlideSwipper';


interface AutoSlideProps {

}



const autoSlideSwipperData: AutoSlideSwipper[] = [
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


const AutoSlideSwiper: React.FC<AutoSlideProps> = () => {

    const swiperParams = {
        spaceBetween: 15,
        slidesPerView: 6,
        loop: true,
        autoplay: { delay: 100, disableOnInteraction: false },
        onSlideChange: () => console.log('slide change'),
        onSwiper: (swiper: any) => console.log(swiper)
    };

    return (
        <>
            <Container className='client-tel-wrappwer'>
                <Row>
                    <Col>
                        <h2>Clientele</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className='my-col'>
                        <Swiper {...swiperParams}>
                            {autoSlideSwipperData.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <Image src={require(`../public/assets/img/clientele/${slide.imagePath}`)} className='img-fluid' alt={`project ${slide.id}`} width={100} height={100} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </>
    );

};

export default React.memo(AutoSlideSwiper);