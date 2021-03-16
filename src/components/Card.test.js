import { render } from '@testing-library/react';
import React from 'react';
import Card from './Card';

it('Loads card properly', () => {
  expect(render(<Card id={1} name={'Mr 1'} email={'test@test.com'} />)).toMatchSnapshot();
});
