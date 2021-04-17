import React, { Component } from "react";
import {
  Label,
  Input,
  Form,
  FormGroup,
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button,
} from "reactstrap";
import AppNavbar from "./AppNavbar";

class Booking extends Component {
  state = {
    Booking: [
      {
        isopen: false,
        dropdown: "",
        downpayment: "",
        loanamount: "",
        total: "",
      },
    ],
  };
  toggle = () => {
    this.setState({
      isopen: !this.state.isopen,
    });
  };
  onChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
    console.log(this.state.dropdown);
  };

  render() {
    return (
      <div>
        <AppNavbar />
        <div className="head">
          <h3>Total Booking</h3>
        </div>
        <div className="booking">
          <div className="inner-heading">
            <h3>Primary Details</h3>
          </div>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="member-name"
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
                <Label for="type">Vehicle</Label>

                <Dropdown isOpen={this.state.isopen} toggle={this.toggle}>
                  <DropdownToggle caret>{this.state.dropdown}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      value="bike"
                      name="dropdown"
                      onClick={this.onChange}
                    >
                      bike
                    </DropdownItem>
                    <DropdownItem
                      value="car"
                      name="dropdown"
                      onClick={this.onChange}
                    >
                      car
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
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
                  name="downpayment"
                  id="downpayment"
                  value={this.state.downpayment}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="loan-amount">Loan Amount</Label>
                <Input
                  type="text"
                  name="loanamount"
                  id="loanamount"
                  value={this.state.loanamount}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="total-amount">Total amount</Label>
                <Input
                  type="text"
                  name="total"
                  id="total"
                  value={
                    parseInt(this.state.downpayment) +
                    parseInt(this.state.loanamount)
                  }
                  placeholder={this.state.total}
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
          <div className="inner-submit">
            <Button
              for="submit"
              type="button"
              color="primary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                height: "100%",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

console.log(Booking.state);
export default Booking;
