import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

it('Loads header properly', () => {
  const { container, rerender } = render(<Header />);
  expect(container).toMatchSnapshot();
  rerender(<Header />);
  expect(container).toMatchSnapshot();
});
