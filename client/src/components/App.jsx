import React, { useState, useEffect } from 'react';
import QuestionAnswerContainer from './questionsAnswers/QuestionAnswerContainer.jsx';
import RelatedProducts from './relatedProducts/relatedProducts.jsx';
import RatingReviews from './RatingReviews/RatingsReviews.jsx';
import ProductDetails from './productDetails/index.jsx';





const App = () => {
  return (
    <div>
      <ProductDetails />
      <RelatedProducts/>
      <QuestionAnswerContainer />
      <RatingReviews />
    </div>
  );
};

export default App;
