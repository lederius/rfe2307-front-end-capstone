import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const MetaRatings = ({ meta }) => {
  console.log('meta', meta.ratings);

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

  return (
    <div>
      {meta.ratings !== undefined &&
      <div className='font-extrabold text-5xl'>
        {average(meta.ratings)}
        <StarRatings rating={average(meta.ratings)} numberOfStars={5} starDimension={'32px'} starSpacing={'1px'} starRatedColor={'#FFD700'}/>
      </div>
      }
    </div>
  );
};

export default MetaRatings;