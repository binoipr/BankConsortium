import React, { Component } from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Scroll extends Component {
  render() {
    return (
      <Carousel className="scroll-img">
        <div>
          <img src="/images/RayZR-.png" alt="" className="s-img" />
          <p className="legend">Yamaha @ interest free </p>
        </div>
        <div>
          <img src="/images/Honda-Bike.png" alt="" className="s-img" />
          <p className="legend">Honda @ 2.5% interest</p>
        </div>
        <div>
          <img src="/images/yamaha-mt-15.png" alt="" className="s-img" />
          <p className="legend">Maruthi-25000rs special offer</p>
        </div>
      </Carousel>
    );
  }
}

export default Scroll;
