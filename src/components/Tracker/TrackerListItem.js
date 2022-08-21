import React from 'react';
import styles from './TrackerListItem.module.css';
import DoneIcon from '../../UI/DoneIcon';
import DeleteIcon from '../../UI/DeleteIcon';
import EditIcon from '../../UI/EditIcon';

const TrackerListItem = (props) => {
  return (
    <React.Fragment>
      <td>
        {props.status === 'active' && (
          <span className={styles.icon} onClick={props.onSell}>
            <DoneIcon />
          </span>
        )}
      </td>
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
        <span className={styles.icon} onClick={props.onEdit}>
          <EditIcon />
        </span>
      </td>
      <td>
        <span className={styles.icon} onClick={props.onDelete}>
          <DeleteIcon />
        </span>
      </td>
    </React.Fragment>
  );
};

export default TrackerListItem;
