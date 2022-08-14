import styles from './GlobalMarketItem.module.css';

const GlobalMarketItem = (props) => {
  let dailyChangeDisplay = props.dailyChange;
  let dailyChangeColor = styles['global-item-price'];
  if (props.dailyChange > 0) {
    dailyChangeDisplay = `+${props.dailyChange}`;
    dailyChangeColor = `${styles['global-item-price']} ${styles.profit}`;
  }
  if (props.dailyChange < 0) {
    dailyChangeDisplay = `${props.dailyChange}`;
    dailyChangeColor = `${styles['global-item-price']} ${styles.loss}`;
  }

  return (
    <section className={styles['global-item-wrapper']}>
      <div className={styles['global-item-text']}>
        <div className={styles.shortNameText}>{props.tokenGlobalShortName}</div>
        <div className={styles.fullNameText}>{props.tokenGlobalFullName}</div>
      </div>
      <div className={styles['global-item-price']}>
        price:
        {props.tokenCurrentPrice}
      </div>
      <div>
        24h change:
        <span className={dailyChangeColor}>{dailyChangeDisplay}</span>
      </div>
    </section>
  );
};

export default GlobalMarketItem;
