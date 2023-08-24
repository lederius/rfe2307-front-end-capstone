import React from 'react';
import StarRatings from 'react-star-ratings';

const Starz = ({rating}) => {

  return (
    <div>
      <StarRatings rating={rating} numberOfStars={5} starDimension={'24px'} starSpacing={'1px'} starRatedColor={'#FFD700'} />
    </div>
  );
};

export default Starz;
