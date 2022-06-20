import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import Comments from "./Comments";
import Dish from "./Dish";

/*function renderDishes({ dish }) {
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
function renderComments({ comments }) {
  const comment = comments.map((item) => {
    return (
      <div>
        <p>{item.comment}</p>
        <p>
          {item.author} {item.date}
        </p>
      </div>
    );
  });

  return (
    <div className="col-12 col-sm-7">
      <h2>comments</h2>
      {comment}
    </div>
  );
}*/

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <Dish dish={this.props.dish}></Dish>
            <Comments comments={this.props.dish.comments}></Comments>
          </div>
        </div>
      );
    } else {
      return <div>1</div>;
    }
  }
}
export default DishDetail;
