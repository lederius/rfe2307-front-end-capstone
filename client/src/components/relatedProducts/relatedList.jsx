import React, {useEffect} from 'react';
import ProductCard from './productCards.jsx';
import axios from 'axios';

const RelatedList = () => {
  const [productId, setProductId] = React.useState(37311);
  const [styles, setStyles] = React.useState([]);
  const [product, setProduct] = React.useState('');


  useEffect(() => {
    axios.get(`http://localhost:9000/products/${productId}/related`)
      .then(response => {
        const stylePromises = response.data.map(item => {
          return axios.get(`http://localhost:9000/products/${item}/styles`);
        });
        Promise.all(stylePromises)
          .then(results => {
            const newStyles = results.map(result => result.data);
            setStyles(newStyles);
          })
          .catch(error => {
            console.log('An error occurred:', error);
          });
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }, [productId]);


  console.log('the result log', styles);


  return (
    <div className='relatedList'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default RelatedList;