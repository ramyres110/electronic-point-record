import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});
