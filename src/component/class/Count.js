import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "",
    };
  }
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      this.setState({ count: this.state.text + this.state.count });
    };

    const handleChange = (e) => {
      this.setState({ text: Number(e.target.value) });
    };
    // console.log(this.state.text);
    return (
      <>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
          </form>
          <section>
            <h1>{this.state.count}</h1>
            <div>
              <button
                onClick={() => this.setState({ count: this.state.count + 1 })}
              >
                Add
              </button>
            </div>
            <div>
              <button
                onClick={() => this.setState({ count: this.state.count - 1 })}
              >
                Minus
              </button>
            </div>
          </section>
        </div>
      </>
    );
  }
}
export default Count;
