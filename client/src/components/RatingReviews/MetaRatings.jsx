import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import StarBreakdown from './StarBreakdown.jsx';

const MetaRatings = ({ meta }) => {

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

  return (
    <div>
      {meta.ratings !== undefined &&
        <div>
          <div className='font-extrabold text-5xl'>
            {average(meta.ratings)}
            <StarRatings rating={average(meta.ratings)} numberOfStars={5} starDimension={'32px'} starSpacing={'1px'} starRatedColor={'#FFD700'} />
          </div>
          <div className='text-sm'>Based on {total()} ratings</div>
          <StarBreakdown ratings={meta.ratings} total={total()}/>
        </div>
      }
    </div>
  );
};

export default MetaRatings;