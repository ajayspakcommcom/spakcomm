import React, { useEffect, useState } from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { CLIENTS, ProjectSubCategory, getEnumProperty } from '@/libs/common';

interface GalleryImg {
  id?: number;
  imageUrl?: string;
  title?: string;
  client?: string;
  category?: string;
  subCategory?: string;
}

interface ImageLightGalleryProps {
  galleryImgData?: GalleryImg[];
}




const ImageLightGallery: React.FC<ImageLightGalleryProps> = ({ galleryImgData }) => {

  const [data, setData] = useState<GalleryImg[]>(galleryImgData!);
  const [buttonText, setButtonText] = useState<{ key: string; value: string }[]>([{ key: '', value: '' }]);

  useEffect(() => {
    setButtonText(getEnumProperty(ProjectSubCategory))
    return () => {
      console.log('cleaned...');
    };
  }, []);

  const getEnumValueHandler = (value: string) => {
    let originalData = galleryImgData!.filter((item: GalleryImg) => { return item.subCategory === value });
    setData(originalData);
  };

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <>
      <ul className='filter-btn-ul'>
        {buttonText.map(({ key, value }, index) => (
          <li key={index}>
            <a onClick={() => getEnumValueHandler(value)}>{value}</a>
          </li>
        ))}
      </ul>

      <div className="light-gallery">
        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
          {data!.map((item, index) => (
            <a key={item.id} href={item.imageUrl} className='gallery-img'>
              <img alt={item.title} src={item.imageUrl} className='img-responsive' />
            </a>
          ))}
        </LightGallery>

        {data.length < 1 && <div className='image-gallery-no-data'><p>No Data Found</p></div>}

      </div>
    </>
  )
}

export default React.memo(ImageLightGallery);

//https://www.lightgalleryjs.com/docs/react/