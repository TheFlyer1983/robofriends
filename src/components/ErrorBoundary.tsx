import React, { Component } from 'react';
import { IAppProps, IErrorState, Props } from '../types/types';

class ErrorBoundry extends Component<IAppProps, IErrorState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That is not good.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
