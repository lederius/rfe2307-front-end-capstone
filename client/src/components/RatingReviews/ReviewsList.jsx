import React, { useState } from 'react';
import SingleReview from './SingleReview.jsx';
// import NewReview from './NewReview.jsx';
import moment from 'moment';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data', e.target);

    // let newRev = {
    //   'product_id': id,
    //   rating: e.target.rating,
    //   summary: e.target.summary,
    //   body: e.target.body,
    //   date: moment().toString(),
    //   recommend: e.target.rec,
    //   name: e.target.name,
    //   email: e.target.email,
    //   photos: e.target.photos,
    //   characteristics: e.target.char
    // };

    // axios.post('/reviews', { data: newRev })
    //   .then(() => alert('Thank you for your review!'))
    //   .catch(err => console.log('Cannot post new review', err));
  };

  // pass down product ID for post request
  const addClick = () => {
    setForm(true);
    return (
      <div className='form'>
        <form onSubmit={handleSubmit}>
          {/* not sure if this works right ADD LABELS CORRESPONDING TO USER CLICK*/}
          <label>
            Rating: <input name='rating' className='data-te-rating-init hover: fill-slate-400' onClick={(e) => console.log(e)} />
          </label>
          <label>
            Do you recommend this product?
            <label><input type='radio' name='rec' value='yes' defaultChecked={true} />Yes</label>
            <label><input type='radio' name='rec' value='no' />No</label>
          </label>
          <label>Summary: <input name='summary' maxLength={60} /></label>
          <label>Body: <input name='body' minLength={60} maxLength={100} /></label>
          <p>
            Characteristics:
            <label>Size
              <div>
                <label><input type='radio' name='sizeRadio' className='peer' />1</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>A size too small</p>
                <label><input type='radio' name='sizeRadio' className='peer' />2</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>Half a size too small</p>
                <label><input type='radio' name='sizeRadio' className='peer' />3</label>
                <p className='invisible peer-focus:visible text-pink-600 text-sm'>Perfect</p>
                <label><input type='radio' name='sizeRadio' className='peer' />4</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>Half a size too big</p>
                <label><input type='radio' name='sizeRadio' className='peer' />5</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>A size too big</p>
              </div>
            </label>
            <label>Width <input /></label>
            <label>Comfort <input /></label>
            <label>Quality <input /></label>
            <label>Length <input /></label>
            <label>Fit <input /></label>
          </p>
          <label>

          </label>
          <label>

          </label>
          <label>

  const [reviewList, setReviewList] = useState([]);
  const [childReviews, setChildReviews] = useState([]);
  // console.log(reviewList, 'child', childReviews)
  // pass 2 reviews first
  // render more reviews if applicable
    // on click pass two more
    // when no more -> button disappears
  // create form for new review button

  useEffect(() => {
    fetch();
  }, [])

  // add second useEffect for childReviews

  const fetch = () => {
    axios.get(`/reviews/${id}`, { params: { productID: id } })
      .then(res => setReviewList(res.data))
      .catch(err => console.log('failed client get req', err));
  }

  const moreClick = () => {
    setVisibleReviews(visibleReviews + 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data', e.target);

    // let newRev = {
    //   'product_id': id,
    //   rating: e.target.rating,
    //   summary: e.target.summary,
    //   body: e.target.body,
    //   date: moment().toString(),
    //   recommend: e.target.rec,
    //   name: e.target.name,
    //   email: e.target.email,
    //   photos: e.target.photos,
    //   characteristics: e.target.char
    // };

    // axios.post('/reviews', { data: newRev })
    //   .then(() => alert('Thank you for your review!'))
    //   .catch(err => console.log('Cannot post new review', err));
  };

  // pass down product ID for post request
  const addClick = () => {
    setForm(true);
    return (
      <div className='form'>
        <form onSubmit={handleSubmit}>
          {/* not sure if this works right ADD LABELS CORRESPONDING TO USER CLICK*/}
          <label>
            Rating: <input name='rating' className='data-te-rating-init hover: fill-slate-400' onClick={(e) => console.log(e)} />
          </label>
          <label>
            Do you recommend this product?
            <label><input type='radio' name='rec' value='yes' defaultChecked={true} />Yes</label>
            <label><input type='radio' name='rec' value='no' />No</label>
          </label>
          <label>Summary: <input name='summary' maxLength={60} /></label>
          <label>Body: <input name='body' minLength={60} maxLength={100} /></label>
          <p>
            Characteristics:
            <label>Size
              <div>
                <label><input type='radio' name='sizeRadio' className='peer' />1</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>A size too small</p>
                <label><input type='radio' name='sizeRadio' className='peer' />2</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>Half a size too small</p>
                <label><input type='radio' name='sizeRadio' className='peer' />3</label>
                <p className='invisible peer-focus:visible text-pink-600 text-sm'>Perfect</p>
                <label><input type='radio' name='sizeRadio' className='peer' />4</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>Half a size too big</p>
                <label><input type='radio' name='sizeRadio' className='peer' />5</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>A size too big</p>
              </div>
            </label>
            <label>Width <input /></label>
            <label>Comfort <input /></label>
            <label>Quality <input /></label>
            <label>Length <input /></label>
            <label>Fit <input /></label>
          </p>
          <label>

          </label>
          <label>

          </label>
          <label>

          </label>
        </form>
      </div>
    );
  };

  return (
    <div>
      {/* cond render if reviews avail */}
      {reviewList.length > 0 ?
        <div>
          <SingleReview reviewList={reviewList} />
          <div className="flex justify-between">
            <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={moreClick}>MORE REVIEWS</button>
            <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={addClick}>ADD A REVIEW +</button>
          </div>
        </div>
        :
        <div>
          <div className="flex justify-between">
            <button className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={addClick}>ADD A REVIEW +</button>
          </div>
        </div>}
    </div>
  )
}
  )
}

export default ReviewsList;