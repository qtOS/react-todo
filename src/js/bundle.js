import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Settings from "./pages/Settings"
import Todos from "./pages/Todos"

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="activities" component={Todos}></Route>
      <Route path="favorites" component={Favorites}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app)
