import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import AppNavbar from "./AppNavbar";

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
        <AppNavbar />
        <div className="listview">
          <div className="primary-title">
            <h3>Car List</h3>
          </div>

          <div className="booked">
            <Table dark>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>M.No</th>
                  <th>Vehicle</th>
                  <th>B.date</th>
                  <th>E.delivery</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>15</td>
                  <td>Wagnor</td>
                  <td>12/03/2021</td>
                  <td>31/03/2021</td>
                  <td>delivered</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default CarList;
