import React, { useEffect, useState} from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './ProductInfo.jsx';
import AddToCart from './AddToCart.jsx';

export default function Detail ({currentProduct}) {
  //should have 3 containers
  //product info ,style selector, and add to carts
  //these div should be in col

  return (
    <div>
      <h3>Detial</h3>
      <ProductInfo currentProduct={currentProduct}/>
      <StyleSelector />
      <AddToCart />
    </div>
  );
}