import React, {useEffect} from 'react';
import axios from 'axios';
import RelatedList from './relatedList.jsx';
import Stars from './StarRating';


const ProductCard = ({actionButton, action, item}) => {
  const [product, setProduct] = React.useState(null);
  const [review, setReview] = React.useState(null);
  const id = item.id;
  const styleInfo = item.style;

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

  }, [id]);

  if (!styleInfo || !product) {
    return null;
  }

  const onAction = () => {
    action(product);
  };

  return (
    <div className='productCard'>
      <div className='thumbSpace'>
        <button className='compareButton' onClick={onAction}>{actionButton}</button>
        <img className='cardImage' src={item.photo} />
      </div>
      <div className='container'>
        <h2 style={{color: 'grey'}}>Category: {product.category}</h2>
        <h3><b>{product.name}</b></h3>
        <div className='priceBlock'>
          <p className='salePrice'>{styleInfo.sale_price && '$' + styleInfo.sale_price} &nbsp;</p>
          <p style={{ textDecoration: styleInfo.sale_price ? 'line-through' : 'none' }}>
         ${styleInfo.original_price}
          </p>
        </div>
      </div>
      <div className='starz'>
        <Stars rating={review} />
      </div>
    </div>
  );
};

export default ProductCard;

