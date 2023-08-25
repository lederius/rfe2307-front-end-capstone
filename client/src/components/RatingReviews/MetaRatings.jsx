import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import StarBreakdown from './StarBreakdown.jsx';
import Characteristics from './Characteristics.jsx';

const MetaRatings = ({ meta, filteredList, setFilteredList, filters, setFilters, reviewList }) => {

  const average = (ratings) => {
    let total = 0;
    let response = 0;
    for (let star in ratings) {
      total += (Number(ratings[star]) * Number(star));
      response += Number(ratings[star]);
    }
    const average = (total / response).toFixed(1);
    return parseFloat(average);
  };

  const total = () => {
    return Number(meta.recommended.false) + Number(meta.recommended.true);
  };

  const recommend = (data) => {
    const yes = Number(data.true);
    const no = Number(data.false);
    return Math.round(yes / (yes + no) * 100);
  };

  return (
    <div role='meta'>
      {meta.ratings !== undefined &&
        <div role='stars'>
          <div className='font-extrabold text-5xl'>
            {average(meta.ratings)}
            <StarRatings rating={average(meta.ratings)} numberOfStars={5} starDimension={'32px'} starSpacing={'1px'} starRatedColor={'#FFD700'} />
          </div>
          <div className='flex justify-center text-sm'>Based on {total()} ratings - {recommend(meta.recommended)}% of customers recommend this product!</div>
          <StarBreakdown ratings={meta.ratings} total={total()} filteredList={filteredList} setFilteredList={setFilteredList} filters={filters} setFilters={setFilters} reviewList={reviewList}/>
        </div>
      }
      <div><Characteristics chars={meta.characteristics}/></div>
    </div>
  );
};

export default MetaRatings;