import React from 'react';
import './related.css';
import RelatedList from './relatedList.jsx';

const ProductCard = ({results}) => {
  var defaultStyle;
  for (var element of results) {
    if (element['default?']) {
      defaultStyle = element;
    }
  }
  if (!defaultStyle) {
    defaultStyle = results[0];
  }

  return (
    <div className='productCard'>
      <img src={defaultStyle.photos[0].thumbnail_url} />
      <div className='container'>
        <h2>CATEGORY</h2>
        <h3><b>{defaultStyle.name}</b></h3>
        <p>${defaultStyle.original_price}</p>
      Rating
      </div>
    </div>
  );
};

export default ProductCard;

