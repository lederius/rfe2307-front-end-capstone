import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleReview from './SingleReview.jsx';
import NewReview from './NewReview.jsx';

const ReviewsList = ({ reviewList, id, filters, setFilters }) => {

  const [visibleReviews, setVisibleReviews] = useState(2);
  const [form, setForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState('Relevant');
  const [filteredList, setFilteredList] = useState(reviewList);

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

  // listens to sort dropdown changes
  useEffect(() => {
    dropdown();
  }, [sort]);

  // listens to filter changes
  useEffect(() => {
    let filteredList = [];

    if (filters.length > 0) {
      filteredList = reviews.filter(review => filters.includes(review.rating.toString()));
      setFilteredList(filteredList);
    } else {
      setFilteredList(reviewList);
    }
    console.log(filteredList);
  }, [filters, reviews]);

  return (
    <div>
      {form ? (
        <div className='w-96 h-full overflow-y-scroll'>
          <NewReview productID={id} form={form} setForm={setForm} />
        </div>
      ) : filteredList.length > 0 ? (
        <div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
              {visibleReviews} reviews, sorted by
              <select className='sort' onChange={(e) => setSort(e.target.value)}>
                <option>Relevance</option>
                <option>Newest</option>
                <option>Helpful</option>
              </select>
            </div>
            <div className='flex items-center space-x-2'>
              {filters.length > 0 && <div>Filtered by {filters.join(' & ')} stars</div>}
            </div>
          </div>

          <div className='max-h-80 overflow-y-scroll'>
            <div>{filteredList.slice(0, visibleReviews).map((review, index) => <div key={index}><SingleReview review={review} /></div>)}
            </div>
            <div className="flex justify-between">
              {visibleReviews < filteredList.length && (
                <button role='more' className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={moreClick}>MORE REVIEWS</button>
              )}
              <button role='add' className="bg-slate-200 hover:bg-slate-400 font-bold py-2 px-4 rounded shadow-lg" onClick={addClick}>ADD A REVIEW +</button>
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