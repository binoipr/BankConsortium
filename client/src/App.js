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
import Bank from "./components/BankRegister";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Router>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
