import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleReview from './SingleReview.jsx';
import NewReview from './NewReview.jsx';

const ReviewsList = ({ reviewList, id }) => {

  const [visibleReviews, setVisibleReviews] = useState(2);
  const [form, setForm] = useState(false);
  const [reviews, setReviews] = useState(reviewList);
  const [sort, setSort] = useState('Relevant');

  const moreClick = () => {
    setVisibleReviews(visibleReviews + 2);
  };

  const addClick = () => {
    setForm(!form);
  };

  const dropdown = () => {
    // can just use sort API calls
    if (sort === 'Helpful') {
      axios.get(`/reviews/${id}/${sort}`, { params: { productID: id, sort: sort } })
        // .then((res) => console.log(res))
        .then(res => setReviews(res.data.results))
        .catch(err => console.log('failed client sort get req', err));
    } else if (sort === 'Newest') {
      axios.get(`/reviews/${id}/${sort}`, { params: { productID: id, sort: sort } })
        // .then((res) => console.log(res.data.results))
        .then(res => setReviews(res.data.results))
        .catch(err => console.log('failed client sort get req', err));
    } else {
      axios.get(`/reviews/${id}/${sort}`, { params: { productID: id, sort: sort } })
        .then(res => setReviews(res.data.results))
        .catch(err => console.log('failed client sort get req', err));
    }
  };

  useEffect(() => {
    if (sort !== 'Relevance') {
      dropdown();
    }
  }, [sort]);

  return (
    <div>
      {form ? (
        <NewReview productID={id} />
      ) : reviews.length > 0 ? (
        <div>
          <div className='numReviews'>
            {visibleReviews} reviews, sorted by
            <select className='sort' onChange={(e) => setSort(e.target.value)}>
              <option>Relevance</option>
              <option>Newest</option>
              <option>Helpful</option>
            </select>
          </div>
          <div className='max-h-80 overflow-y-scroll'>
            <div>{reviews.slice(0, visibleReviews).map(review => <SingleReview review={review} />)}
            </div>
            <div className="flex justify-between">
              {visibleReviews < reviews.length && (
                <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={moreClick}>MORE REVIEWS</button>
              )}
              <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={addClick}>ADD A REVIEW +</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between">
            <button role='add' className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={addClick}>ADD A REVIEW +</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsList;