import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dish";
import DishDetail from "./DishdetailComponent";
import Home from "./Home";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import BrowserRouter from "react-router-dom/BrowserRouter";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      //selectedDish: null,
    };
  }
  /*onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }*/

  render() {
    const HomePage = (e) => {
      return <Home></Home>;
    };
    return (
      <div>
        {/*<Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        ></Menu>
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        ></DishDetail>*/}

        <BrowserRouter>
          <div>
            <Header></Header>
            <Switch>
              <Route path="/home" component={HomePage}></Route>
              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={this.state.dishes}></Menu>}
              ></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
