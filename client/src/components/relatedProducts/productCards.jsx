import React, {useEffect} from 'react';
import axios from 'axios';
import RelatedList from './relatedList.jsx';

const ProductCard = ({styles, photo, id}) => {
  const [product, setProduct] = React.useState(null);

  useEffect(() => {
    const page = 1;
    const fetcher = (page) => {

      axios.get(`http://localhost:9000/products?page=${page}&count=10`)
        .then(response => {
          for (var each of response.data) {
            if (each.id === id) {
              setProduct(each);
              return;
            }
          }
          fetcher(page++);
        })
        .catch(error =>
          console.log('An error fetching from server:', error));
    };
    fetcher(page);
  }, [id]);

  if (!styles || !photo || !product) {
    return null;
  }

  const price = styles.original_price;


  return (
    <div className='productCard'>
      <div className='thumbSpace'>
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

