import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleReview from './SingleReview.jsx';
import NewReview from './NewReview.jsx';
import moment from 'moment';

const ReviewsList = () => {
  const id = '37311';

  const [reviewList, setReviewList] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(2);
  const [form, setForm] = useState(false);

  const fetch = () => {
    axios.get(`/reviews/${id}`, { params: { productID: id } })
      .then(res => {
        setReviewList(res.data);
      })
      .catch(err => console.log('failed client get req', err));
  };

  useEffect(() => {
    fetch();
  }, []);


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
          <div><SingleReview reviewList={reviewList.slice(0, visibleReviews)} /></div>
          <div className="flex justify-between">
            {visibleReviews < reviewList.length && (
              <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={moreClick}>MORE REVIEWS</button>
            )}
            <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={addClick}>ADD A REVIEW +</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between">
            <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={addClick}>ADD A REVIEW +</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsList;