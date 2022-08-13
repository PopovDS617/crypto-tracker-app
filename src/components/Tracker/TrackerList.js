import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../../store/global-slice';
import styles from './TrackerList.module.css';
import TrackerListItem from './TrackerListItem';
import Modal from '../../UI/Modal';
import { UiActions } from '../../store/ui-slice';
import NewLogForm from '../../UI/NewLogForm';

const TrackerList = () => {
  const [filterValue, setFilterValue] = useState('all');
  const dispatch = useDispatch();
  const trackerList = useSelector((state) => state.global.logs);

  const appTheme = useSelector((state) => state.ui.theme);
  const isModalShown = useSelector((state) => state.ui.showModal);

  const showModalHandler = () => {
    dispatch(UiActions.showModal());
  };

  const hideModalHandler = () => {
    dispatch(UiActions.showModal());
  };

  const deleteItemHandler = (id) => {
    console.log({ id: id });
    dispatch(globalActions.deleteLog({ id: id }));
  };

  let currentThemeTable;

  if (appTheme === 'dark') {
    currentThemeTable = styles['table-dark'];
  } else {
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
    return (
      <tr key={Math.random().toFixed(8)}>
        <TrackerListItem
          id={token.id}
          key={Math.random().toFixed(8)}
          name={token.tokenName}
          buyPrice={token.buyPrice}
          quantity={token.quantity}
          price={token.price}
          sellPrice={token.sellPrice === null ? '-' : token.sellPrice}
          ratioGainLoss={
            token.status === 'active'
              ? Number(
                  token.price * token.quantity - token.quantity * token.buyPrice
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
      <td>empty</td>
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
          <thead>
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
          <div className={styles.addBtn}>
            <button onClick={showModalHandler}>add</button>
          </div>
        </table>
      </div>
    </React.Fragment>
  );
};

export default TrackerList;
