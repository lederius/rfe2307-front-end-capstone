import React, {useEffect} from 'react';
import ProductCard from './productCards.jsx';
import axios from 'axios';

const RelatedList = () => {
  const [productId, setProductId] = React.useState(37317);
  const [styles, setStyles] = React.useState([]);
  const [product, setProduct] = React.useState(null);


  useEffect(() => {
    const page = 1;
    const fetcher = (page) => {
      axios.get(`http://localhost:9000/products?page=${page}&count=15`)
        .then(response => {
          for (var each of response.data) {
            if (each.id === productId) {
              setProduct(each);
              return;
            }
          }
          fetcher(page + 1);
        })
        .catch(error =>
          console.log('An error fetching from server:', error));
    };
    fetcher(page);

    axios.get(`http://localhost:9000/products/${productId}/related`)
      .then(response => {
        const stylePromises = [...new Set(response.data)].map(item => {
          return axios.get(`http://localhost:9000/products/${item}/styles`);
        });
        Promise.all(stylePromises)
          .then(results => {
            const resultData = results.map(result => result.data);
            const newStyles = [];

            for (var item of resultData) {
              var temp = {id: item.product_id};
              outerLoop: for (var style of item.results) {
                for (var photo of style.photos) {
                  if (photo.thumbnail_url) {
                    temp.photo = photo.thumbnail_url;
                    temp.style = style;
                  }
                  if (style['default?']) {
                    break outerLoop;
                  }
                }
              }
              if (temp.photo) {
                newStyles.push(temp);
              }
            }
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



  return (
    <div className='relatedList'>
      {styles.map(item => (<ProductCard key={item.id} product={product} styles={item.style} photo={item.photo}/>))}
    </div>
  );
};

export default RelatedList;