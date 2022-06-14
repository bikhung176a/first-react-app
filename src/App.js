import "./App.css";
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import Stock from "./components/Stock";
import { DISHES } from "./shared/dish";
import Warning from "./components/Warning";
import Form from "./components/Form";
import Garage from "./components/Garage";

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
