import styles from './MarketItem.module.css';

interface Props {
  displayGlobalShortName: string;
  displayGlobalFullName: string;
  price: number;
  dailyChange: number;
}

const GlobalMarketItem = (props: Props) => {
  let dailyChangeDisplay = props.dailyChange.toString();
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
        <div className={styles.shortNameText}>
          {props.displayGlobalShortName}
        </div>
        <div className={styles.fullNameText}>{props.displayGlobalFullName}</div>
      </div>
      <div className={styles['global-item-price']}>
        {`price: ${props.price}`}
      </div>
      <div className={styles.dailyChangeText}>
        <span>24h:</span>
        <span className={dailyChangeColor}>{dailyChangeDisplay}</span>
      </div>
    </section>
  );
};

export default GlobalMarketItem;
