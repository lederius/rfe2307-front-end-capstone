import React, { useEffect, useState} from 'react';
import Header from './Header.jsx';
import ProductContainer from './ProductContainer.jsx';
import axios from 'axios';


export default function ProductDetails () {
  //create state that does an onload axios calll
  //product passed to state
  //state passed to children
  const [allProducts, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [productStyles, setStyles] = useState([]);
  const [productReviews, setProductReviews] = useState([]);

  useEffect(()=>{
    axios.get('/products')
      .then(products =>{
        setProducts(products.data);
        setCurrentProduct(products.data[0]);
      })
      .catch(err=>{
        console.error('errorr ---> ', err);
      });
  }, []);

  return (
    <div className="productOverview">
      <Header
        currentProducts={currentProduct}
        allProducts={allProducts}
        setCurrentProduct = {setCurrentProduct}/>
      <ProductContainer
        currentProduct={currentProduct}
        currentProduct={currentProduct}
        productDetails={productDetails}
        productStyles={productStyles}
        productReviews={productReviews}
      />
    </div>
  );
}