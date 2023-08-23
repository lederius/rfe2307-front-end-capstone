import RelatedList from './relatedList.jsx';
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Comparison from './comparison.jsx';
import RelatedProducts from './relatedProducts.jsx';
import ProductCards from './productCards.jsx';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import Stars from './starRating.jsx';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';



describe('RelatedProducts component', () => {
  test('renders without errors', () => {
    render(<RelatedProducts />);
    const rprltest = screen.getByTestId('RLload');
    expect(rprltest).toBeInTheDocument();
    const rpyotest = screen.getByTestId('RLload');
    expect(rpyotest).toBeInTheDocument('YOload');
    expect(screen.getAllByRole('heading')).toBeTruthy();
  });
});

describe('Comparison modal component', () => {
  test('renders without errors', async () => {
    render(<Comparison
      onClose={() => console.log('hi')}
      mainId={37971}
      compared={{ name: 'name', features: [{ feature: 'hi', value: 'bye' }] }} />);

    await waitFor(() => {
      const compare = screen.getByText(/COMPARING/);
      expect(compare).toBeInTheDocument();
    });
  });
});


describe('StarRating modal component', () => {
  test('renders without errors', () => {
    render(<Stars rating={4}/>);
    const starz = screen.getByTestId('starzzz');
    expect(starz).toBeInTheDocument();
  });
});

describe('ProductCards modal component', () => {
  test('renders without errors', async () => {
    render(<ProductCards
      styles={{sale_price: '45', original_price: '33'}}
      photo={{}}
      id={37971}
      actionButton='Action'
      action={() => console.log('hi')}
    />);
    await waitFor (() => {const pcards = screen.getByText(/Category/);
    expect(pcards).toBeTruthy();
    });
  });
});

describe('Is the main Related area loading', () => {
  let mockAxios;

  beforeAll(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterAll(() => {
    mockAxios.restore();
  });

  it('Should render main area within Related List', async () => {
    const relatedResponse = [1, 2, 3];
    const stylesResponse = {};
    mockAxios
      .onGet('http://localhost:9000/products/37971/related')
      .reply(200, relatedResponse);
    mockAxios
      .onGet(/http:\/\/localhost:9000\/products\/\d+\/styles/)
      .reply(200, stylesResponse);

    render(<RelatedList displayedId={37971} />);

    await waitFor(() => {
      const RLbyTestId = screen.getByTestId('mainArea');
      expect(RLbyTestId).toBeInTheDocument();
      const carRole = screen.getByRole('list');
      expect(carRole).toBeTruthy();
    });
  });
});







// describe('ProductCards modal component', () => {
//   it('Should return some text', async () => {
//     act(() => {
//       render(<RelatedList displayedID={37971}/>);
//     });
//     const categoryword = await screen.getByText('Category');
//     expect(categoryword).toBeInTheDocument();
//   });
// });

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

