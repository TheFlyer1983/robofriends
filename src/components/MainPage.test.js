import { render } from '@testing-library/react';
import React from 'react';
import MainPage from './MainPage';

describe('render MainPage Component', () => {
  const initialState = {
    robots: [],
    error: undefined,
    isPending: false,
    searchField: '',
    onSearchChange: jest.fn(),
    onRequestRobots: jest.fn(),
  };

  let wrapper;

  let mockProps = { ...initialState };

  afterEach(() => {
    mockProps = { ...initialState };
  });
  it('isLoading', () => {
    mockProps.isPending = true;
    const { container } = render(<MainPage {...mockProps} />);
    expect(container.innerHTML).toMatchInlineSnapshot(`"<h1>Loading</h1>"`);
  });

  beforeEach(() => {
    wrapper = render(<MainPage {...mockProps} />);
  });

  it('renders MainPage component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    const filteredRobots = jest.fn(() =>
      mockProps.robots.filter((robot) =>
        robot.name.toLowerCase().includes(mockProps.searchField.toLowerCase())
      )
    );

    mockProps.robots = [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      },
    ];
    mockProps.searchField = 'john';
    render(<MainPage {...mockProps} />);
    expect(filteredRobots()).toEqual(mockProps.robots);
    expect(filteredRobots).toHaveBeenCalled();
  });
});
