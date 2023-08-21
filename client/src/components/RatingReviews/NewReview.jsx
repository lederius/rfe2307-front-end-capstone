import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactStars from 'react-stars';

const NewReview = ({ productID }) => {

  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data', e.target);

    // let newRev = {
    //   'product_id': productID,
    //   rating: rating,
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

  return (
    <div>
      <div className='font-bold text-2xl'>New Review</div>
      <div className='form flex flex-col'>
        <form onSubmit={handleSubmit}>
          <span>
            Rating: <ReactStars count={5} half={false} size={24} onChange={handleRating} />
          </span>

          <div>
            <label>
              Do you recommend this product?
              <label><input type='radio' name='rec' value='yes' defaultChecked={true} />Yes</label>
              <label><input type='radio' name='rec' value='no' />No</label>
            </label>
          </div>

          <div>
            <label>Summary: <input name='summary' maxLength={60} className='border' /></label>
          </div>

          <div>
            <label>Body: <input name='body' className='border' minLength={60} maxLength={1000} /></label>
          </div>

          <div>
            Characteristics:
            <label>Size
              <div>
                <label><input type='radio' name='sizeRadio' />1 - A size too small</label>
                <label><input type='radio' name='sizeRadio' />2 - Half a size too small</label>
                <label><input type='radio' name='sizeRadio' />3 - Perfect</label>
                <label><input type='radio' name='sizeRadio' />4 - Half a size too big</label>
                <label><input type='radio' name='sizeRadio' />5 - A size too big</label>
              </div>
            </label>
            <label>Width
              <div>
                <label><input type='radio' name='widthRadio' />1 - Too narrow</label>
                <label><input type='radio' name='widthRadio' />2 - Slightly narrow</label>
                <label><input type='radio' name='widthRadio' />3 - Perfect</label>
                <label><input type='radio' name='widthRadio' />4 - Slightly wide</label>
                <label><input type='radio' name='widthRadio' />5 - Too wide</label>
              </div>
            </label>
            <label>Comfort
              <div>
                <label><input type='radio' name='comfortRadio' />1 - Uncomfortable</label>
                <label><input type='radio' name='comfortRadio' />2 - Slightly uncomfortable</label>
                <label><input type='radio' name='comfortRadio' />3 - Ok</label>
                <label><input type='radio' name='comfortRadio' />4 - Comfortable</label>
                <label><input type='radio' name='comfortRadio' />5 - Perfect</label>
              </div>
            </label>
            <label>Quality
              <div>
                <label><input type='radio' name='qualityRadio' />1 - Poor</label>
                <label><input type='radio' name='qualityRadio' />2 - Below average</label>
                <label><input type='radio' name='qualityRadio' />3 - What I expected</label>
                <label><input type='radio' name='qualityRadio' />4 - Pretty great</label>
                <label><input type='radio' name='qualityRadio' />5 - Perfect</label>
              </div>
            </label>
            <label>Length
              <div>
                <label><input type='radio' name='lengthRadio' />1 - Runs short</label>
                <label><input type='radio' name='lengthRadio' />2 - Runs slightly short</label>
                <label><input type='radio' name='lengthRadio' />3 - Perfect</label>
                <label><input type='radio' name='lengthRadio' />4 - Runs slightly long</label>
                <label><input type='radio' name='lengthRadio' />5 - Runs long</label>
              </div>
            </label>
            <label>Fit
              <div>
                <label><input type='radio' name='fitRadio' />1 - Runs tight</label>
                <label><input type='radio' name='fitRadio' />2 - Runs slightly tight</label>
                <label><input type='radio' name='fitRadio' />3 - Perfect</label>
                <label><input type='radio' name='fitRadio' />4 - Runs slightly loose</label>
                <label><input type='radio' name='fitRadio' />5 - Runs loose</label>
              </div>
            </label>
          </div>

          <button>Upload Photos</button>

          <label>Nickname: <input name='nickname' /></label>

          <label>Email: <input type='email' name='email' /></label>

          <button type='submit' className='bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg'>Submit Review</button>
        </form>
      </div>
    </div>

  );
};

export default NewReview;