import React, {useEffect} from 'react';
import ProductCard from './productCards.jsx';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Comparison from './comparison.jsx';

const RelatedList = () => {
  const [productId, setProductId] = React.useState(37322);
  const [styles, setStyles] = React.useState([]);
  const [modal, setModal] = React.useState(false);

  useEffect(() => {
    axios.get(`http://localhost:9000/products/${productId}/related`)
      .then(response => {
        const stylePromises = [...new Set(response.data)].map(item => {
          return axios.get(`http://localhost:9000/products/${item}/styles`);
        });
        Promise.all(stylePromises)
          .then(results => {
            const resultData = results.map(result => result.data);
            const newStyles = [];
            //resultData is an array of related item objects that each has a property with a list of styles
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

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const modalHandler = () => {
    return Comparison;
  };

  return (<div className='garage'>
    <Carousel
      className='carousel'
      swipeable={true}
      draggable={true}
      // centerMode={true}
      keyBoardControl={true}
      responsive={responsive}>
      {styles.map(item => (<ProductCard
        key={item.id}
        id={parseInt(item.id)}
        styles={item.style}
        photo={item.photo}/>))}
    </Carousel>
    <button onClick={() => setModal(true)}>STAR</button>
    {modal && <Comparison />}
  </div>
  );
};

export default RelatedList;