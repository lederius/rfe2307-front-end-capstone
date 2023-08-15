import RelatedList from './relatedList.jsx';
import React from 'react';
import { render } from '@testing-library/react';



describe('RelatedList component', () => {
  test('renders without errors', () => {
    render(<RelatedList />);
  });
});