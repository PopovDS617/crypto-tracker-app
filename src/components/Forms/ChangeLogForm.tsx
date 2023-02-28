import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../../store/slices/tracker-slice';
import styles from './ChangeLogForm.module.css';
import useTheme from '../../hooks/use-change-theme';
import { RootState } from '../../store/store';

interface Props {
  onClose: () => void;
  editId: string;
}

const ChangeLogForm = (props: Props) => {
  const logList = useSelector((state: RootState) => state.global.logs);
  const changeItem = logList.find((item) => item.id === props.editId);

  const { changeForm, changeFormInput, changeFormBtn } = useTheme(styles);

  const [values, setValues] = useState({
    buyPrice: changeItem?.buyPrice,
    sellPrice: changeItem?.sellPrice || 0,

    quantity: changeItem?.quantity,
  });

  const changeInputValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: +event.target.value,
    }));
  };

  const dispatch = useDispatch();

  const editSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(values);
    dispatch(
      globalActions.changeLog({
        id: changeItem?.id,
        buyPrice: values.buyPrice,
        sellPrice: values.sellPrice,
        quantity: values.quantity,
        status: values.sellPrice === 0 ? 'active' : 'sold',
      })
    );
    props.onClose();
  };

  return (
    <div className={changeForm}>
      <div className={styles.tokenName}>
        <div>{changeItem?.tokenName}</div>
      </div>
      <form onSubmit={editSubmitHandler}>
        <div className={styles.changeFormInputs}>
          <div>
            <label htmlFor="buyPrice">buying price</label>
            <input
              className={changeFormInput}
              value={values.buyPrice}
              name="buyPrice"
              onChange={changeInputValueHandler}
              type="number"
              step="0.00001"
            />
          </div>

          <div>
            <label htmlFor="sellPrice">selling price</label>
            <input
              className={changeFormInput}
              value={values.sellPrice}
              name="sellPrice"
              onChange={changeInputValueHandler}
              type="number"
              step="0.00001"
            />
          </div>

          <div>
            <label htmlFor="quantity">quantity</label>
            <input
              type="number"
              className={changeFormInput}
              value={values.quantity}
              name="quantity"
              step="0.00001"
              onChange={changeInputValueHandler}
            />
          </div>
        </div>
        <div className={styles.changeFormControls}>
          <button className={changeFormBtn}>change</button>
          <button
            type="button"
            onClick={props.onClose}
            className={changeFormBtn}
          >
            close
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeLogForm;
