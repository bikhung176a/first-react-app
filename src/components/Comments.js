import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const comment = this.props.comments.map((item) => {
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
  }
}
export default Comments;
