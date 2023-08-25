import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactStars from 'react-stars';

const NewReview = ({ productID, form, setForm, meta }) => {

  const [name, setName] = useState('selected product');
  const [rating, setRating] = useState(0);

  const changeForm = () => {
    setForm(!form);
  };

  const getName = () => {
    axios.get(`/products/${productID}`, { params: { productID: productID } })
      .then(res => setName(res.data.name))
      .catch(err => console.log('failed client get product name req', err));
  };

  useEffect(() => {
    getName();
  }, []);

  const handleRating = (newRating) => {
    setRating(newRating);
    console.log(typeof rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let rec = false;
    if (e.target.rec.value === 'yes') {
      rec = true;
    }

    let newRev = {
      'product_id': productID,
      rating: rating,
      summary: e.target.summary.value,
      body: e.target.body.value,
      // date: moment().toString(),
      recommend: rec,
      name: e.target.nickname.value,
      email: e.target.email.value
    };

    //   photos: e.target.photos,
    //   characteristics: e.target.char.value
    // };

    axios.post(`/reviews/${productID}`, { data: newRev }, {params: {id: productID}})
      .then(res => {
        changeForm();
        alert('Thank you for your review!');
      })
      .catch(err => console.log('Cannot post new review', err));
  };

  const chars = (data) => {
    const char = data.characteristics;
    return (
      <div>
        <div className='text-lg font-semibold'>Characteristics</div>
        {char.Size && (
          <label><div className='font-medium'>Size:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='sizeRadio' />1 - A size too small</label>
              <label><input type='radio' name='sizeRadio' />2 - Half a size too small</label>
              <label><input type='radio' name='sizeRadio' />3 - Perfect</label>
              <label><input type='radio' name='sizeRadio' />4 - Half a size too big</label>
              <label><input type='radio' name='sizeRadio' />5 - A size too big</label>
            </div>
          </label>
        )}
        {char.Width && (
          <label><div className='font-medium'>Width:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='widthRadio' />1 - Too narrow</label>
              <label><input type='radio' name='widthRadio' />2 - Slightly narrow</label>
              <label><input type='radio' name='widthRadio' />3 - Perfect</label>
              <label><input type='radio' name='widthRadio' />4 - Slightly wide</label>
              <label><input type='radio' name='widthRadio' />5 - Too wide</label>
            </div>
          </label>
        )}
        {char.Comfort && (
          <label><div className='font-medium'>Comfort:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='comfortRadio' />1 - Uncomfortable</label>
              <label><input type='radio' name='comfortRadio' />2 - Slightly uncomfortable</label>
              <label><input type='radio' name='comfortRadio' />3 - Ok</label>
              <label><input type='radio' name='comfortRadio' />4 - Comfortable</label>
              <label><input type='radio' name='comfortRadio' />5 - Perfect</label>
            </div>
          </label>
        )}
        {char.Quality && (
          <label><div className='font-medium'>Quality:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='qualityRadio' />1 - Poor</label>
              <label><input type='radio' name='qualityRadio' />2 - Below average</label>
              <label><input type='radio' name='qualityRadio' />3 - What I expected</label>
              <label><input type='radio' name='qualityRadio' />4 - Pretty great</label>
              <label><input type='radio' name='qualityRadio' />5 - Perfect</label>
            </div>
          </label>
        )}
        {char.Length && (
          <label><div className='font-medium'>Length:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='lengthRadio' />1 - Runs short</label>
              <label><input type='radio' name='lengthRadio' />2 - Runs slightly short</label>
              <label><input type='radio' name='lengthRadio' />3 - Perfect</label>
              <label><input type='radio' name='lengthRadio' />4 - Runs slightly long</label>
              <label><input type='radio' name='lengthRadio' />5 - Runs long</label>
            </div>
          </label>
        )}
        {char.Fit && (
          <label><div className='font-medium'>Fit:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='fitRadio' />1 - Runs tight</label>
              <label><input type='radio' name='fitRadio' />2 - Runs slightly tight</label>
              <label><input type='radio' name='fitRadio' />3 - Perfect</label>
              <label><input type='radio' name='fitRadio' />4 - Runs slightly loose</label>
              <label><input type='radio' name='fitRadio' />5 - Runs loose</label>
            </div>
          </label>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="modal">
        <div onClick={changeForm} className="w-100vw h-100vh top-0 left-0 right-0 bottom-0 fixed bg-neutral-600 opacity-70"></div>
        <div className="fixed top-30 right-2/4 translate-x-2/4 leading-6 bg-neutral-50 border-4 rounded overflow-hidden" style={{ width: '50%', height: '80vh', overflowY: 'auto' }}>
          <h1 className="flex justify-center text-2xl font-bold m-2">New Review</h1>
          <p className="flex justify-center text-sm ml-2">About the {name}</p>

          <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>

            <span className='text-lg font-semibold'>
              Rating: <ReactStars count={5} half={false} size={24} onChange={handleRating} />
              <p className="text-xs">Double Click Please</p>
            </span>

            <div>
              <label>
                <div className='text-lg font-semibold'>Do you recommend this product?</div>
                <label><input type='radio' name='rec' value='yes' defaultChecked={true} />Yes</label>
                <label><input type='radio' name='rec' value='no' />No</label>
              </label>
            </div>

            <div>
              <label>
                <div className='text-lg font-semibold'>Summary:</div>
                <input name='summary' maxLength={60} className='border w-80' placeholder='Write a title here...' /></label>
            </div>

            <div>
              <div><label className='text-lg font-semibold'>Body: </label></div>
              <div>
                <textarea name='body' className='border w-80' minLength={60} maxLength={1000} placeholder='Let us know your thoughts!' />
              </div>
            </div>
            {/* {meta && chars(meta)}
            <button className='m-1 py-[.438rem] px-2 w-40 mx-auto inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500'>Upload Photos</button> */}

            <label>Nickname: <input className='w-64' name='nickname' placeholder='User123' /></label>

            <label>Email:
              <input required type="email" name='email' className="m-2 w-64" placeholder="Example: jack@email.com"></input>
            </label>
            <span className="m-2 text-xs">For authentication reasons, you will not be emailed</span>

            <button role='submit' type='submit' className='m-1 py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500'>Submit Review</button>
          </form>
          <button className="h-7 absolute top-1 right-1 px-2 m-1 py-[.688rem] inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white bg-red-500 hover:border-red-500 transition-all text-sm dark:border-gray-700 dark:hover:border-red-500" onClick={changeForm}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default NewReview;