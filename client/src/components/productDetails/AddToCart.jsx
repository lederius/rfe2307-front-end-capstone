import React, {useEffect, useState} from 'react';
import Size from './SizeDropdown.jsx';
import Qunatity from './QunatityDropdown.jsx';


export default function AddToCart ({currentStyle, userCart, setUserCart}) {

  const [openSize, setOpenSize] = useState(false);
  const [openQuantity, setopenQuantity] = useState(false);

  const handleOpenSize = function() {
    //console.log('handleSizeOpen works');
    setOpenSize(!openSize);
  };
  const handleOpenQuantity = () => {
    //console.log('handleQuantityOpen works');
    setopenQuantity(!openQuantity);
  };

  const handleMenuOne = () => {
    //console.log('in menu one');
    setOpenSize(false);
  };

  const handleMenuTwo = () => {
    //console.log('in menu two');
    setOpenSize(false);
  };

  for (let keys in currentStyle) {
    // console.log('keys: ', keys);
    if (keys === 'skus') {
      //console.log('[currentStyle[keys]]: ', [currentStyle[keys]]);
    }
  }
  //dynamically create buttons tht render size/quant text

  return (
    <div className="addToCartContainer">
      <h4>Add To Cart</h4>
      <Size
        userCart={userCart}
        setUserCart={setUserCart}
        openSize={openSize}
        currentStyle={currentStyle}
        trigger={<button onClick={handleOpenSize}>Size</button>}
        menu={[
          <button onClick={handleMenuOne}>Size Medium</button>,
          <button onClick={handleMenuTwo}>Size Large</button>
        ]}
      />
      <div className="dropdown quantityDropDown">
        <button onClick={handleOpenQuantity}>Quantity</button>
        {openQuantity ? (
          <ul className="menu menuQuantity">
            <li className="quantity-item">
              <button>Add 1</button>
            </li>
            <li className="quantity-item">
              <button>Add 2</button>
            </li>
          </ul>
        ) : null}
      </div>

    </div>
  );
}