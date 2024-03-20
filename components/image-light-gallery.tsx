import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


interface ImageLightGalleryProps {
  title?: string;
}

const imageUrls = [
  './assets/img/projects/BSV/Brochure/1.png',
  './assets/img/projects/BSV/Brochure/2.png',
];


const ImageLightGallery: React.FC<ImageLightGalleryProps> = ({ title }) => {

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <>
      <div className="App">
        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
          <div>
            {imageUrls.map((imageUrl, index) => (
              <a key={index} href={imageUrl} className='gallery-img'>
                <img alt={`Broucher ${index + 1}`} src={imageUrl} />
              </a>
            ))}
          </div>
        </LightGallery>
      </div>
    </>
  )
}

export default React.memo(ImageLightGallery);

//https://www.lightgalleryjs.com/docs/react/