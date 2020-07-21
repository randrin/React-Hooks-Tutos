import React, { useState } from "react";
import { Button } from "react-bootstrap";

function FunctionComponent1() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="my-5">
      <h3>Function Component Tutto1</h3>
      <Button onClick={incrementCounter}>
        Increment the counter {counter}
      </Button>
    </div>
  );
}

export default FunctionComponent1;
