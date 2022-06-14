import React from "react";
import reactstrap from "reactstrap";
class Store extends React.Component {
  constructor(props) {
    super(props);
    this.getItem = this.getItem.bind(this);
  }
  getItem() {
    this.props.onChangeNumber();
  }
  render() {
    return (
      <div>
        <h1>Item name: {this.props.itemName}</h1>
        <h2>number of roses in stock :{this.props.number}</h2>
        <button onClick={this.getItem}>Add to cart</button>
      </div>
    );
  }
}

export default Store;
