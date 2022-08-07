import React from "react";

const FavoriteTokenItem = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
  );
};

export default FavoriteTokenItem;
