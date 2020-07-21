import React, { Component } from "react";

import Todoitem from "./Todoitem";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <div>
          <Todoitem />
        </div>
        <button>Clear</button>
      </div>
    );
  }
}

export default TodoList;
