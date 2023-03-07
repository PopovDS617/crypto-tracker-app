import React from 'react';
import styles from './TrackerListItem.module.css';
import DoneIcon from '../../UI/Icons/DoneIcon';
import DeleteIcon from '../../UI/Icons/DeleteIcon';
import EditIcon from '../../UI/Icons/EditIcon';

interface Props {
  id: string;
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
  let calculatedGainLoss: number;
  if (props.status === 'active') {
    calculatedGainLoss = +(
      (props.price - +props.buyPrice) *
      props.quantity
    ).toFixed(2);
  } else {
    calculatedGainLoss = +(
      (+props.sellPrice - props.buyPrice) *
      props.quantity
    ).toFixed(2);
  }

  return (
    <>
      <div className={styles.icon}>
        {props.status === 'active' && (
          <span className={styles.icon} onClick={props.onSell}>
            <DoneIcon />
          </span>
        )}
      </div>
      <div>{props.name}</div>
      <div>{props.quantity}</div>
      <div>{props.buyPrice}</div>
      <div>{props.sellPrice}</div>
      <div>{props.price}</div>
      <div className={calculatedGainLoss < 0 ? styles.loss : styles.profit}>
        {calculatedGainLoss}
      </div>
      <div>{props.status}</div>
      <div className={styles.icon}>
        <span className={styles.icon} onClick={props.onEdit}>
          <EditIcon />
        </span>
      </div>
      <div className={styles.iconContainer}>
        <span className={styles.icon} onClick={props.onDelete}>
          <DeleteIcon />
        </span>
      </div>
    </>
  );
};

export default TrackerListItem;
