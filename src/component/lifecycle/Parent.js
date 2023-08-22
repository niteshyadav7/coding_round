import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor Parent");
  }
  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps Parent");
  }
  componentDidMount() {
    console.log("componentDidMount Parent");
  }
  render() {
    console.log("render Parent");
    return (
      <>
        <Child name={"Nitesh Yadav"} location={"Mau"} />
      </>
    );
  }
}
export default Parent;
