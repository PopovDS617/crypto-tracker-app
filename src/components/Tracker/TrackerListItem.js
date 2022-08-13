import React from 'react';
import styles from './TrackerListItem.module.css';

const TrackerListItem = (props) => {
  return (
    <React.Fragment>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>{props.buyPrice}</td>
      <td>{props.sellPrice}</td>
      <td>{props.price}</td>
      <td className={props.ratioGainLoss < 0 ? styles.loss : styles.profit}>
        {props.ratioGainLoss}
      </td>
      <td>{props.status}</td>
      <td>
        <button>change</button>
      </td>
      <td>
        <button onClick={props.onDelete}>delete</button>
      </td>
    </React.Fragment>
  );
};

export default TrackerListItem;
