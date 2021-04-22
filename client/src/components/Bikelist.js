import React, { Component, Fragment } from "react";
import { Button, Table } from "reactstrap";
import AppNavbar from "./AppNavbar";
import { v4 as uuid } from "uuid";
class BikeList extends Component {
  state = {
    Vehicle: [
      {
        id: uuid(),
        name: "John",
        memberNo: "1",
        vehicle: "Maestro",
        booking_date: "22/03/2021",
        expected_delivery: "31/03/2021",
      },
    ],
  };

  onDeleteClick = (id) => {};
  render() {
    const Veh = this.state.Vehicle;
    return (
      <div>
        <AppNavbar />
        <div className="listview">
          <div className="primary-title">
            <h3>Bike List</h3>
          </div>
          <div className="booked">
            <Table dark>
              <thead>
                <tr>
                  <th>M.No</th>
                  <th>Name</th>
                  <th>Vehicle</th>
                  <th>B.date</th>
                  <th>E.delivery</th>
                </tr>
              </thead>
              <tbody>
                {Veh.map((item, id) => {
                  return (
                    <Fragment>
                      <tr key={id}>
                        <td>{item.memberNo}</td>
                        <td>{item.name}</td>
                        <td>{item.vehicle}</td>
                        <td>{item.booking_date}</td>
                        <td>{item.expected_delivery}</td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default BikeList;
