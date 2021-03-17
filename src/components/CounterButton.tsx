import React, { Component } from 'react';
import { IAppProps, ICounterState } from '../types/types';

class CounterButton extends Component<IAppProps, ICounterState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps: IAppProps, nextState: ICounterState) {
    return this.state.count !== nextState.count;
  }

  updateCount = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render(): JSX.Element {
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
