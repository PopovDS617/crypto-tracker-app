import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../../store/global-slice';
import styles from './NewLogForm.module.css';

const NewLogForm = (props) => {
  const inputPriceRef = useRef();
  const inputQuantityRef = useRef();
  const selectedTokenRef = useRef();
  const tokenList = useSelector((state) => state.global.tokens);
  const currentTheme = useSelector((state) => state.ui.theme);

  let buttonTheme;
  let formTheme;
  let selectTheme;
  let inputTheme;

  if (currentTheme === 'dark') {
    buttonTheme = `${styles.addFormBtn} ${styles.addFormBtnLight}`;
    formTheme = `${styles.newLogContainer} ${styles.newLogContainerDark}`;
    selectTheme = `${styles.addFormSelect} ${styles.addFormSelectDark}`;
    inputTheme = `${styles.addFormInput} ${styles.addFormInputDark}`;
  } else {
    buttonTheme = `${styles.addFormBtn} ${styles.addFormBtnDark}`;
    formTheme = `${styles.newLogContainer} ${styles.newLogContainerLight}`;
    selectTheme = `${styles.addFormSelect} ${styles.addFormSelectLight}`;
    inputTheme = `${styles.addFormInput} ${styles.addFormInputLight}`;
  }

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
    <div className={formTheme}>
      <form onSubmit={addLogHandler}>
        <div className={styles.addFormSelectContainer}>
          <select ref={selectedTokenRef} className={selectTheme}>
            <option disabled>choose</option>
            {sortedSelectOptionsList}
          </select>
        </div>

        <div className={styles.addFormInputs}>
          <input
            placeholder="price"
            ref={inputPriceRef}
            className={inputTheme}
            type="number"
          />
          <input
            placeholder="quantity"
            ref={inputQuantityRef}
            className={inputTheme}
            type="number"
          />
        </div>

        <div className={styles.addFormControls}>
          <button className={buttonTheme}>add</button>
          <button onClick={props.onClose} type="button" className={buttonTheme}>
            close
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewLogForm;
