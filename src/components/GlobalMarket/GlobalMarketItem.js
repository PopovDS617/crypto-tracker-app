import styles from './GlobalMarketItem.module.css';

const GlobalMarketItem = (props) => {
  return (
    <section className={styles['global-item-wrapper']}>
      <div>{props.tokenGlobalName}</div>
      <div>{props.tokenCurrentPrice}</div>
    </section>
  );
};

export default GlobalMarketItem;
