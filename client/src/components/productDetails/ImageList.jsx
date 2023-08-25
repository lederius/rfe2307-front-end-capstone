import React, { useEffect, useState} from 'react';

export default function ImageList ({productStyles, currentStyle, photoList, setCurrentImage, currentImg}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevImg, setPrevImg] = useState(null);
  const [nextImg, setNextImg] = useState(null);
  const [centerImg, setCenterImg] = useState(0);
  console.log('photoList on imageList: ', photoList);

  let mainImg = <img src={currentImg} height={300} width={300} />;

  let photoGallery = photoList && photoList.length >= 1 && photoList.map((photo, ind)=>{
    if (photo.url === currentImg) {
      return <img className='photoGallery currentImg'src={photo.url} height={80} width={80} key={ind}/>;
    }
    return <img className='photoGallery'src={photo.url} height={80} width={80} key={ind}/>;
  });

  const renderCurrentImag = function () {
    //console.log('in photolist func');
    if (photoList && photoList.length > 0 ) {
      setCurrentImage(photoList[currentIndex].url);
      setPrevImg(photoList[photoList.length - 1]);
    }
  };

  useEffect(()=>{
    renderCurrentImag();
  }, [photoList, currentIndex]);



  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % photoList.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + photoList.length) % photoList.length);
  };
  const changeImg = function(ind) {

  };
  // console.log('currentStyle: ', currentStyle);
  // console.log('productStyles: ', productStyles);
  return (
    <div className="imageList">
      <div className='galleryContainer'>
        {photoGallery}
      </div>
      <button className='prevButton imgButton' onClick={()=>{ handlePrevious(); }} >Previous</button>
      {mainImg}
      <button className='nextButton imgButton' onClick={()=>{ handleNext(); }} >Next</button>
    </div>
  );
}