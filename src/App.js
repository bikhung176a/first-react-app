import "./App.css";
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dish";
import Warning from "./components/Warning";
import Form from "./components/Form";
import Garage from "./components/Garage";
import ContainerComponent from "./components/ContainerComponent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Layout from "./components/Layout";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}></Menu>
      </div>
    );
  }
}

export default App;
