import React, { useEffect, useState} from 'react';

export default function ImageList ({productStyles, currentStyle, photoList, setCurrentImage, currentImg}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevImg, setPrevImg] = useState(null);
  const [nextImg, setNextImg] = useState(null);
  const [centerImg, setCenterImg] = useState(0);

  let mainImg = <img src={currentImg} height={300} width={300} />;
  const imgFunc = function (num) {
    setCurrentImage(photoList[num].url);
  };

  let photoGallery = photoList && photoList.length >= 1 && photoList.map((photo, ind)=>{
    if (photo.url === currentImg) {
      return <img className='photoGallery currentImg'src={photo.url} height={80} width={80} key={ind}
        onClick={imgFunc(ind)}/>;
    }
    return <img className='photoGallery'src={photo.url} height={80} width={80} key={ind}
      onClick={()=>{ imgFunc(ind); }}/>;
  });

  const renderCurrentImag = function () {
    if (photoList && photoList.length > 0 ) {
      setCurrentImage(photoList[currentIndex].url);
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