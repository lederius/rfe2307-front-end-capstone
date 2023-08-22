import React, { useState, useEffect} from 'react';

export default function StyleSelector ({productStyles}) {
  //productStyles is based of currentProduct in state
  //display stles in cols of 4
  // need to pass in setProductStyle from index
  // console.log(productStyles, 'productStyles');
  let styleOptionDiv;
  let testDiv;
  let styleChange = function (newStyle) {
    // console.log('arg: ', newStyle);
    // need to update currentStyle with setProductStyle
  };
  let styleOption = function () {
    if (productStyles.length > 0) {
      // testDiv = <img src={productStyles[0].photos[0].thumbnail_url} height={50} width={50} key={1}/>;
      return styleOptionDiv =
      productStyles.map((product, ind) =>{
        // { console.log('product.photos[0]:', product.photos[0].thumbnail_url); }
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