import React from "react";
function Avatar(props) {
  return <img src={props.user.avatarUrl} atl={props.user.name} />;
}

export default Avatar;
