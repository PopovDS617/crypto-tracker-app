import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../../store/global-slice';
import styles from './NewLogForm.module.css';
import useTheme from '../../hooks/use-change-theme';

const NewLogForm = (props) => {
  const inputPriceRef = useRef();
  const inputQuantityRef = useRef();
  const selectedTokenRef = useRef();
  const tokenList = useSelector((state) => state.global.tokens);

  const { newForm, newFormBtn, newFormInput, newFormSelect } = useTheme(styles);

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
    <div className={newForm}>
      <form onSubmit={addLogHandler}>
        <div className={styles.addFormSelectContainer}>
          <select ref={selectedTokenRef} className={newFormSelect}>
            <option disabled>choose</option>
            {sortedSelectOptionsList}
          </select>
        </div>

        <div className={styles.addFormInputs}>
          <input
            placeholder="price"
            ref={inputPriceRef}
            className={newFormInput}
            type="number"
            step="0.00001"
          />
          <input
            placeholder="quantity"
            ref={inputQuantityRef}
            className={newFormInput}
            type="number"
            step="0.00001"
          />
        </div>

        <div className={styles.addFormControls}>
          <button className={newFormBtn}>add</button>
          <button onClick={props.onClose} type="button" className={newFormBtn}>
            close
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewLogForm;
