import React, { useEffect, useState} from 'react';

export default function ImageList ({productStyles, currentStyle}) {
  // const [currentImage, setCurrentImage] = useState([null]);
  //create prevImage and nextImage for state
  // give entire banner a background color;
  // use flex box, overlay, position
  //add hover with border and focus on thumbnail
  const changeImg = function(whichPic) {
    console.log(whichPic);
  };
  console.log('currentStyle: ', currentStyle);
  console.log('productStyles: ', productStyles);
  return (
    <div className="imageList">
      <h3>Image List</h3>
      <button onClick={()=>{ changeImg(-1); }}>Previous</button>
      <br/>
      <button onClick={()=>{ changeImg(1); }}>Next</button>
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