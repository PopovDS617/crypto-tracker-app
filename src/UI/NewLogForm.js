import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../store/global-slice';

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
  };

  return (
    <div>
      <form onSubmit={addLogHandler}>
        <select ref={selectedTokenRef}>
          <option disabled>choose</option>
          {sortedSelectOptionsList}
        </select>

        <input placeholder="price" ref={inputPriceRef} />
        <input placeholder="quantity" ref={inputQuantityRef} />
        <button>add</button>
        <button onClick={props.onClose}>close</button>
      </form>
    </div>
  );
};

export default NewLogForm;
