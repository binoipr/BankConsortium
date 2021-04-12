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
        <div className="details">
          <div className="title">
            <h2>Bank consortium</h2>
          </div>
          <p>
            This is a cooperative bank consortium of 20 members in Ernakulam
            rural area. We mainly focussed to provide mega loan mela for our
            customers in onam festival season with the help of vehicle companys.
            we directly transferred the companys offers to customers by giving
            them interest free loans and others.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
