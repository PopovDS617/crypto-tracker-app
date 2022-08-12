import React from 'react';
import styles from './FavoriteTokenItem.module.css';

const FavoriteTokenItem = (props) => {
  return (
    <div className={styles.favItem}>
      <div className={styles.favItemTokenName}>{props.name}</div>
      <div className={styles.favItemTokenPrice}>{props.price}</div>
    </div>
  );
};

export default FavoriteTokenItem;
