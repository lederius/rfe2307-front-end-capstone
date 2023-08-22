import React, { useEffect, useState} from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

export default function Detail ({currentProduct, productDetails, productStyles, productReviews, currentStyle}) {
  //should have 3 containers
  //product info ,style selector, and add to carts
  //these div should be in col
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
      />
      <AddToCart />
    </div>
  );
}