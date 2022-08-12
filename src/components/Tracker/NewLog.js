import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const NewLog = () => {
  return (
    <div>
      <form>
        <select>
          <option value="UNIUSDT"></option>
          <option value="SUSHIUSDT"></option>
        </select>

        <input placeholder="price" />
        <input placeholder="amount" />
        <button>add</button>
      </form>
    </div>
  );
};

export default NewLog;
