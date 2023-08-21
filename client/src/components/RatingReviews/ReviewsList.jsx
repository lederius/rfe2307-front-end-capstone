import React, { useState } from 'react';
import SingleReview from './SingleReview.jsx';
import NewReview from './NewReview.jsx';
import moment from 'moment';

const ReviewsList = ({ reviewList }) => {
  const id = '37311';

  const [visibleReviews, setVisibleReviews] = useState(2);
  const [form, setForm] = useState(false);

  const moreClick = () => {
    setVisibleReviews(visibleReviews + 2);
  };

  const addClick = () => {
    setForm(!form);
  };

  return (
    <div>
      {form ? (
        <NewReview productID={id} />
      ) : reviewList.length > 0 ? (
        <div>
          <div className='numReviews'>
            {visibleReviews} reviews, sorted by
            <select className='sort'>
              <option>Relevance</option>
              <option>Newest</option>
              <option>Helpful</option>
            </select>
          </div>
          <div className='max-h-60 overflow-y-scroll'>
            <div>{reviewList.slice(0, visibleReviews).map(review => <SingleReview review={review} />)}
            </div>
            <div className="flex justify-between">
              {visibleReviews < reviewList.length && (
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