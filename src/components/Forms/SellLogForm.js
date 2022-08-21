import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../../store/global-slice';
import styles from './SellLogForm.module.css';

const SellLogForm = (props) => {
  const [sellPrice, setSellPrice] = useState('');
  const dispatch = useDispatch();
  const logList = useSelector((state) => state.global.logs);
  const currentTheme = useSelector((state) => state.ui.theme);

  let buttonTheme;
  let formTheme;
  let inputTheme;

  if (currentTheme === 'dark') {
    formTheme = `${styles.sellFormContainer} ${styles.sellFormContainerDark}`;
    buttonTheme = `${styles.formButton} ${styles.formButtonDark}`;
    inputTheme = `${styles.sellFormInput} ${styles.sellFormInputDark}`;
  } else {
    formTheme = `${styles.sellFormContainer} ${styles.sellFormContainerLight}`;
    buttonTheme = `${styles.formButton} ${styles.formButtonLight}`;
    inputTheme = `${styles.sellFormInput} ${styles.sellFormInputLight}`;
  }

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
  };

  return (
    <div className={formTheme}>
      <div className={styles.tokenSellFormContainer}>
        <div>Token: {sellItem.tokenName}</div>
        <div>Quantity: {sellItem.quantity}</div>
        <div>Buy price: {sellItem.buyPrice}</div>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={sellSubmitHandler}>
          <input
            className={inputTheme}
            placeholder="enter sell price"
            onChange={sellPriceInputHandler}
          />

          <button className={buttonTheme}>sell</button>
          <button onClick={props.onClose} className={buttonTheme} type="button">
            close
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellLogForm;
