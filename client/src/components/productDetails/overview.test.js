import {render, screen, cleanup} from '@testing-library/react';
import {describe, expect, test} from '@jest/globals';
import React from 'react';
import '@testing-library/jest-dom';
import ProductDetails from './index.jsx';
import Detail from './Detail.jsx';
import ImageList from './ImageList.jsx';
import ProductInfo from './ProductInfo.jsx';
import Header from './Header.jsx';

afterEach(()=>{
  cleanup();
});

test('renders the Product Overview Component', () =>{
  render(<ProductDetails />);

  // expect(screen.getByRole('form')).toHaveFormValues({
  //   name: 'product',
  // });
  expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Driplo');
  // expect(screen.getByLabelText('product', {selector: 'input'})).toHaveTextContent(/Search/);
  //can add more expect text for img later
});


it('renders the Detail Component', () =>{
  render(<ImageList />);
  expect( screen.getByRole('heading', {level: 3})).toHaveTextContent('Image List');
});

it('renders the ProductInfo Component', () =>{
  render(<ProductInfo />);
  //issue with testing state with undefined vaule
});

it('renders the Header Component', () =>{
  render(<Header />);
  expect( screen.getByRole('heading', {level: 1})).toHaveTextContent('Driplo');
  expect(screen.getByRole('button', {name: 'search'})).toBeInTheDocuement;
});