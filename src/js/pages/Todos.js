import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    console.log('mounting');
    TodoStore.on("change", this.getTodos);
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('unmounted');
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
    console.log('got Todos');
  }

  reloadTodos() {
    TodoActions.reloadTodos();
    console.log('todos reloaded');
  }

  createTodo(){
      TodoActions.createTodo(Date.now());
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>CREATE</button>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos Poos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
