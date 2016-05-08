import React from "react";

export default class Home extends React.Component {
  render(){
    const { location } = this.props;
    console.log('home hit');
    return(
      <h1>HOME</h1>
    )
  }
}
