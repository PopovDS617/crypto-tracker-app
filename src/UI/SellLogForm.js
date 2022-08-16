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
    <div>
      <div>
        <div>{sellItem.tokenName}</div>
        <div>{sellItem.quantity}</div>
        <div>{sellItem.buyPrice}</div>
        <div>{sellItem.sellPrice}</div>
        <div>{sellItem.price}</div>
        <div
          className={sellItem.ratioGainLoss < 0 ? styles.loss : styles.profit}
        >
          {sellItem.ratioGainLoss}
        </div>
      </div>

      <div>
        <form onSubmit={sellSubmitHandler}>
          <input
            placeholder="enter sell price"
            onChange={sellPriceInputHandler}
          />
          <button>sell</button>
          <button onClick={props.onClose}>close</button>
        </form>
      </div>
    </div>
  );
};

export default SellLogForm;
