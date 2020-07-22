import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaPlus, FaMinus, FaPaintBrush } from "react-icons/fa";

export default class ClassComponent4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handlePlus() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleMinus() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  handleReset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-7">
            <h3 className="text-danger font-weight-bold mb-3">{count}</h3>
            <Button
              className="btn btn-primary m-2"
              onClick={() => this.handlePlus()}
            >
              <FaPlus />
            </Button>
            <Button
              className="btn btn-danger m-2"
              onClick={() => this.handleMinus()}
            >
              <FaMinus />
            </Button>
          </div>
          <div className="col-md-5 text-left">
            <div
              className="App-plus-minus-reset"
              onClick={() => this.handleReset()}
            >
              <span className="mt-4">
                <FaPaintBrush />
              </span>
              <span>Reset the counter</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
