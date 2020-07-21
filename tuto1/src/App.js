import React from "react";
import "./App.css";
import ClassComponent1 from "./components/ClassComponent1";
import ClassComponent2 from "./components/ClassComponent2";
import FunctionComponent1 from "./components/FunctionComponent1";
import FunctionComponent2 from "./components/FunctionComponent2";

function App() {
  return (
    <div className="App my-5">
      <h1 className="mb-4">React Hooks Tuto 1</h1>
      <div className="container">
        <p className="App-tuto-info bg-info">
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
        <hr className="App-hr" />
      </div>
      <div className="container mt-5">
        <p className="App-tuto-info bg-info">
          Two different modes (One with class component, another one with
          functional component) to implement ToDo List
        </p>
        <div className="row">
          <div className="col-md-6">
            <ClassComponent2 />
          </div>
          <div className="col-md-6">
            <FunctionComponent2 />
          </div>
        </div>
        {/* <hr className="App-hr" /> */}
      </div>
    </div>
  );
}

export default App;
