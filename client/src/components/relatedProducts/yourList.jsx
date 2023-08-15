import React from 'react';
import './related.css';
import RelatedList from './relatedList.jsx';

const ProductCard = ({styles, photo}) => {

  if (!styles || !photo) {
    return null;
  }

  const name = styles.name;
  const price = styles.original_price;


  return (
    <div className='productCard'>
      <img src={photo} />
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

