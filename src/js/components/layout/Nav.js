import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component{

  render(){
    const { location } = this.props
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const favoriteClass = location.pathname.match(/^\/favorites/) ? "active" : "";
    const todoClass = location.pathname.match(/^\/activities/) ? "active" : "";

    return(
      <nav role="navigation">
        <IndexLink to="/">HOME</IndexLink>
        <ul class="navList">
          <li class={todoClass}>
            <Link to="activities">The List</Link>
          </li>
          <li class={favoriteClass}>
            <Link to="activities">Favorites</Link>
          </li>
          <li class={settingsClass}>
            <Link to="activities">Settings</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
