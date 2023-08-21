
import React, { useEffect, useState} from 'react';
import ImageList from './ImageList.jsx';
import Detail from './Detail.jsx';

export default function ProductContainer ({currentProduct}) {
  //this container has twp child
  //gallery and detail
  // console.log('currentProduct: ', currentProduct);
  return (
    <div className="productContainer">
      <ImageList />
      <Detail currentProduct={currentProduct}/>
    </div>
  );
}