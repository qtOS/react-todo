import React from "react";

export default class Favorites extends React.Component {
  render(){

    const { location } = this.props;
    return(
      <div>
        <h1> Favorite Activities </h1>
        <ul>
          <li>favorite list items</li>
        </ul>
      </div>
    )
  }
}
