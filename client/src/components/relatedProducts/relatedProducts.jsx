import React from 'react';
import RelatedList from './relatedList.jsx';
import YourList from './yourList.jsx';

const RelatedProducts = () => {


  return (
    <div className='mainRelated'>
      <div className='relatedproducts'>
        <h2> RELATED PRODUCTS </h2>
        <RelatedList />
      </div>
      <div className='youroutfit'>
        <h2> YOUR OUTFIT </h2>
        <YourList />
      </div>
    </div>
  );


};

export default RelatedProducts;