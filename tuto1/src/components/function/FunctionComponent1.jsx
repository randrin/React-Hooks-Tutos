import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";

function FunctionComponent1() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="my-5">
      <h3>Function Component Counter</h3>
      <Button onClick={incrementCounter}>
        <FaPlusCircle className="mb-1" />
        <span className="ml-2">Increment the counter {counter}</span>
      </Button>
    </div>
  );
}

export default FunctionComponent1;
