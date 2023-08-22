import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fullName: "",
    };
  }
  render() {
    console.log(this.state);
    return (
      <>
        <div>
          <div>Counter</div>
          {/* <div>{this.state.fullName}</div> */}
          <input
            value={this.state.fullName}
            onChange={(e) => this.setState({ fullName: e.target.value })}
          />
          <div>{this.state.count}</div>
          <div>
            <button
              onClick={() => this.setState({ count: this.state.count + 1 })}
            >
              Add
            </button>
            <button
              onClick={() => this.setState({ count: this.state.count - 1 })}
            >
              Minus
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Counter;
