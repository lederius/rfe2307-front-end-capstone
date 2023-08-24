import React, { useEffect, useState} from 'react';

export default function ImageList ({productStyles, currentStyle, photoList, setCurrentImage, currentImg}) {
  // console.log('productStyles: ', productStyles);
  // console.log('currentStyle: ', currentStyle);
  //console.log('photoList on imageList: ', photoList);
  // const [currentImg, setCurrentImage] = useState(photoList[0][0]);
  const [prevImg, setPrevImg] = useState(null);
  const [nextImg, setNextImg] = useState(null);
  // console.log('photoList[0]: ', photoList[0]);
  // console.log('currentImg: ', currentImg);

  // const imgList = function() {
  //   for (i in currentStyle) {
  //     console.log(currentStyle[i]);
  //   }
  // };
  let mainImg = <img src={currentImg} height={50} width={50} />;

  // console.log('currentStyle.photos: ', currentStyle.photos);
  // useEffect(()=>{
  //   //this changes img base of current style being used
  //   setCurrentImage(currentStyle.photos[0].url);
  //   // console.log('currentImg', currentImg);
  // }, [currentStyle]);
  //create prevImage and nextImage for state
  // give entire banner a background color;
  // use flex box, overlay, position
  //add hover with border and focus on thumbnail
  //create 3 states for the imgs
  //set currentImage with photo from current style

  //create function that set the currentImg State with photoList[0]
  const renderCurrentImag = function () {
    //console.log('in photolist func');
    if (photoList.length > 0 ) {
      setCurrentImage(photoList[0].url);
      // console.log('photoList in funct :', photoList);
      // console.log('typeof photoList[0] in function :', typeof photoList[0]);
      // console.log('photoList[0].url in function :', photoList[0].url);
      // for (let keys in photoList[0]) {
      //   console.log('keys: ', keys);
      // }
      // console.log('photoList[0]thumbnail_url in function :', photoList[0].thumbnail_url);
      // console.log('photoList[0].url in function :', photoList[0].url);
    }
  };

  useEffect(()=>{
    renderCurrentImag();
  }, [photoList]);

  // <img src={currentStyle.photos.thumbnail_url} height={50} width={50} key={ind}/>

  const changeImg = function(whichPic) {
    console.log(whichPic);
  };
  // console.log('currentStyle: ', currentStyle);
  // console.log('productStyles: ', productStyles);
  return (
    <div className="imageList">
      <button className='prevButton imgButton' onClick={()=>{ changeImg(-1); }} >Previous</button>
      <br/>
      <button className='nextButton imgButton' onClick={()=>{ changeImg(1); }} >Next</button>
      {mainImg}
      {/* <div className>
        <img />
      </div>
      <div>
        <img />
      </div>
      <div>
        <img />
      </div> */}
    </div>
  );
}