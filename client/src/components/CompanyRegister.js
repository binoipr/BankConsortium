import { Component } from "react";

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

class Vehicle extends Component {
  state = {
    modal: false,
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {};

  onSubmit = (e) => {};

  render() {
    return (
      <div>
        <DropdownItem color="dark" onClick={this.toggle}>
          Register a Company
        </DropdownItem>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>register a Company</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="type">Vehicle type</Label>{" "}
                <Input
                  type="select"
                  name="type"
                  id="type"
                  onChange={this.onChange}
                >
                  <option value="bike">bike</option>
                  <option value="car">car</option>
                </Input>
                <Label for="registration">Company Registration No</Label>
                <Input
                  type="text"
                  name="registration"
                  id="registration"
                  placeholder="enter the registration number"
                  onChange={this.onChange}
                />
                <Label for="name">Company name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name of the Company"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "1rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Vehicle;
