import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage'
import './App.css';
import { setSearchField, requestRobots } from '../actions';
import { IRobot, IAppProps } from '../types/types'

const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => {
      dispatch(requestRobots());
    },
  };
};

function App(props: any) {
  return <MainPage { ...props }/>
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
