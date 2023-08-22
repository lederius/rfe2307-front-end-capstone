import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function ProductInfo ({productDetails, currentProduct, productReviews, productStyles, currentStyle}) {
  // console.log('productDetals ', productDetails);
  // console.log('currentProduct :', currentProduct);
  // console.log('productStyles: ', productStyles);
  //create an ternary statemenet to render
  //need reviews data
  // create a var to store avg rating
  //use reduce, add rating value, divide by arr length
  let starDiv;
  let priceDiv;
  let descriptionDiv;
  const averageRating = function () {
    let numberOfRatings = productReviews.length;
    let intialValue = 0;
    if (numberOfRatings > 0) {
      let ratingArr = productReviews.map(product=>{
        return product.rating;
      });
      // console.log('ratingArr: ', ratingArr);
      let totalRating = ratingArr.reduce((totalRating, currentRating) =>{
        return totalRating + currentRating;
      });
      let avgRating = totalRating / numberOfRatings;
      //need to make inline with styling
      starDiv =
        <span>
          <p>{avgRating} <strong>stars</strong><a href="#"> Read All {numberOfRatings} Reviews</a> </p>
        </span>;
    } else {
      return 'no value yet';
    }
  };
  averageRating();

  const price = function () {
    if (productStyles.length > 0 ) {
      // console.log('currentStyle -->: ', currentStyle);
      /*
      the currentStyles variable will be based off of currentStyle in state
      for testing purposes I am using productStyles[2] to toggle with the price styling
      */
      let currentStyles = productStyles[2];
      if (currentStyles.sale_price === null) {
        return priceDiv =
      <div>
        ${currentStyles.original_price}
      </div>;
      } else if (typeof currentStyles.sale_price === 'string') {
        return priceDiv =
        <div>
          <span style={{color: 'red'}}>
            ${currentStyles.original_price}
          </span>
          <span>
            <strike>${currentStyles.sale_price}</strike>
          </span>
        </div>;
      }
    }
  };
  price();

  const description = function () {
    if (productDetails.description !== undefined &&
        productDetails.description.length > 0) {
      // console.log('productDetails', productDetails);
      return descriptionDiv =
      <textarea name='description' rows={4} cols={25} >
        {productDetails.description}
      </textarea>;
    }
  };
  description();
  return (
    <div>
      {starDiv}
      <h4>{productDetails.category}</h4>
      <h4>{productDetails.name}</h4>
      {priceDiv}
      {descriptionDiv}

      {/* will make these icons */}
      <span><a target='_blank' href='https://www.facebook.com'>Facebook</a></span><br/>
      <span><a target='_blank' href='https://www.x.com'>X</a></span><br/>
      <span><a target='_blank' href='https://www.pinterest.com'>Pinterest</a></span>
    </div>
  );
}