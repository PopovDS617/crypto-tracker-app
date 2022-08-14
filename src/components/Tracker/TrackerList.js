import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../../store/global-slice';
import styles from './TrackerList.module.css';
import TrackerListItem from './TrackerListItem';
import Modal from '../../UI/Modal';
import { UiActions } from '../../store/ui-slice';
import NewLogForm from '../../UI/NewLogForm';
import { current } from '@reduxjs/toolkit';

const TrackerList = () => {
  const [filterValue, setFilterValue] = useState('all');
  const dispatch = useDispatch();
  const trackerList = useSelector((state) => state.global.logs);
  const priceList = useSelector((state) => state.global.tokens);

  const appTheme = useSelector((state) => state.ui.theme);
  const isModalShown = useSelector((state) => state.ui.showModal);

  const showModalHandler = () => {
    dispatch(UiActions.showModal());
  };

  const hideModalHandler = () => {
    dispatch(UiActions.showModal());
  };

  const deleteItemHandler = (id) => {
    dispatch(globalActions.deleteLog({ id: id }));
  };

  let currentThemeTable;
  let currentButtonTheme;
  let currentHeaderTheme;

  if (appTheme === 'dark') {
    currentThemeTable = styles['table-dark'];
    currentHeaderTheme = `${styles.stikyHead} ${styles.stikyHeadDark}`;
    currentButtonTheme = `${styles.addBtn} ${styles.btnDark}`;
  } else {
    currentButtonTheme = `${styles.addBtn} ${styles.btnLight}`;
    currentHeaderTheme = `${styles.stikyHead} ${styles.stikyHeadLight}`;
    currentThemeTable = styles['table-light'];
  }

  const filterHandler = (e) => {
    setFilterValue(e.target.value);
  };
  let filteredList = [...trackerList];
  if (filterValue !== 'all') {
    filteredList = trackerList.filter((item) => item.status === filterValue);
  }

  let transformedList = filteredList.map((token) => {
    const tokenData = priceList.find((el) => token.tokenName === el.tokenName);

    return (
      <tr key={Math.random().toFixed(8)}>
        <TrackerListItem
          id={token.id}
          key={Math.random().toFixed(8)}
          name={token.tokenName}
          buyPrice={token.buyPrice}
          quantity={token.quantity}
          price={tokenData.price}
          sellPrice={token.sellPrice === null ? '-' : token.sellPrice}
          ratioGainLoss={
            token.status === 'active'
              ? Number(
                  tokenData.price * token.quantity -
                    token.quantity * token.buyPrice
                ).toFixed(2)
              : token.ratioGainLoss
          }
          status={token.status}
          onDelete={deleteItemHandler.bind(null, token.id)}
        />
      </tr>
    );
  });

  const emptyList = (
    <tr>
      <td className={styles.emptyList} colSpan={9}>
        empty
      </td>
    </tr>
  );

  return (
    <React.Fragment>
      <div className={styles.trackerList}>
        {isModalShown && (
          <Modal onClose={hideModalHandler}>
            <NewLogForm onClose={hideModalHandler} />
          </Modal>
        )}
        <table className={currentThemeTable}>
          <thead className={currentHeaderTheme}>
            <tr>
              <th>token</th>
              <th>quantity</th>
              <th>buy price</th>
              <th>sell price</th>
              <th>current price</th>
              <th>profit / loss</th>
              <th>
                <select
                  onChange={filterHandler}
                  name="status"
                  className={styles.statusSelect}
                >
                  <option value="all" defaultValue={true}>
                    all
                  </option>
                  <option value="active">active</option>
                  <option value="sold">sold</option>
                </select>
              </th>
              <th className={styles.itemChange}>change</th>
              <th className={styles.itemRemove}>del</th>
            </tr>
          </thead>
          <tbody>
            {transformedList.length >= 1 ? transformedList : emptyList}
          </tbody>
          <div className={styles.addBtn}></div>
        </table>
        <button onClick={showModalHandler} className={currentButtonTheme}>
          add log
        </button>
      </div>
    </React.Fragment>
  );
};

export default TrackerList;
