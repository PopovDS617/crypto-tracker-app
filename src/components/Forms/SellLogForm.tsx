import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../../store/global-slice';
import styles from './SellLogForm.module.css';
import useTheme from '../../hooks/use-change-theme';
import { RootState } from '../../store';

interface Props {
  sellId: string;
  onClose: () => void;
}

const SellLogForm = (props: Props) => {
  const [sellPrice, setSellPrice] = useState('');
  const dispatch = useDispatch();
  const logList = useSelector((state: RootState) => state.global.logs);

  const { sellForm, sellFormBtn, sellFormInput } = useTheme(styles);

  const sellPriceInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSellPrice(e.target.value);
  };
  const sellItem = logList.find((el) => el.id === props.sellId);

  const sellSubmitHandler = (e: FormEvent) => {
    dispatch(
      globalActions.sellLog({
        id: sellItem?.id,
        sellPrice: sellPrice,
      })
    );
    e.preventDefault();
    props.onClose();
  };

  return (
    <div className={sellForm}>
      <div className={styles.tokenSellFormContainer}>
        <div>Token: {sellItem?.tokenName}</div>
        <div>Quantity: {sellItem?.quantity}</div>
        <div>Buy price: {sellItem?.buyPrice}</div>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={sellSubmitHandler}>
          <input
            className={sellFormInput}
            placeholder="enter sell price"
            onChange={sellPriceInputHandler}
            type="number"
            step="0.00001"
          />

          <button className={sellFormBtn}>sell</button>
          <button onClick={props.onClose} className={sellFormBtn} type="button">
            close
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellLogForm;
