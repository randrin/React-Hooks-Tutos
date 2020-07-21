import React from "react";
import "./App.css";
import ClassComponent1 from "./components/ClassComponent1";
import FunctionComponent1 from "./components/FunctionComponent1";

function App() {
  return (
    <div className="App my-5">
      <h1>React Hooks Tuto1</h1>
      <div className="container">
        <p>
          Two different modes (One with class component, another one with
          functional component) to implement the simple counter with click
          button
        </p>
        <div className="row">
          <div className="col-md-6">
            <ClassComponent1 />
          </div>
          <div className="col-md-6">
            <FunctionComponent1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
