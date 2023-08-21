import React, {useEffect, useState} from 'react';

export default function ProductInfo ({currentProduct}) {
  console.log('testing ', currentProduct);
  return (
    <div>
      <h2>Product Info</h2>
      <h4>{currentProduct.category}</h4>
      <h4>{currentProduct.name}</h4>
      <h3>{currentProduct.default_price}</h3>
    </div>
  );
}