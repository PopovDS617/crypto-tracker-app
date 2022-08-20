import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../store/global-slice';
import styles from './SellLogForm.module.css';

const SellLogForm = (props) => {
  const [sellPrice, setSellPrice] = useState('');
  const dispatch = useDispatch();
  const logList = useSelector((state) => state.global.logs);

  const sellPriceInputHandler = (e) => {
    setSellPrice(e.target.value);
  };
  const sellItem = logList.find((el) => el.id === props.sellId);

  const sellSubmitHandler = (e) => {
    dispatch(
      globalActions.sellLog({
        id: sellItem.id,
        sellPrice: sellPrice,
      })
    );
    e.preventDefault();
    props.onClose();
    console.log({
      id: sellItem.id,
      sellPrice: sellPrice,
    });
  };

  return (
    <div className={styles.sellFormContainer}>
      <div className={styles.tokenSellFormContainer}>
        <div>Token: {sellItem.tokenName}</div>
        <div>Quantity: {sellItem.quantity}</div>
        <div>Buy price: {sellItem.buyPrice}</div>
        {/* <div>{sellItem.sellPrice}</div> */}
        {/* <div>{sellItem.price}</div> */}
        {/* <div
          className={sellItem.ratioGainLoss < 0 ? styles.loss : styles.profit}
        >
          {sellItem.ratioGainLoss}
        </div> */}
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={sellSubmitHandler}>
          <input
            className={styles.sellFormInput}
            placeholder="enter sell price"
            onChange={sellPriceInputHandler}
          />
          <button className={styles.formButton}>sell</button>
          <button
            onClick={props.onClose}
            className={styles.formButton}
            type="button"
          >
            close
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellLogForm;
