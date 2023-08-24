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

  if (!mainProduct) {
    return null;
  }
  const allFeatures = {};
  mainProduct.features.map(feature => {
    var theKey = feature.value + ' ' + feature.feature;
    if (feature.value) {
      allFeatures[theKey] = 'm';
    }
  });
  compared.features.map(feature => {
    var theKey = feature.value + ' ' + feature.feature;
    if (feature.value) {
      allFeatures[theKey] ? allFeatures[theKey] += 'c' : allFeatures[theKey] = 'c';
    }
  });

  return (
    <div onClick={onClose} className='overlay'>
      <div data-testid='compareTest' className='modalContainer'>
        <h4 className='comparing'>COMPARING</h4>
        <div className='comparedItem'>
          <p>{mainProduct.name}</p>
          <p>{compared.name}</p>
        </div>
        &nbsp;&nbsp;&nbsp;
        <ul className='featureList'>
          {Object.keys(allFeatures).map(key => (
            <li className='eachFeature' key={key}>
              <span className='mCheck'>{allFeatures[key].indexOf('m') !== -1 ? '✓' : ''}</span>
              <span className='featureKey'>{key.replace(/"/g, '')}</span>
              <span className='cCheck'>{allFeatures[key].indexOf('c') !== -1 ? '✓' : ''}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comparison;