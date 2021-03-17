import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundary';
import './MainPage.css';

function MainPage(props: any) {
  useEffect(() => {
    props.onRequestRobots();
  }, []);

  const { searchField, onSearchChange, robots, isPending } = props;
  const filteredRobots = robots.filter((robot: { name: string }) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default MainPage;
