import React, { Component } from 'react';
import TodoList from './TodoList';
import './css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id:1,
          title: "Hello, React!",
          desc: "Reactはじめました",
          done: false,
        },
        {
          id:2,
          title: "Hello, Redux!",
          desc: "Reduxもはじめました",
          done: false,
        },
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1>todo Application</h1>
        <TodoList
          // コンポーネントに渡す値
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
