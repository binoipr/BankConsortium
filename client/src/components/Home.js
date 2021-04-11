import React, { Component } from "react";
import AppNavbar from "./AppNavbar";

class Home extends Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <div>
        <AppNavbar />
        <h3>Hello Binoy</h3>
      </div>
    );
  }
}

export default Home;
