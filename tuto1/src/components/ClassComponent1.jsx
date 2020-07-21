import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";

export default class ClassComponent1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };
  render() {
    return (
      <div className="my-5">
        <h3>Class Component Counter</h3>
        <Button className="btn btn-danger" onClick={this.incrementCounter}>
          <FaPlusCircle className="mb-1" />
          <span className="ml-2">Increment the counter {this.state.counter}</span>
        </Button>
      </div>
    );
  }
}
