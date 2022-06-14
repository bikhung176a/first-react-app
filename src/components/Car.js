import React from "react";
class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      brand: "Audi",
      model: "Q7",
      year: 2016,
    };
  }
  start = (e) => {
    alert("Your car is ready by " + e.type);
  };

  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.changeColor}
        >
          Change Color
        </button>
        <button className="btn btn-primary" type="button" onClick={this.start}>
          Start
        </button>
      </div>
    );
  }
}

export default Car;
