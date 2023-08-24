import React, { useState, useEffect} from 'react';

export default function StyleSelector ({productStyles, setCurrentStyle, currentStyle, setPhotoList, photoList}) {
  let styleOptionDiv;
  let testDiv;
  //console.log('photoList before click: ', photoList);

  useEffect(()=>{
    if (currentStyle.length > 0) {
      console.log('in useEffect', currentStyle);
      console.log('in useEffect', currentStyle.photos);// doesn't work
    }
  }, [currentStyle]);

  let styleChange = function (newStyle) {
    const updatedStyle = productStyles.find((style) => style.style_id === newStyle);
    setCurrentStyle([updatedStyle]);
    console.log('styleChange: ', photoList);
    setPhotoList(currentStyle.photos);
  };

  let styleOption = function () {
    if (productStyles.length > 0) {
      return styleOptionDiv =
      productStyles.map((product, ind) =>{
        return <div onClick={()=>{ styleChange(product.style_id); }}>
          <img src={product.photos[0].thumbnail_url} height={50} width={50} key={ind}/>
        </div>;
      });
    }
  };
  styleOption();

  return (
    <div>
      <h4>Style selector</h4>
      {testDiv}
      {styleOptionDiv}
    </div>
  );
}