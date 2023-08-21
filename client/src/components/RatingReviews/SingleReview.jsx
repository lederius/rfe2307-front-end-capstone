import React from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactStars from 'react-stars';

const SingleReview = ({ reviewList }) => {

  const handleClick = (e, revID, count) => {
    e.preventDefault();
    const help = count + 1;
    // put request here for persistency
    axios.put(`/reviews/${revID}/helpful`, { data: help.toString() }, { params: { reviewID: revID} })
      .then(res => console.log('successful put req'))
      .catch(err => console.log('failed helpful put request', err));
  };

  const stars = (int) => <ReactStars value={int} count={5} edit={false} size={24}/>;

  const rec = (boolean) => {
    if (boolean) {
      return (
        <div>✔️ I recommend this product</div>
      );
    }
  };

  const photo = (arr) => {
    if (arr.length > 0) {
      return (
        arr.map(image => {
          return <img key={image.id} className="h-32 w-32" src={image.url}></img>;
        })
      );
    }
  };

  return (
    <div className='oneReview'>
      <div className='numReviews'>
        {reviewList.length} reviews, sorted by
        <select className='sort'>
          <option>Relevance</option>
          <option>Newest</option>
          <option>Helpful</option>
        </select>
      </div>

      <div className='reviewTile rounded-lg shadow-xl'>
        {reviewList.map(review => {
          return (
            <div key={review.review_id} className='min-h-[15%] border-b-2 border-black'>
              <div className="flex justify-between items-center pt-4 px-2">
                <span className='stars'>{stars(review.rating)}</span>
                <span className='usernameDate'>{review.reviewer_name}, {moment(review.date).fromNow()}</span>
              </div>
              <div className="p-2">
                <div className='summary text-lg font-bold p-1'>{review.summary}</div>
                <div className='body p-1'>{review.body}</div>
                <div className='rec p-1'>{rec(review.recommend)}</div>
                <div className='photos flex gap-3 p-1'>{photo(review.photos)}</div>

                {/* format this when new review + post req is setup */}
                {/* <div className='response'>{review.response}</div> */}

                <div className='help pb-8 text-sm p-1'>Did you find this review helpful? <button role="helpful" className='underline' onClick={e => handleClick(e, review.review_id.toString(), review.helpfulness)}>Yes ({review.helpfulness})</button></div>
              </div>
            </div>
          );
        }
        )}
      </div>
    </div>
  );
};

export default SingleReview;