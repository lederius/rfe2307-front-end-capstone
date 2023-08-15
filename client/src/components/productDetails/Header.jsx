
import React, { useEffect, useState} from 'react';
import './index.css';

const Header = () => {
  // give entire banner a background color;
  const searchProduct = (e) =>{
    e.preventDefault();
    let product = e.target['product'].value;
    console.log('search product -->', product);
    e.target['product']. value = '';
  };



  return (
    <div className='Header'>
      <div>
        <h1 className="title">Driplo</h1>
        <span>
          <form onSubmit={searchProduct} className="searchBar">
            <label>
              <input type="text" name="product"></input>
            </label>
            <button type="submit">Search</button>
          </form>
        </span>

      </div>
      <p>
          SITE-VIDE ANNOUNCEMENT MESSAGE! SALE/DISCOUNT
          --<strong>OFFER</strong>--
        <ul>NEW PRODUCT HIGHLIGHT</ul>
      </p>
    </div>
  );
};

export default Header;