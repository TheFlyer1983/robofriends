import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import CounterButton from './CounterButton';

describe('render CounterButton Component', () => {
  const mockProps = { color: 'red' };

  it('expect to render CounterButton component', () => {
    expect(render(<CounterButton color={mockProps.color} />)).toMatchSnapshot();
  });

  it('updateCount increments state by 1.', () => {
    render(<CounterButton color={mockProps.color} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Count: 0');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Count: 1');
  });

});
