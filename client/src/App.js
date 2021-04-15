import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React, { component, Fragment, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import CompanyRegister from "./components/CompanyRegister";
import Login from "./components/Login";
import Home from "./components/Home";
import Booking from "./components/Newbooking";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/company" component={CompanyRegister} />
          <Route path="/new" component={Booking} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
