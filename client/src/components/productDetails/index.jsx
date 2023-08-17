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
  const [productDetail, setProductDetail] = useState([]);
  console.log('how many times');

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
    // axios.get()
    console.log('useEffect fired once');
  }, []);
  // console.log('currentProd: ', currentProduct);
  return (
    <div className="productOverview">
      <Header
        currentProducts={currentProduct}
        setCurrentProduct = {setCurrentProduct}
        allProducts={allProducts}/>
      <ProductContainer currentProduct={currentProduct}/>
    </div>
  );
}