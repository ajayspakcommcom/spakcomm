import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

interface galleryImg {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
}

interface ImageLightGalleryProps {
  galleryImgData: galleryImg[];
}




const ImageLightGallery: React.FC<ImageLightGalleryProps> = ({ galleryImgData }) => {

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <>
      <div className="light-gallery">
        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>

          {galleryImgData.map((item, index) => (
            <a key={item.id} href={item.imageUrl} className='gallery-img'>
              <img alt={item.title} src={item.imageUrl} className='img-responsive' />
            </a>
          ))}

        </LightGallery>
      </div>
    </>
  )
}

export default React.memo(ImageLightGallery);

//https://www.lightgalleryjs.com/docs/react/