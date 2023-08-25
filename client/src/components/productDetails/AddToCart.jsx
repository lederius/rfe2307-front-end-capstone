import React, {useEffect, useState} from 'react';

//need two drop downs and a button
//what states do i need? currentStyle,

//

export default function AddToCart ({productStyles, currentStyles}) {
  const [openSize, setOpenSize] = useState(false);
  const [openQuantity, setopenQuantity] = useState(false);

  const handleOpenSize = function() {
    console.log('handleSizeOpen works');
    setOpenSize(!openSize);
  };
  const handleOpenQuantity = () => {
    console.log('handleQuantityOpen works');
    setopenQuantity(!openQuantity);
  };

  const handleMenuOne = () => {
    console.log('in menu one');
    setOpenSize(false);
  };

  const handleMenuTwo = () => {
    console.log('in menu two');
    setOpenSize(false);
  };
  // console.log('productStyles: ', productStyles);
  // console.log('currentStyles:  ', currentStyles);

  return (
    <div className="addToCartContainer">
      <h4>Add To Cart</h4>
      <div className="dropDown sizeDropDown">
        <button onClick={handleOpenSize}>Size</button>
        {openSize ? (
          <ul className="menu menuSize">
            <li className="size-item">
              <button onClick={handleMenuOne}>Size Medium</button>
            </li>
            <li className="size-item">
              <button onClick={handleMenuTwo}>Size Large</button>
            </li>
          </ul>
        ) : null}
      </div>
      <div className="dropDown quantityDropDown">
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