import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleReview from './SingleReview.jsx';

const ReviewsList = () => {

  // [reviewList, setReviewList] = useState([]);

  // useEffect(() => {
  //   fetch();
  // })

  // const fetch = () => {
  //   axios.get('/reviews/')
  //     .then(data => console.log(data))
  //     .then(data => setReviewList(data))
  //     .catch(err => console.log(err));
  // }

  return (
    <div><SingleReview /></div>
  )
}

export default ReviewsList;