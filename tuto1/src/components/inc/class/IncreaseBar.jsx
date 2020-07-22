import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaLevelUpAlt } from "react-icons/fa";

 class IncreaseBar extends Component {
  render() {
    const { handleIncrease, count, increment, btnColor, children } = this.props;
    console.log(children);
    return (
      <div className="text-left ml-3">
        <Button
          className={`btn btn-${btnColor}`}
          disabled={count === 100 ? true : false}
          onClick={() => handleIncrease(increment)}
        >
          <FaLevelUpAlt />
          Increase to {increment}%
        </Button>
      </div>
    );
  }
}
export default React.memo(IncreaseBar);