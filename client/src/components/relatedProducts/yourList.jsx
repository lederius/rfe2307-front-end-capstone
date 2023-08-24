import React, {useEffect} from 'react';
import './related.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import ProductCard from './productCards.jsx';


const YourList = ({ mainId, sid }) => {
  const [styleInfo, setStyleInfo] = React.useState([]);

  const handleAction = (outputId) => {
    const updatedStyleInfo = styleInfo.filter((style) => style.style_id !== outputId);

    setStyleInfo(updatedStyleInfo);
    localStorage.setItem('styleInfo', JSON.stringify(updatedStyleInfo));
  };


  const handleClick = () => {
    if (styleInfo) {
      for (var style of styleInfo) {
        if (style.style_id === sid) {
          console.log('Already added');
          return;
        }
      }
    }
    axios.get(`/products/${mainId}/styles`)
      .then(response => {
        const newStyleInfo = response.data.results.filter(style => style.style_id === sid);
        setStyleInfo(prevStyleInfo => [...prevStyleInfo, ...newStyleInfo]);
        localStorage.setItem('styleInfo', JSON.stringify([...styleInfo, ...newStyleInfo]));
      });
  };

  useEffect(() => {
    const storedStyleInfo = localStorage.getItem('styleInfo');
    if (storedStyleInfo) {
      setStyleInfo(JSON.parse(storedStyleInfo));
    }
  }, []);

  if (!mainId) {
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

  const output = {id: mainId};


  return (
    <div className='garage'>
      <Carousel
        className='carousel'
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        responsive={responsive}>
        <div className='productCard' onClick={handleClick}>
          <div className='container addCard'>
            <h1>Add to Outfit</h1>
            <span className='plus'> &#8853;</span>
          </div>
        </div>
        {styleInfo && styleInfo.map(item => (
          <ProductCard
            actionButton='&#10005;'
            key={mainId}
            item={output}
            style={item}
            sid={sid}
            action={() => handleAction(sid)}
          />))}
      </Carousel>
    </div>
  );
};

export default YourList;

