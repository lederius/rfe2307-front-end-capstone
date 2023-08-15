import React from 'react';
import './related.css';
import RelatedList from './relatedList.jsx';

const ProductCard = ({results}) => {

  for (var element of results) {
    if (element['default?'] && element.photos[0].thumbnail_url) {
      var defaultStyle = element;
      break;
    }
    if (element.photos[0].thumbnail_url) {
      var defaultStyle = element;
    }
    if (!defaultStyle) {
      continue;
    }
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

