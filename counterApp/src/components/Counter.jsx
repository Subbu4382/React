import { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  if() {}
  Increment() {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  }
  Decrement = () => {
    if (this.state.count != 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter">
        <h1 className="title">Counter App</h1>
        <h2 className="counter-value">Count: {this.state.count}</h2>

        <div className="btn">
          <button onClick={() => this.Increment()}>Increment</button>
          <button onClick={this.Decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
