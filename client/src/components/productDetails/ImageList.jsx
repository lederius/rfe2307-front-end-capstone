import React, { useEffect, useState} from 'react';

export default function ImageList ({productStyles, currentStyle, photoList, setCurrentImage, currentImg}) {
  const [prevImg, setPrevImg] = useState(null);
  const [nextImg, setNextImg] = useState(null);
  const [centerImg, setCenterImg] = useState(0);
  //console.log('photoList on imageList: ', photoList);

  let mainImg = <img src={currentImg} height={300} width={300} />;
  let photoGallery = photoList.map((photo, ind)=>{
    if (photo.url === currentImg) {
      return <img className='photoGallery currentImg'src={photo.url} height={80} width={80} key={ind}/>;
    }
    return <img className='photoGallery'src={photo.url} height={80} width={80} key={ind}/>;
  });

  const renderCurrentImag = function () {
    //console.log('in photolist func');
    if (photoList.length > 0 ) {
      setCurrentImage(photoList[0].url);
      setPrevImg(photoList[photoList.length - 1]);
    }
  };

  useEffect(()=>{
    renderCurrentImag();
  }, [photoList]);

  // const changeImg = function(ind) {
  //   console.log('photoList in changImg: ', photoList);
  //   setCurrentImage(photoList[0].postion.url);
  // };
  // console.log('currentStyle: ', currentStyle);
  // console.log('productStyles: ', productStyles);
  return (
    <div className="imageList">
      <div className='galleryContainer'>
        {photoGallery}
      </div>
      <button className='prevButton imgButton' onClick={()=>{ changeImg(-1); }} >Previous</button>
      {mainImg}
      <button className='nextButton imgButton' onClick={()=>{ changeImg(1); }} >Next</button>
    </div>
  );
}