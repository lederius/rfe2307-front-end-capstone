import React from 'react';
import RelatedList from './relatedList.jsx';
import YourList from './yourList.jsx';
import axios from 'axios';
import './related.css';


const RelatedProducts = () => {

  axios.get('http://localhost:9000/products')
    .then(response => {
      console.log('this is respone', response.data);
    })
    .catch(error =>
      console.log('An error fetching from server:', error));

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