import React from "react";
const TrackerListItem = (props) => {
  return (
    <React.Fragment>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>{props.buyPrice}</td>
      <td>{props.sellPrice}</td>
      <td>{props.price}</td>
      <td>{props.ratioGainLoss}</td>
      <td>{props.status}</td>
    </React.Fragment>
  );
};

export default TrackerListItem;
