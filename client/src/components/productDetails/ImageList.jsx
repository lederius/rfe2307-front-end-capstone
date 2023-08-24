import React, { useEffect, useState} from 'react';

export default function ImageList ({productStyles, currentStyle}) {
  // console.log('productStyles: ', productStyles);
  // console.log('currentStyle: ', currentStyle);
  //console.log('photoList on imageList: ', photoList);
  const [currentImg, setCurrentImage] = useState(null);
  console.log('imageList: ', currentStyle);
  console.log('photoArr: ', currentStyle.photos); // doesn't work

  const imgList = function() {
    for (i in currentStyle) {
      console.log(currentStyle[i]);
    }
  };

  useEffect(()=>{
    // imgList();
  }, [currentStyle]);
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
  let mainImg = null;


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