import "./App.css";
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dish";
import Main from "./components/MainComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Main></Main>
      </div>
    );
  }
}

export default App;
