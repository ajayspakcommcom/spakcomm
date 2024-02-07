import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import TestimonialSwipper from '@/model/TestimonialSwipper';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface TestimonailProps {

}

const testimonialData: TestimonialSwipper[] = [
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


const TestimonialSwiper: React.FC<TestimonailProps> = () => {

    const swiperRef = React.useRef<any>(null);

    const swiperParams = {
        modules: [Navigation, Pagination, Scrollbar, A11y],
        spaceBetween: 15,
        slidesPerView: 2,
        loop: true,
        autoplay: { delay: 100, disableOnInteraction: false },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        onSlideChange: () => console.log('slide change'),
        //onSwiper: (swiper: any) => console.log(swiper)
        onSwiper: (swiper: any) => (swiperRef.current = swiper),
    };

    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };


    return (
        <>
            <Container className='testimonial-wrappwer'>
                <Row>
                    <Col lg={12} className='my-col'>
                        <Swiper {...swiperParams}>
                            {testimonialData.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <Row>
                                        <Col lg={12}>
                                            <div className='testimonial-box'>
                                                <div className='header'>
                                                    <Image src={require(`../public/assets/img/testimonial/${slide.imagePath}`)} className='img-fluid' alt={`project ${slide.id}`} width={60} height={60} />
                                                    <div className='content'>
                                                        <b>Person Name</b>
                                                        <b>Designation - Company</b>
                                                    </div>
                                                </div>
                                                <div className='content'>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="swiper-button-next pointer" onClick={handleNextClick}></div>
                        <div className="swiper-button-prev pointer" onClick={handlePrevClick}></div>
                    </Col>
                </Row>
            </Container>
        </>
    );

};

export default React.memo(TestimonialSwiper);