import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
class Dish extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dish = this.props.dish;
    return (
      <div className="col-12 col-sm-5">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Dish;
