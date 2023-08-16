import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const NewReview = ( {productID} ) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data', e.target);

    // let newRev = {
    //   'product_id': productID,
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

  const radioButtons = () => {
    return (
      <div>
        <label><input type='radio' name='charRadio' className='peer'/>1</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>A size too small</p>
        <label><input type='radio' name='charRadio' className='peer'/>2</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>Half a size too small</p>
        <label><input type='radio' name='charRadio' className='peer'/>3</label>
        <p className='invisible peer-focus:visible text-pink-600 text-sm'>Perfect</p>
        <label><input type='radio' name='charRadio' className='peer'/>4</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>Half a size too big</p>
        <label><input type='radio' name='charRadio' className='peer'/>5</label><p className='invisible peer-focus:visible text-pink-600 text-sm'>A size too big</p>
      </div>
    );
  };


  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        {/* ADD LABELS CORRESPONDING TO USER CLICK*/}
        <label>
          Rating: <input name='rating' className='' onClick={(e) => console.log(e)} />
        </label>
        <label>
          Do you recommend this product?
          <label><input type='radio' name='rec' value='yes' defaultChecked={true} />Yes</label>
          <label><input type='radio' name='rec' value='no' />No</label>
        </label>
        <label>Summary: <input name='summary' maxLength={60} /></label>
        <label>Body: <input name='body' minLength={60} maxLength={100} /></label>
        <div>
          Characteristics:
          <label>Size
            <div>
              <label><input type='radio' name='sizeRadio'/>1 - A size too small</label>
              <label><input type='radio' name='sizeRadio' />2 - Half a size too small</label>
              <label><input type='radio' name='sizeRadio' />3 - Perfect</label>
              <label><input type='radio' name='sizeRadio' />4 - Half a size too big</label>
              <label><input type='radio' name='sizeRadio' />5 - A size too big</label>
            </div>
          </label>
          <label>Width
            <div>
              <label><input type='radio' name='sizeRadio' />1 - Too narrow</label>
              <label><input type='radio' name='sizeRadio' />2 - Slightly narrow</label>
              <label><input type='radio' name='sizeRadio' />3 - Perfect</label>
              <label><input type='radio' name='sizeRadio' />4 - Slightly wide</label>
              <label><input type='radio' name='sizeRadio' />5 - Too wide</label>
            </div>
          </label>
          <label>Comfort
            <div>
              <label><input type='radio' name='sizeRadio'/>1 - Uncomfortable</label>
              <label><input type='radio' name='sizeRadio' />2 - Slightly uncomfortable</label>
              <label><input type='radio' name='sizeRadio' />3 - Ok</label>
              <label><input type='radio' name='sizeRadio' />4 - Comfortable</label>
              <label><input type='radio' name='sizeRadio' />5 - Perfect</label>
            </div>
          </label>
          <label>Quality
            <div>
              <label><input type='radio' name='sizeRadio'/>1 - Poor</label>
              <label><input type='radio' name='sizeRadio' />2 - Below average</label>
              <label><input type='radio' name='sizeRadio' />3 - What I expected</label>
              <label><input type='radio' name='sizeRadio' />4 - Pretty great</label>
              <label><input type='radio' name='sizeRadio' />5 - Perfect</label>
            </div>
          </label>
          <label>Length
            <div>
              <label><input type='radio' name='sizeRadio'/>1 - Runs short</label>
              <label><input type='radio' name='sizeRadio' />2 - Runs slightly short</label>
              <label><input type='radio' name='sizeRadio' />3 - Perfect</label>
              <label><input type='radio' name='sizeRadio' />4 - Runs slightly long</label>
              <label><input type='radio' name='sizeRadio' />5 - Runs long</label>
            </div>
          </label>
          <label>Fit
            <div>
              <label><input type='radio' name='sizeRadio'/>1 - Runs tight</label>
              <label><input type='radio' name='sizeRadio' />2 - Runs slightly tight</label>
              <label><input type='radio' name='sizeRadio' />3 - Perfect</label>
              <label><input type='radio' name='sizeRadio' />4 - Runs slightly loose</label>
              <label><input type='radio' name='sizeRadio' />5 - Runs loose</label>
            </div>
          </label>
        </div>
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

export default NewReview;