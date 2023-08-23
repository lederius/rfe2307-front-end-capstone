import React from 'react';
import Stars from 'react-stars';

const StarRating = ({ rating }) => {
  return (
    <div>
      <Stars
        count={5}
        value={rating}
        size={20}
        color1="#f0f0f0"
        color2="#ffd700"
        half={true}
        edit={false}
        quarter={true}
      />
    </div>
  );
};

export default StarRating;
