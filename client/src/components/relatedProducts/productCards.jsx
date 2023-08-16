import React from 'react';
import axios from 'axios';
import RelatedList from './relatedList.jsx';

const ProductCard = ({styles, photo, product}) => {

  if (!styles || !photo || !product) {
    return null;
  }

  const name = styles.name;
  const price = styles.original_price;

  console.log('me product', product)


  return (
    <div className='productCard'>
      <div className='thumbSpace'>
        <img className='cardImage' src={photo} />
      </div>
      <div className='container'>
        <h2>CATEGORY</h2>
        <h3><b>{name}</b></h3>
        <p>${price}</p>
      Rating
      </div>
    </div>
  );
};

export default ProductCard;

