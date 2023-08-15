import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleReview from './SingleReview.jsx';

const ReviewsList = () => {
  const id = '37311';

  const [reviewList, setReviewList] = useState([]);
  const [countReviews, setCountReviews] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(2);
  // pass 2 reviews first
  // render more reviews if applicable
  // on click pass two more
  // when no more -> button disappears
  // create form for new review button

  const fetch = () => {
    axios.get(`/reviews/${id}`, { params: { productID: id } })
      .then(res => {
        setReviewList(res.data);
        setCountReviews(res.data.length);
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

  };

  return (
    <div>
      {/* cond render if reviews avail */}
      {reviewList.length > 0 ?
        <div>
          <SingleReview reviewList={reviewList.slice(0, visibleReviews)} />
          <div className="flex justify-between">
            <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={moreClick}>MORE REVIEWS</button>
            <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={addClick}>ADD A REVIEW +</button>
          </div>
        </div>
        :
        <div>
          <div className="flex justify-between">
            <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg">ADD A REVIEW +</button>
          </div>
        </div>}
    </div>
  );
};

export default ReviewsList;