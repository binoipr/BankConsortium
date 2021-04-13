import React, { Component } from "react";
import { Button } from "reactstrap";

class CarList extends Component {
  state = {
    Vehicle: [
      {
        name: "",
        member_No: "",
        mobile_No: "",
        vehicle_bookingNo: "",
        downpaymen: "",
        loan_amount: "",
        total_amount: "",
        interest: "",
        booking_date: "",
        expected_delivery: "",
      },
    ],
  };

  onDeleteClick = (id) => {};
  render() {
    return (
      <div>
        <div className="ListHeading">
          <div className="primary-title">
            <p>Car List</p>
          </div>
        </div>

        <div className="latest-products">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Latest Products</h2>
                  {/* <a href="products.html">
                    view all products <i className="fa fa-angle-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarList;
