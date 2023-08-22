import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor Child");
  }
  componentDidMount() {
    console.log("componentDidMount Child");
  }
  render() {
    // console.log(this.props);
    console.log("render Child");
    const { name, location } = this.props;
    return (
      <>
        <div>{name}</div>
        <div>{location}</div>
      </>
    );
  }
}
export default Child;
