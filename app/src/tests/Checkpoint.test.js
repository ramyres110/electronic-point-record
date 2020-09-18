import React from 'react';
import { render } from '@testing-library/react';

import Checkpoint from '../pages/Checkpoint';

test('renders learn react link', () => {
  const { getByText } = render(<Checkpoint />);
  const linkElement = getByText(/app/i);
  expect(linkElement).toBeInTheDocument();
});
