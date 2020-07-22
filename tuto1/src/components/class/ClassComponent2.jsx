import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaRegPaperPlane } from "react-icons/fa";
import { v1 as uuid } from "uuid";

export default class ClassComponent2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, title: "Learn React With Hooks", isNew: false },
        { id: 2, title: "Learn Vuejs 2.0", isNew: false },
        { id: 3, title: "Learn New Features Angular 10.0", isNew: false },
        { id: 4, title: "Manage My Teams Developers", isNew: false },
        { id: 5, title: "Back End Architecture", isNew: false },
      ],
      title: "",
      emptyTodo: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title !== "") {
      this.handleResetMessage(false);
      const newTodo = {
        id: uuid(),
        title: this.state.title,
        isNew: true,
      };
      const newTodos = this.state.todos.unshift(newTodo);
      this.setState((prevState) => {
        return (prevState) => prevState.todos.push(newTodos);
      });
      this.handleResetInput();
    } else {
      this.handleResetMessage(true);
    }
  }

  handleResetInput() {
    this.setState({
      title: "",
    });
  }

  handleResetMessage(isEmpty) {
    this.setState({
      emptyTodo: isEmpty,
    });
  }
  render() {
    const { todos, title, emptyTodo } = this.state;
    return (
      <div className="my-5">
        <h3>
          Class Component ToDo List -
          <span className="badge badge-danger font-weight-bold ml-2">
            {todos.length}
          </span>
        </h3>
        <ul className="list-group mt-3">
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="App-todo-list list-group-item">
                <span>{todo.title}</span>
                <span className="App-todo-new">
                  {todo.isNew && (
                    <h6>
                      <span className="badge badge-success">New</span>
                    </h6>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="form-group mt-4">
          <form onSubmit={this.handleSubmit}>
            {emptyTodo && (
              <div className="alert alert-danger mt-4" role="alert">
                Please Enter a valid title !!!!
              </div>
            )}
            <label className="App-todo-button-left font-weight-bold">
              Add New ToDo
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter the todo's title ..."
              value={title}
              onChange={this.handleChange}
              className="form-control"
            />
            <Button
              type="submit"
              className="btn btn-danger mt-2 App-todo-button-left"
            >
              <FaRegPaperPlane className="mb-1" />
              <span className="ml-2">Add ToDo</span>
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
