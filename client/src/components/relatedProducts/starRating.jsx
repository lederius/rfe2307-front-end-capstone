import React from 'react';
import Stars from 'react-stars';
import StarRatings from 'react-star-ratings';

const Starz = ({rating}) => {

  return (
    <div>
      <StarRatings rating={rating} numberOfStars={5} starDimension={'24px'} starSpacing={'1px'} starRatedColor={'#FFD700'} />
    </div>
  );
};

// const StarRating = ({ rating }) => {
//   return (
//     <div data-testid='starzzz'>
//       <Stars
//         count={5}
//         value={rating}
//         size={20}
//         color1="#f0f0f0"
//         color2="#ffd700"
//         half={true}
//         edit={false}
//         quarter={true}
//       />
//     </div>
//   );
// };

export default Starz;
