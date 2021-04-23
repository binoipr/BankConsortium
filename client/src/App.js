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
import CarList from "./components/Carlist";
import BikeList from "./components/Bikelist";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/company" component={CompanyRegister} />
            <Route path="/new" component={Booking} />
            <Route path="/api/carlist" component={CarList} />
            <Route path="/api/bikelist" component={BikeList} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
