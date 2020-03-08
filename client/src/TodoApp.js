import React, { Component } from 'react';
import './TodoApp.css';
import TodoList from './TodoList';

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <header className="TodoApp-header">
          <h1>My TodoList</h1>
          <TodoList />
        </header>
      </div>
    );
  }
}

export default TodoApp;
