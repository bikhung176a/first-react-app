import "./App.css";
import React from "react";
import { DISHES } from "./shared/dish";
import Main from "./components/MainComponent";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import MyForm from "./components/MyForm";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";

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
