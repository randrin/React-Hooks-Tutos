import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";

export default class ClassComponent3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyPress: null,
      show: false,
    };
  }

  handleShow() {
    this.setState({
      show: !this.state.show,
      keyPress: null,
    });
  }

  handleKeyUp = (e) => {
    this.setState({
      keyPress: e.code,
    });
  };

  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyUp);
  }

  render() {
    const { keyPress, show } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-3">
            <Button onClick={() => this.handleShow()}>
              <FaChevronRight className="mb-1" />
              <span className="ml-2">
                {show ? "Finish the test" : "Start the test"}
              </span>
            </Button>
          </div>
          {show && (
            <div className="col-md-12 my-3">
              <div className="card">
                <div className="card-header App-keyboard font-weight-bold">
                  Type any key on your keyboard
                </div>
                <div className="card-body">
                  <h5 className="card-title text-danger">You are type</h5>
                  <p className="card-text font-weight-bold text-success">
                    {keyPress}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
