import React, { useEffect, useState} from 'react';
import Header from './Header.jsx';
import ProductContainer from './ProductContainer.jsx';
import './index.css';
import axios from 'axios';


export default function ProductDetails () {
  //create state that does an onload axios calll
  //product passed to state
  //state passed to children
  const [allProducts, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(()=>{
    axios.get('/products')
      .then(products =>{
        // console.log(products);
        setProducts(products.data);
        setCurrentProduct(products.data[0]);

      })
      .catch(err=>{
        console.error('errorr ---> ', err);
      });
    console.log('i fired once');
  }, []);
  // console.log('currentProd: ', currentProduct);
  return (
    <div>
      <Header/>
      <ProductContainer currentProduct={currentProduct}/>
    </div>
  );
}