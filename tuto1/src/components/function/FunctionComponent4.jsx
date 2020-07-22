import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
import { FaPlus, FaMinus, FaPaintBrush } from "react-icons/fa";

export default function FunctionComponent4() {
  const initialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state > 0 ? state - 1 : initialState;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-7">
          <h3 className="text-danger font-weight-bold mb-3">{count}</h3>
          <Button
            className="btn btn-primary m-2"
            onClick={() => dispatch("increment")}
          >
            <FaPlus />
          </Button>
          <Button
            className="btn btn-danger m-2"
            onClick={() => dispatch("decrement")}
          >
            <FaMinus />
          </Button>
        </div>
        <div className="col-md-5 text-left">
          <div
            className="App-plus-minus-reset"
            onClick={() => dispatch("reset")}
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
