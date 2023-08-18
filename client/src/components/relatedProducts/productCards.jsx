import React, {useEffect} from 'react';
import axios from 'axios';
import RelatedList from './relatedList.jsx';
import Stars from './StarRating';


const ProductCard = ({styles, photo, id, actionButton, action}) => {
  const [product, setProduct] = React.useState(null);
  const [review, setReview] = React.useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9000/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error =>
        console.log('An error fetching from server:', error));

    axios.get(`http://localhost:9000/reviews/meta/${id}`)
      .then(response => {
        const ratings = response.data.ratings;
        var total = 0;
        var reviewCount = 0;

        for (var key in ratings) {
          total += key * ratings[key];
          reviewCount += parseInt(ratings[key]);
        }
        const averageReview = total / reviewCount;
        setReview(averageReview);
      })
      .catch(error =>
        console.log('An error fetching from server:', error));

const ProductCard = ({styles, photo, id}) => {
  const [product, setProduct] = React.useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9000/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error =>
        console.log('An error fetching from server:', error));
  }, [id]);

  if (!styles || !photo || !product) {
    return null;
  }

  const price = styles.original_price;


  return (
    <div className='productCard'>
      <div className='thumbSpace'>
        <button className='compareButton' onClick={onAction}>{actionButton}</button>
        <img className='cardImage' src={photo} />
      </div>
      <div className='container'>
        <h2>{product.category}</h2>
        <h3><b>{product.name}</b></h3>
        <p>${price}</p>
      Rating
      </div>
    </div>
  );
};

export default ProductCard;

