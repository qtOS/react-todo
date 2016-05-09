import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

let creating = false;

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

  createTodo(val, date){
      TodoActions.createTodo(val, date);
  }
  editTodo(id, text){
    TodoActions.editTodo(id, text);
  }
  deleteTodo(id){
    TodoActions.deleteTodo(id);
    console.log(this.id)
  }
  handleChange(e){
    const activity = e.target.value;
    const inp = document.getElementById('todo-inp');
    //don't forget to add the prop in the change method --duhhh
    //this.props.changeTitle(title);
    console.log(creating, " init", activity, inp);
    if(creating == false){
        let creating = true;
        console.log(activity, " length");
        if(creating == true || activity.length != null){
          console.log(creating);
          console.log(activity);
          inp.onkeypress = function(e){
            if(!e) e = window.event;
            var kCode = e.keyCode || e.which;
            if (kCode == '13' && activity.length > 2){
              TodoStore.createTodo(activity);
              creating = false;
            }
          }
          // this.createTodo(activity);
        }
      }
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });
    const inpval = document.getElementById('todo-inp');
    // const typingSty =  this.inpval > 1 ? {color: "red"} : {color: "black"};
    //const typingSty = {color: "red"};
    return (
      <div>
        <button onClick={this.editTodo.bind(this)}>edit</button>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos Poos</h1>
        <p style={this.typingSty}> ::Typing::</p>
        <input id="todo-inp" onChange={this.handleChange.bind(this)}/>
        <ul onClick={this.deleteTodo.bind(this)}>{TodoComponents}</ul>
      </div>
    );
  }
}
