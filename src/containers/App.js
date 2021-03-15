import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage'
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => {
      requestRobots(dispatch);
    },
  };
};

function App(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    props.onRequestRobots();
  }, []);

  return <MainPage { ...props }/>
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
