import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Client Meeting'},
      {id: 2, content: 'Surfing Lessions'},
      {id: 3, content: 'Plan Webinar'},
      {id: 4, content: 'Swimming'},
      {id: 5, content: 'Snorekeling'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">ToDo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
