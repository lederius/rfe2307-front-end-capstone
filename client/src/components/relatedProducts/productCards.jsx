import React, {useEffect} from 'react';
import axios from 'axios';
import RelatedList from './relatedList.jsx';


const ProductCard = ({styles, photo, id, actionButton, action}) => {
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

  const onAction = () => {
    action();
  };

  return (
    <div className='productCard'>
      <div className='thumbSpace'>
        <button className='compareButton' onClick={onAction}>{actionButton}</button>
        <img className='cardImage' src={photo} />
      </div>
      <div className='container'>
        <h2 style={{color: 'grey'}}>Category: {product.category}</h2>
        <h3><b>{product.name}</b></h3>
        <div className='priceBlock'>
          <p className='salePrice'>{styles.sale_price || ''} &nbsp;</p>
          <p style={{ textDecoration: styles.sale_price ? 'line-through' : 'none' }}>
         ${styles.original_price}
          </p>
        </div>
      Rating
      </div>
    </div>
  );
};

export default ProductCard;

