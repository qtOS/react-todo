import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render(){
    const { location } = this.props;

    return(
      <div>
        <Nav location={location}/>
        <h1>List[R]</h1>
        <hr/>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
