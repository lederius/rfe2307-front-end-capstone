import {render, screen} from '@testing-library/react';
import ProductDetails from './index.jsx';
import React from 'react';
import '@testing-library/jest-dom';

test('renders the Product Overview Component', () =>{
  render(<ProductDetails />);

  // expect(screen.getByRole('form')).toHaveFormValues({
  //   name: 'product',
  // });
  expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Driplo');
  // expect(screen.getByLabelText('product', {selector: 'input'})).toHaveTextContent(/Search/);
  //can add more expect text for img later
});