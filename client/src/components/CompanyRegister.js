import { Component } from "react";
import { connect } from "react-redux";

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
import AppNavbar from "./AppNavbar";

class CompanyRegister extends Component {
  state = {
    modal: false,
    name: "",
    selectedFile: "",
    price: "",
    msg: "",
  };
  toggle = () => {};

  onChange = (e) => {};

  onFileChange = () => {};

  onSubmit = (e) => {};

  render() {
    return (
      <div>
        <AppNavbar />
        <DropdownItem color="dark" onClick={this.toggle}>
          Register a Company
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

                <Label for="price">price</Label>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="enter the price"
                  onChange={this.onChange}
                />

                <Label for="msg">Enter the details</Label>
                <Input
                  type="text"
                  name="msg"
                  id="msg"
                  placeholder="enter the details, separated with comma ,"
                  onChange={this.onChange}
                />

                <Label for="file" style={{ margin: "1rem" }}>
                  Upload image
                </Label>

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
const mapStateToProps = (state) => ({
  item: state.item,
});

export default CompanyRegister;
