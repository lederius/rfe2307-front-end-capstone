import RelatedList from './relatedList.jsx';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Comparison from './comparison.jsx';
import RelatedProducts from './relatedProducts.jsx';
import ProductCards from './productCards.jsx';
import { act } from 'react-dom/test-utils';


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

describe('ProductCards modal component', () => {
  test('renders without errors', () => {
    render(<ProductCards />);
  });
});

describe('ProductCards modal component', () => {
  it('Should return some text', () => {
    act(() => {
      render(<RelatedList displayedID={37971}/>);
    });
    expect(screen.getByText('Category')).toBeInTheDocument();
  });
});

// it ('New review form should render when add review button clicked', () => {
//   render(<ReviewsList />);
//   const add = screen.getByRole('add');
//   fireEvent.click(add);
//   expect(screen.getByText('New Review')).toBeTruthy();
// });
// describe('Comparison card should pull product names', () => {
//   it('shoule show', () => {
//     expect(<Comparison mainId={37322} />).toBe('Garricl Hoodie');
//   });
// });


// describe('Comparison card should pull product names', () => {
//   it('shoule show', () => {
//     expect(<Comparison mainId={37322} />).toBe('Garricl Hoodie');
//   });
// });

