import React, { Component } from "react";
import ProgressBar from "../inc/class/ProgressBar";
import IncreaseBar from "../inc/class/IncreaseBar";

export default class ClassComponent5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      increaseOne: {
        value: 0,
        btnColor: "success",
        increment: 25,
      },
      increaseTwo: {
        value: 0,
        btnColor: "danger",
        increment: 20,
      },
    };
    this.handleIncreaseOne = this.handleIncreaseOne.bind(this);
    this.handleIncreaseTwo = this.handleIncreaseTwo.bind(this);
  }

  handleIncreaseOne(val) {
    console.log("handleIncreaseOne", val);
    if (this.state.increaseOne.value < 100) {
      this.setState((prevState) => {
        return {
          increaseOne: {
            ...this.state.increaseOne,
            value: prevState.increaseOne.value + val,
          },
        };
      });
    }
  }

  handleIncreaseTwo(val) {
    console.log("handleIncreaseTwo", val);
    if (this.state.increaseTwo.value < 100) {
      this.setState((prevState) => {
        return {
          increaseTwo: {
            ...this.state.increaseTwo,
            value: prevState.increaseTwo.value + val,
          },
        };
      });
    }
  }

  render() {
    const { increaseOne, increaseTwo } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ProgressBar
              count={increaseOne.value}
              btnColor={increaseOne.btnColor}
            />
            <ProgressBar
              count={increaseTwo.value}
              btnColor={increaseTwo.btnColor}
            />
          </div>
        </div>
        <div className="row">
          <IncreaseBar
            text="ProgressBar One"
            handleIncrease={this.handleIncreaseOne}
            count={increaseOne.value}
            btnColor={increaseOne.btnColor}
            increment={increaseOne.increment}
          />
          <IncreaseBar
            text="ProgressBar Two"
            handleIncrease={this.handleIncreaseTwo}
            count={increaseTwo.value}
            btnColor={increaseTwo.btnColor}
            increment={increaseTwo.increment}
          />
        </div>
      </div>
    );
  }
}
