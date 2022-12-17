import React from 'react';
import './Counter.css';
import { Controls } from './Controls';
import { Value } from './Value';

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  handleMakeReset = () => {
    this.setState({ value: 0 });
  };

  render() {
    return (
      <div className="counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleMakeReset}
        />
      </div>
    );
  }
}
