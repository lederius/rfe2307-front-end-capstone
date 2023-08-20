import React, {useEffect} from 'react';
import './comparison.css';
import axios from 'axios';

const Comparison = ({onClose, mainId, compared}) => {
  const [mainProduct, setMainProduct] = React.useState(null);

  useEffect (() => {
    axios.get(`http://localhost:9000/products/${mainId}`)
      .then(response => {
        setMainProduct(response.data);
      })
      .catch(error =>
        console.log('An error fetching from server:', error));
  }, [mainId]);

  console.log('main log', mainProduct)
  console.log('compared log', compared)

  if (!mainProduct) {
    return null;
  }


  return (
    <div onClick={onClose} className='overlay'>
      <div className='modalContainer'>
        <h4 className='comparing'>COMPARING</h4>
        <div className='comparedItem'>
          <p>{mainProduct.name}</p>
          <p>{compared.name}</p>
        </div>
        &nbsp;&nbsp;&nbsp;
        <ul className='featureList'>
          {mainProduct.features.map(characteristic => <li>{characteristic.value} {characteristic.feature}</li>)}
          {compared.features.map(characteristic => <li>{characteristic.value} {characteristic.feature}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Comparison;