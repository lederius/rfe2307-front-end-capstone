import React from 'react';
import RelatedList from './relatedList.jsx';
import YourList from './yourList.jsx';
import axios from 'axios';
import './related.css';


const RelatedProducts = () => {


  return (
    <div className='mainRelated'>
      <div className='relatedproducts'>
        <h2 className='sectionHeading'> RELATED PRODUCTS <hr className="theLine" /></h2>
        <RelatedList displayedId={37322}/>
      </div>
      <div className='youroutfit'>
        <h2 className='sectionHeading'> YOUR OUTFIT <hr className="theLine" /></h2>
        <YourList />
      </div>
    </div>
  );


};

export default RelatedProducts;