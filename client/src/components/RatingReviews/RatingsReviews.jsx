import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MetaRatings from './MetaRatings.jsx';
import ReviewsList from './ReviewsList';

const RatingReviews = () => {
  const id = '37312';

  const [reviewList, setReviewList] = useState([]);
  const [meta, setMeta] = useState([]);
  const [modal, setModal] = useState(false);

  const fetch = () => {
    axios.get(`/reviews/${id}`, { params: { productID: id } })
      .then(res => setReviewList(res.data))
      .catch(err => console.log('failed client get req', err));

    axios.get(`/reviews/meta/${id}`, { params: { productID: id } })
      .then(res => setMeta(res.data))
      .catch(err => console.log('failed client get req', err));
  };

  useEffect(() => {
    fetch();
  }, []);


  return (
    <div>
      <h1 role='heading'>RATINGS & REVIEWS</h1>
      <div className='grid grid-cols-3 gap-5'>
        <div className='col-span-1'><MetaRatings meta={meta} modal={modal} setModal={setModal}/></div>
        <div className='col-span-2'><ReviewsList reviewList={reviewList} id={id}/></div>
      </div>
    </div>
  );
};

export default RatingReviews;