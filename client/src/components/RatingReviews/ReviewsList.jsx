import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleReview from './SingleReview.jsx';

const ReviewsList = () => {
  const id = '37315';

  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    fetch();
  }, [])

  const fetch = () => {
    axios.get(`/reviews/${id}`, { params: { productID: id } })
      .then(res => setReviewList(res.data))
      .catch(err => console.log('failed client get req', err));
  }

  return (
    <div><SingleReview reviewList={reviewList}/></div>
  )
}

export default ReviewsList;