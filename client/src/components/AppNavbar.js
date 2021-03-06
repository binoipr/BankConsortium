import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Bank from "./BankRegister";
import Vehicle from "./CompanyRegister";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="AppNavbar">
        <Navbar style={{ backgroundColor: "#97A4AC" }} light expand="md">
          <NavbarBrand href="/">
            <img className="img1" src="/images/cooperative.png"></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/home">
                  <i className="fa fa-home"></i>
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Register
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Bank />
                  </DropdownItem>
                  <DropdownItem>
                    <Vehicle />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Booked List
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/api/bikelist">Bike</DropdownItem>
                  <DropdownItem href="/api/carlist">Car</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/new">booking</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
