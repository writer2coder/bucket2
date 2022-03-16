import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Mapping from "./Views/Mapping";
import Login from "./Views/Login";









class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1> Simple SPA </h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Mapping">Mapping</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>






          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/Mapping" component={Mapping}/>
            <Route path="/Login" component={Login}/>
        
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
