import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo} // todo内要素をすべて引き継ぐ
      />
    )

    return (
      <ul>
        {todos}
      </ul>
    );
  }
}

export default TodoList