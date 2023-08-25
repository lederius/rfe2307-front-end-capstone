import React, { useEffect, useState} from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

export default function Detail ({currentProduct, productDetails, productStyles, productReviews, currentStyle, setCurrentStyle, setPhotoList, photoList, userCart, setUserCart}) {

  console.log('currentStyle in detail', currentStyle);

  return (
    <div className="detail">
      <h3>Details</h3>
      <ProductInfo
        currentProduct={currentProduct}
        productDetails={productDetails}
        productReviews={productReviews}
        productStyles={productStyles}
        currentStyle={currentStyle}
      />
      <StyleSelector
        productStyles={productStyles}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
        setPhotoList={setPhotoList}
        photoList={photoList}

      />
      <AddToCart
        productStyles={productStyles}
        currentStyle={currentStyle}
        userCart={userCart}
        setUserCart={setUserCart}
      />
    </div>
  );
}