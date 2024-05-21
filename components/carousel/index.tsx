import * as React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

interface CarouselComponentProps {
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ }) => {

    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image src={require('../../public/assets/img/home/home.png')} alt='' className='full-img' />
                {
                    false &&
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                }
            </Carousel.Item>
            <Carousel.Item>
                <Image src={require('../../public/assets/img/home/home.png')} alt='' className='full-img' />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={require('../../public/assets/img/home/home.png')} alt='' className='full-img' />
            </Carousel.Item>
        </Carousel>
    );
};

export default React.memo(CarouselComponent);
