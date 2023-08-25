
import React, { useEffect, useState} from 'react';
import ImageList from './ImageList.jsx';
import Detail from './Detail.jsx';
import axios from 'axios';

export default function ProductContainer ({currentProduct, userCart, setUserCart}) {
  const [productDetails, setProductDetails] = useState([]);
  const [productStyles, setStyles] = useState([]);
  const [productReviews, setProductReviews] = useState([]);
  const [currentStyle, setCurrentStyle] = useState([]);
  const [photoList, setPhotoList] = useState([]);
  const [currentImg, setCurrentImage] = useState(null);

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
        setPhotoList(product.data.results[0].photos);
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
  return (
    <div >
      {currentStyle ? (
        <div className="productContainer">
          <ImageList
            photoList={photoList}
            currentStyle={currentStyle}
            productDetails={productDetails}
            productStyles={productStyles}
            setCurrentImage={setCurrentImage}
            currentImg={currentImg}/>
          <Detail
            currentProduct={currentProduct}
            productDetails={productDetails}
            productStyles={productStyles}
            productReviews={productReviews}
            currentStyle={currentStyle}
            setCurrentStyle={setCurrentStyle}
            setPhotoList={setPhotoList}
            photoList={photoList}
            userCart={userCart}
            setUserCart={setUserCart}
          />
        </div>) : null}
      {/* <ImageList
        photoList={photoList}
        currentStyle={currentStyle}
        productDetails={productDetails}
        productStyles={productStyles}/>
      <Detail
        currentProduct={currentProduct}
        productDetails={productDetails}
        productStyles={productStyles}
        productReviews={productReviews}
        currentStyle={currentStyle}
        setCurrentStyle={setCurrentStyle}
        setPhotoList={setPhotoList}
        photoList={photoList}
      /> */}
    </div>
  );
}