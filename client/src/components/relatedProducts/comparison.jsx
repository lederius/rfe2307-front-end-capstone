import React from 'react';
import './comparison.css';

const Comparison = () => {
  return (
    <div className='modalContainer'>
      <h4 className='comparing'>COMPARING</h4>
      <div className='comparedItem'>
        <p>Product Title</p>
        <p>Product Title</p>
      </div>
      <ul className='featureList'>
        <li>Feature</li>
        <li>Feature</li>
        <li>Feature</li>
        <li>Feature</li>
      </ul>
    </div>
  );
};

export default Comparison;