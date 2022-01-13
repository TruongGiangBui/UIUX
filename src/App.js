import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Menu></Menu>
        <div className="content">
          <Navbar></Navbar>
          <Switch>
            
            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
