import styles from './GlobalMarketItem.module.css';

const GlobalMarketItem = (props) => {
  return (
    <section className={styles['global-item-wrapper']}>
      <div className={styles['global-item-text']}>{props.tokenGlobalName}</div>
      <div className={styles['global-item-price']}>
        {props.tokenCurrentPrice}
      </div>
    </section>
  );
};

export default GlobalMarketItem;
