import { FormEvent, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { globalActions } from '../../store/slices/tracker-slice';
import styles from './NewLogForm.module.css';
import useTheme from '../../hooks/use-change-theme';

import { tokens } from '../../data/data';
interface Props {
  onClose: () => void;
}

const NewLogForm = (props: Props) => {
  const inputPriceRef = useRef<HTMLInputElement>(null);
  const inputQuantityRef = useRef<HTMLInputElement>(null);
  const selectedTokenRef = useRef<HTMLSelectElement>(null);

  const { newForm, newFormBtn, newFormInput, newFormSelect } = useTheme(styles);

  const sortedSelectOptionsList = useMemo(
    () =>
      tokens
        .sort((a, b) => a.tokenName.localeCompare(b.tokenName))
        .map((item) => {
          return (
            <option key={Math.random() * 10} value={item.tokenName}>
              {item.tokenName}
            </option>
          );
        }),
    []
  );
  const dispatch = useDispatch();

  const addLogHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredPrice = inputPriceRef.current!.value;
    const enteredQuantity = inputQuantityRef.current!.value;
    const selectedToken = selectedTokenRef.current!.value;

    dispatch(
      globalActions.addLog({
        tokenName: selectedToken,
        buyPrice: +enteredPrice,

        quantity: +enteredQuantity,
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
