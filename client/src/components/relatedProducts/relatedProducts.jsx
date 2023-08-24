import React from 'react';
import RelatedList from './relatedList.jsx';
import YourList from './yourList.jsx';
import axios from 'axios';
import './related.css';


const RelatedProducts = ({theId, theSid}) => {
  const mainId = theId || 37971;
  const sid = theSid || 225228;

  return (
    <div className='mainRelated'>
      <div data-testid='RLload' className='relatedproducts'>
        <h2 className='sectionHeading'> RELATED PRODUCTS <hr className="theLine" /></h2>
        <RelatedList displayedId={mainId}/>
      </div>
      <div data-testid='YOload' className='youroutfit'>
        <h2 className='sectionHeading'> YOUR OUTFIT <hr className="theLine" /></h2>
        <YourList mainId={mainId} sid={sid}/>
      </div>
    </div>
  );


};

export default RelatedProducts;