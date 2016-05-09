import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function deleteTodo(id) {
  console.log('touched');
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  });
  console.log(id);
}
export function editTodo(edit) {
  dispatcher.dispatch({
    type: "EDIT_TODO",
    edit: true
  });
}

export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_TODOS"});
  // setTimeout(() => {
  //   dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
  //     {
  //       id: 8484848484,
  //       text: "Go Shopping Again",
  //       complete: false
  //     },
  //     {
  //       id: 6262627272,
  //       text: "Don't Hug Wife",
  //       complete: true,
  //       edit: false
  //     },
  //   ]});
  // }, 1000);
}
