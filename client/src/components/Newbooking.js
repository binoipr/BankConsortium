import React, { Component } from "react";
import {
  Label,
  Input,
  Form,
  FormGroup,
  Row,
  Col,
  Container,
  Button,
} from "reactstrap";
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
        <AppNavbar />;
        <div className="head">
          <h3>Total Booking</h3>
        </div>
        <div>
          <div className="inner-heading">
            <h3>Primary Details</h3>
          </div>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="MemNo">Member No:</Label>
                <Input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="enter the member number"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="mobile">Contact No</Label>
                <Input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="contact number"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="type">Type</Label>
                <Input
                  type="text"
                  name="type"
                  id="type"
                  placeholder="enter the vehicle type"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="company">Company</Label>
                <Input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="enter the company"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="vehicle-name">Vehicle</Label>
                <Input
                  type="text"
                  name="veh-name"
                  id="veh-name"
                  placeholder="Vehicle name"
                />
              </FormGroup>
            </Col>
          </Row>
          <div className="inner-heading">
            <h3>Amount</h3>
          </div>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="payment">Down payment</Label>
                <Input
                  type="text"
                  name="down-payment"
                  id="down-payment"
                  placeholder="downpayment"
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="loan-amount">Loan Amount</Label>
                <Input
                  type="text"
                  name="loan-amount"
                  id="loan-amount"
                  placeholder="loan-amount"
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="total-amount">Total amount</Label>
                <Input
                  type="text"
                  name="total-amount"
                  id="total-amount"
                  placeholder="Total amount"
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="Interest">Interest rate</Label>
                <Input
                  type="text"
                  name="interest"
                  id="Interest"
                  placeholder="Interest %"
                />
              </FormGroup>
            </Col>
          </Row>

          <div className="inner-heading">
            <h3>Dates</h3>
          </div>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="booking-date">Booking Date</Label>
                <Input type="date" name="booking-date" id="booking-date" />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="delivery-date">Expected Delivery</Label>
                <Input type="date" name="delivery-date" id="delivery-date" />
              </FormGroup>
            </Col>
          </Row>
          <Button for="submit" className="primary">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Booking;
