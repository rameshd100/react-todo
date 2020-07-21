import React, { Component } from "react";
import "./App.css";

//Components
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
