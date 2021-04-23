import { connect } from "react-redux";
import { Component } from "react";
import PropTypes from "prop-types";
import { addBank } from "../actions/regActions";

import {
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class Bank extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newBank = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.addBank(newBank);
    this.toggle();
  };

  render() {
    return (
      <div>
        <DropdownItem color="dark" onClick={this.toggle}>
          Register a Bank
        </DropdownItem>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>register a bank</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">bank name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name of the bank"
                  onChange={this.onChange}
                />

                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter the email"
                  onChange={this.onChange}
                />
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="enter password"
                  onChange={this.onChange}
                />

                <Button color="dark" style={{ marginTop: "1rem" }} block>
                  Add new Bank
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { addBank })(Bank);
