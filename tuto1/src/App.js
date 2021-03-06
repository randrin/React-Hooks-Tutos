import React from "react";
import "./App.css";
import ClassComponent1 from "./components/class/ClassComponent1";
import ClassComponent2 from "./components/class/ClassComponent2";
import ClassComponent3 from "./components/class/ClassComponent3";
import ClassComponent4 from "./components/class/ClassComponent4";
import ClassComponent5 from "./components/class/ClassComponent5";
import FunctionComponent1 from "./components/function/FunctionComponent1";
import FunctionComponent2 from "./components/function/FunctionComponent2";
import FunctionComponent3 from "./components/function/FunctionComponent3";
import FunctionComponent4 from "./components/function/FunctionComponent4";
import FunctionComponent5 from "./components/function/FunctionComponent5";

function App() {
  return (
    <div className="App my-5">
      <h1 className="mb-4">React Hooks Tuto 1</h1>
      <div className="container my-5">
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
      <div className="container my-5">
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
        <hr className="App-hr" />
      </div>
      <div className="container my-5">
        <p className="App-tuto-info bg-info">
          Two different modes (One with class component, another one with
          functional component) to show the key typed on the keyboard
        </p>
        <div className="row">
          <div className="col-md-6">
            <ClassComponent3 />
          </div>
          <div className="col-md-6">
            <FunctionComponent3 />
          </div>
        </div>
        <hr className="App-hr" />
      </div>
      <div className="container my-5">
        <p className="App-tuto-info bg-info">
          Two different modes (One with class component, another one with
          functional component) to increment, decrement and reset the counter
        </p>
        <div className="row">
          <div className="col-md-6">
            <ClassComponent4 />
          </div>
          <div className="col-md-6">
            <FunctionComponent4 />
          </div>
        </div>
        <hr className="App-hr" />
      </div>
      <div className="container my-5">
        <p className="App-tuto-info bg-info">
          Two different modes (One with class component, another one with
          functional component) to increase the progress bar
        </p>
        <div className="row">
          <div className="col-md-6">
            <ClassComponent5 />
          </div>
          <div className="col-md-6">
            <FunctionComponent5 />
          </div>
        </div>
        {/* <hr className="App-hr" /> */}
      </div>
    </div>
  );
}

export default App;
