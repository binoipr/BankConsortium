import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import Scroll from "./Imagescrol";

class Home extends Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <div>
        <AppNavbar />
        <Scroll />
      </div>
    );
  }
}

export default Home;
