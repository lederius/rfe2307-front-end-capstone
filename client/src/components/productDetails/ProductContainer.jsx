
import React, { useEffect, useState} from 'react';
import ImageList from './ImageList.jsx';
import Detail from './Detail.jsx';
import axios from 'axios';

export default function ProductContainer ({currentProduct}) {
  const [productDetails, setProductDetails] = useState([]);
  const [productStyles, setStyles] = useState([]);
  const [productReviews, setProductReviews] = useState([]);
  const [currentStyle, setCurrentStyle] = useState([]);
  //this container has twp child
  //gallery and detail
  //call axios to get product detail
  const id = currentProduct.id;
  let getProduct = function () {
    axios.get(`/products/${id}`, {params: {productID: id}})
      .then(product =>{
        setProductDetails(product.data);
      })
      .catch(err=>{
        console.error(err);
      });
  };
  let getStyles = function () {
    axios.get(`/products/${id}/styles`, {params: {productID: id}})
      .then(product =>{
        setStyles(product.data.results);
        setCurrentStyle(product.data.results[0]);
      })
      .catch(err=>{
        console.error(err);
      });
  };
  let getReviews = function () {
    axios.get(`/reviews/${id}`, { params: { productID: id } })
      .then(reviews=>{
        setProductReviews(reviews.data);
      })
      .catch(error =>{
        console.error(error);
      });
  };

  useEffect(()=>{
    getProduct();
    getStyles();
    getReviews();
  }, [currentProduct]);
  //put detail in state
  return (
    <div className="productContainer">
      <ImageList
        productDetails={productDetails}
        productStyles={productStyles}/>
      <Detail
        currentProduct={currentProduct}
        productDetails={productDetails}
        productStyles={productStyles}
        productReviews={productReviews}
        currentStyle={currentStyle}
      />
    </div>
  );
}