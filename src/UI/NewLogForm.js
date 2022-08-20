import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../store/global-slice';
import styles from './NewLogForm.module.css';

const NewLogForm = (props) => {
  const inputPriceRef = useRef();
  const inputQuantityRef = useRef();
  const selectedTokenRef = useRef();
  const tokenList = useSelector((state) => state.global.tokens);
  const selectOptionsList = [...tokenList];
  const sortedSelectOptionsList = selectOptionsList
    .sort((a, b) => {
      return a.tokenName.localeCompare(b.tokenName);
    })
    .map((item) => {
      return (
        <option key={item.id} value={item.tokenName}>
          {item.tokenName}
        </option>
      );
    });
  const dispatch = useDispatch();

  const addLogHandler = (e) => {
    e.preventDefault();
    const enteredPrice = +inputPriceRef.current.value;
    const enteredQuantity = +inputQuantityRef.current.value;
    const selectedToken = selectedTokenRef.current.value;
    console.log(enteredPrice);

    dispatch(
      globalActions.addLog({
        tokenName: selectedToken,
        buyPrice: enteredPrice,

        quantity: enteredQuantity,
      })
    );
    props.onClose();
  };

  return (
    <div className={styles.newLogContainer}>
      <form onSubmit={addLogHandler}>
        <div className={styles.addFormSelectContainer}>
          <select ref={selectedTokenRef} className={styles.addFormSelect}>
            <option disabled>choose</option>
            {sortedSelectOptionsList}
          </select>
        </div>

        <div className={styles.addFormInputs}>
          <input
            placeholder="price"
            ref={inputPriceRef}
            className={styles.addFormInput}
          />
          <input
            placeholder="quantity"
            ref={inputQuantityRef}
            className={styles.addFormInput}
          />
        </div>

        <div className={styles.addFormControls}>
          <button>add</button>
          <button onClick={props.onClose} type="button">
            close
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewLogForm;
