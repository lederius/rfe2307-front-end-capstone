import React, {useEffect, useState} from 'react';


export default function AddToCart ({currentStyle, userCart, setUserCart}) {

  const [openSize, setOpenSize] = useState(false);
  const [openQuantity, setopenQuantity] = useState(false);
  const [skus, setSkus] = useState(null);



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

  let quantityArr;
  let sizeButton = [];
  // let quantityButtons = [];

  //   quantityButtons.push(<li key={index} className="menu-item quantity-item">
  //   {menuItem}
  // </li>);
  let quantityButton;
  let sizeArr;
  let quantityButtons = function() {

    if (skus && Object.keys(skus).length >= 1 ) {
    //console.log('skus.keys  ;', Object.keys(skus));
      let arr = Object.keys(skus).map((obj, ind) =>{
        //make two buttons per each obj with each size or quant
      // console.log('obj in maps: ', obj);
      // console.log('skus[obj]', skus[obj]);
      // console.log('skus[obj][ind]', skus[obj].ind);
      // console.log('skus[obj][qunatity]', skus[obj].quantity);
      // console.log('skus[obj][size]', skus[obj].size);
        for (let keys in skus[obj]) {
          if (keys === 'qunatity') {
            return arr.push(
              <button onClick={handleMenuOne}>{skus[obj].quantity}</button>
            );
          }
          //   if (keys === 'size') {
          //     sizeButton.push(
          //       <button onClick={handleMenuOne}>{skus[obj].quantity}</button>
          //     );
          //   }
        }
      // if(){}
      // if(){}
      // for (let keys in obj) {
      //   console.log('the keys :', keys);
      // }
        // console.log('size', obj.length);
      });
    }
    return arr;
  };
  // return <button onClick={handleMenuOne}>Size Medium</button>
  let sizeList = function() {
    if (skus && Object.keys(skus).length >= 1 ) {
    //console.log('skus.keys  ;', Object.keys(skus));
      return sizeButton = Object.keys(skus).map((obj, ind) =>{
        return <li className="size-item">
          <button>{skus[obj].size}</button>
        </li>;
      });
    }
  };
  sizeList();

  let quantityList = function() {
    if (skus && Object.keys(skus).length >= 1 ) {
    //console.log('skus.keys  ;', Object.keys(skus));
      return quantityButton = Object.keys(skus).map((obj, ind) =>{
        return <li className="quantity-item">
          <button>{skus[obj].quantity}</button>
        </li>;
      });
    }
  };
  quantityList();
  //dynamically create buttons tht render size/quant text
  // console.log('currentStyle[keys]', currentStyle.skus);
  // console.log('sizeArr: ', sizeArr);

  useEffect(()=>{
    setSkus(currentStyle.skus);
  }, [currentStyle]);

  return (
    <div className="addToCartContainer">
      <h4>Add To Cart</h4>


      <div className="dropdown sizeDropdown">
        <button onClick={handleOpenSize}>Size</button>
        {openSize ? (
          <ul className="menu menuSize">
            {sizeButton}
          </ul>
        ) : null}
      </div>
      <div className="dropdown quantityDropDown">
        <button onClick={handleOpenQuantity}>Quantity</button>
        {openQuantity ? (
          <ul className="menu menuQuantity">
            {quantityButton}
          </ul>
        ) : null}
      </div>

    </div>
  );
}