import React, { Component } from "react";
import AppNavbar from "./AppNavbar";

class Booking extends Component {
  state = {
    Booking: [
      {
        name: "",
      },
    ],
  };
  render() {
    return (
      <div>
        <AppNavbar />
      </div>
    );
  }
}

export default Booking;
