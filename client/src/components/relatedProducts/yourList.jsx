import React, {useEffect} from 'react';
import './related.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import ProductCard from './productCards.jsx';


const YourList = ({mainId, sid}) => {
  const [styleInfo, setStyleInfo] = React.useState(null);

  const handleClick = () => {
    console.log('jo');
  };

  const handleAction = () => {
    console.log('as');
  };

  useEffect(() => {
    axios.get(`http://localhost:9000/products/${mainId}/styles`)
      .then(response => {
        for (var style of response.data.results) {
          if (style.style_id === sid) {
            styleInfo ? setStyleInfo(prevStyle => [...prevStyle, style]) : setStyleInfo([style]);
          }
        }
      });
  }, [mainId]);

  if (!mainId || !styleInfo) {
    return null;
  }
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


  // return (
  //   <div className='garage'>
  //     <Carousel
  //       className='carousel'
  //       swipeable={true}
  //       draggable={true}
  //       keyBoardControl={true}
  //       responsive={responsive}>
  //       <div className='productCard' onClick={handleClick}>
  //         <div className='container addCard'>
  //           <h1>Add to Outfit</h1>
  //           <span className='plus'> &#8853;</span>
  //         </div>
  //       </div>
  //       {console.log('sss', styleInfo)}
  //       {styleInfo && styleInfo.map(item => (
  //         <ProductCard
  //           actionButton='&#10005;'
  //           key={mainId}
  //           mainId={mainId}
  //           sid={sid}
  //           action={handleAction}
  //         />))}
  //     </Carousel>
  //   </div>
  // );
};

export default YourList;

