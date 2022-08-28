import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../../store/global-slice';
import styles from './ChangeLogForm.module.css';

const ChangeLogForm = (props) => {
  const logList = useSelector((state) => state.global.logs);
  const changeItem = logList.find((item) => item.id === props.editId);
  const [values, setValues] = useState({
    buyPrice: changeItem.buyPrice,
    sellPrice: changeItem.sellPrice || 0,

    quantity: changeItem.quantity,
  });

  const changeInputValueHandler = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: Number(event.target.value),
    }));
  };

  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.ui.theme);

  let buttonTheme;
  let formTheme;
  let inputTheme;

  if (currentTheme === 'dark') {
    formTheme = `${styles.changeLogContainer} ${styles.changeLogContainerDark}`;
    buttonTheme = `${styles.changeFormBtn} ${styles.changeFormBtnDark}`;
    inputTheme = `${styles.changeFormInput} ${styles.changeFormInputDark}`;
  } else {
    formTheme = `${styles.changeLogContainer} ${styles.changeLogContainerLight}`;
    buttonTheme = `${styles.changeFormBtn} ${styles.changeFormBtnLight}`;
    inputTheme = `${styles.changeFormInput} ${styles.changeFormInputLight}`;
  }

  const editSubmitHandler = (event) => {
    event.preventDefault();
    console.log(values);
    dispatch(
      globalActions.changeLog({
        id: changeItem.id,
        buyPrice: values.buyPrice,
        sellPrice: values.sellPrice,
        quantity: values.quantity,
        status: values.sellPrice === 0 ? 'active' : 'sold',
      })
    );
    props.onClose();
  };

  return (
    <div className={formTheme}>
      <div className={styles.tokenName}>
        <div>{changeItem.tokenName}</div>
      </div>
      <form onSubmit={editSubmitHandler}>
        <div className={styles.changeFormInputs}>
          <div>
            <label htmlFor="buyPrice">buy price</label>
            <input
              className={inputTheme}
              value={values.buyPrice}
              name="buyPrice"
              onChange={changeInputValueHandler}
              type="number"
            />
          </div>

          <div>
            <label htmlFor="sellPrice">sell price</label>
            <input
              className={inputTheme}
              value={values.sellPrice}
              name="sellPrice"
              onChange={changeInputValueHandler}
              type="number"
            />
          </div>

          <div>
            <label htmlFor="quantity">quantity</label>
            <input
              type="number"
              className={inputTheme}
              value={values.quantity}
              name="quantity"
              onChange={changeInputValueHandler}
            />
          </div>
        </div>
        <div className={styles.changeFormControls}>
          <button className={buttonTheme}>change</button>
          <button type="button" onClick={props.onClose} className={buttonTheme}>
            close
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeLogForm;
