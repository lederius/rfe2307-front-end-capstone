import RelatedList from './relatedList.jsx';
import React from 'react';
import { render } from '@testing-library/react';
import Comparison from './comparison.jsx';
import RelatedProducts from './relatedProducts.jsx';
import ProductCards from './productCards.jsx'
;
describe('RelatedList component', () => {
  test('renders without errors', () => {
    render(<RelatedList />);
  });
});

describe('RelatedProducts component', () => {
  test('renders without errors', () => {
    render(<RelatedProducts />);
  });
});

describe('Comparison modal component', () => {
  test('renders without errors', () => {
    render(<Comparison />);
  });
});

describe('Comparison modal component', () => {
  test('renders without errors', () => {
    render(<ProductCards />);
  });
});



// describe('Comparison card should pull product names', () => {
//   it('shoule show', () => {
//     expect(<Comparison mainId={37322} />).toBe('Garricl Hoodie');
//   });
// });

