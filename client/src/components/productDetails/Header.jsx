
import React, { useEffect, useState} from 'react';

const Header = ({currentProduct, allProducts, setCurrentProduct}) => {
  // give entire banner a background color;
  const searchProduct = (e) =>{
    e.preventDefault();
    let product = e.target['product'].value;
    // console.log('search product -->', product);
    //search state for product with matching id

    for (product of allProducts) {
      // console.log('product in loop: ', product);
      if (product.id === product) {
        // console.log('match');
        setCurrentProduct(product);
      }
    }
    e.target['product']. value = '';
  };
  return (
    <div className='Header'>
      <div>
        <h1 className="title">Driplo</h1>
        <span>
          <form onSubmit={searchProduct} className="searchBar" name="search">
            <label>
              <input type="text" name="product"></input>
            </label>
            <button type="submit" name="search">Search</button>
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