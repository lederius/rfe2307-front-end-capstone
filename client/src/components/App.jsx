import React, { useState, useEffect } from "react";
import QuestionsList from "../components/questionsAnswers/QuestionsList.jsx";
const App = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      React is running! Great job team! Now go to work.....
      </h1>
      {/* <productDetails /> */}
      <QuestionsList />
      {/* <ratingReviews /> */}
      {/* <relatedProducts /> */}
    </div>
  );
};

export default App;
