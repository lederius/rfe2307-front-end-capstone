import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MetaRatings from './MetaRatings.jsx';
import ReviewsList from './ReviewsList';

const RatingReviews = () => {
  const id = '37311';

  const [reviewList, setReviewList] = useState([]);
  const [meta, setMeta] = useState([]);
  const [filters, setFilters] = useState([]);

  const fetch = () => {
    axios.get(`/reviews/${id}`, { params: { productID: id } })
      .then(res => {
        setReviewList(res.data);
      })
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
      <h1 className='ps-1'role='heading'>RATINGS & REVIEWS</h1>
      <div className='grid grid-cols-3 gap-7 p-1'>
        <div className='col-span-1'><MetaRatings meta={meta} filters={filters} filters={filters} setFilters={setFilters} reviewList={reviewList}/></div>
        <div className='col-span-2'><ReviewsList reviewList={reviewList} id={id} filters={filters} setFilters={setFilters} meta={meta}/></div>
      </div>
    </div>
  );
};

export default RatingReviews;