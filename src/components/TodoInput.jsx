import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    return (
      <div>
        <h1>Todo Input</h1>
        <form>
          <input type="text" name="todo-input" placeholder="Add a todo item" />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
