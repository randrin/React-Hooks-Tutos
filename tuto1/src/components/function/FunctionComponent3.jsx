import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";

export default function FunctionComponent3() {
  const [show, isShow] = useState(false);
  const [keyPress, setKeyPress] = useState(null);

  const handleKeyUp = (e) => {
    setKeyPress(e.code);
  };

  const handleShow = () => {
    setKeyPress(null);
    isShow(!show);
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-3">
          <Button onClick={handleShow}>
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
