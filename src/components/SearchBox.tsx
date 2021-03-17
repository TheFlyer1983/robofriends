import React from 'react';
import { ISearchBoxProps } from '../types/types';

const SearchBox = ({
  searchfield,
  searchChange,
}: ISearchBoxProps) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
