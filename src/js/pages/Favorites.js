import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore"


export default class Favorites extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
    console.log('got Todos');
  }

  render(){
    const { location } = this.props;
    const { todos } = this.state;
    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });
    return(
      <div>
        <h1> Favorite Activities </h1>
        <ul>
          {TodoComponents}
        </ul>
      </div>
    )
  }
}
