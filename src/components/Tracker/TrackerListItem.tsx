import React from 'react';
import styles from './TrackerListItem.module.css';
import DoneIcon from '../../UI/DoneIcon';
import DeleteIcon from '../../UI/DeleteIcon';
import EditIcon from '../../UI/EditIcon';

interface Props {
  id: string;
  key: string;
  name: string;
  buyPrice: number;
  quantity: number;
  price: number;
  sellPrice: string | number;
  ratioGainLoss: number;
  status: string;
  onDelete: () => void;
  onSell: () => void;
  onEdit: () => void;
}

const TrackerListItem = (props: Props) => {
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
        {props.status === 'active'
          ? ((props.price - +props.buyPrice) * props.quantity).toFixed(2)
          : ((+props.sellPrice - +props.buyPrice) * +props.quantity).toFixed(2)}
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
