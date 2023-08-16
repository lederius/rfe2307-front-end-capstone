import React, {useEffect} from 'react';
import axios from 'axios';
import RelatedList from './relatedList.jsx';

const ProductCard = ({styles, photo, id}) => {
  const [product, setProduct] = React.useState(null);

  useEffect(() => {
    const page = 1;
    const fetcher = (page) => {
      if (product) {
        return;
      }
      axios.get(`http://localhost:9000/products?page=${page}&count=10`)
        .then(response => {
          console.log('respondes', response.data)
          for (var each of response.data) {
            console.log('ththeeid', typeof id)
            if (each.id === id) {
              console.log('got one!', each.id)
              setProduct(each);
              return;
            }
          }
          page++
          fetcher(page);
        })
        .catch(error =>
          console.log('An error fetching from server:', error));
    };
    fetcher(page);
    console.log('new useeffect', product)
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

