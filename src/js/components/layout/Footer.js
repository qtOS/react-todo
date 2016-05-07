import React from "react";

export default class Footer extends React.Component{
  constructor(){
    super();
    this.state = {
      name: "AKR"
    }
  }
  render(){
    return(
      <footer>
        <h2>Footer stuff goes here fam {this.name} appreciates you</h2>
      </footer>
    )
  }
}
