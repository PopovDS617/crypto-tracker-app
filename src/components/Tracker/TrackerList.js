import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../../store/global-slice';
import styles from './TrackerList.module.css';
import TrackerListItem from './TrackerListItem';
import Modal from '../../UI/Modal';
import { UiActions } from '../../store/ui-slice';
import NewLogForm from '../Forms/NewLogForm';
import SellLogForm from '../Forms/SellLogForm';
import ChangeLogForm from '../Forms/ChangeLogForm';

const TrackerList = () => {
  const [filterValue, setFilterValue] = useState('all');
  const [isSelling, setIsSelling] = useState('');
  const [isEditing, setIsEditing] = useState('');
  const dispatch = useDispatch();
  const trackerList = useSelector((state) => state.global.logs);
  const priceList = useSelector((state) => state.global.tokens);

  const appTheme = useSelector((state) => state.ui.theme);
  const isAddModalShown = useSelector((state) => state.ui.showAddModal);
  const isSellModalShown = useSelector((state) => state.ui.showSellModal);
  const isEditModalShown = useSelector((state) => state.ui.showEditModal);

  const showAddModalHandler = () => {
    dispatch(UiActions.showAddModal());
  };

  const hideAllModalsHandler = () => {
    dispatch(UiActions.hideAllModals());
  };

  const deleteItemHandler = (id) => {
    dispatch(globalActions.deleteLog({ id: id }));
  };

  const showSellModalHandler = (id) => {
    dispatch(UiActions.showSellModal());
    setIsSelling(id);
  };

  const showEditModalHandler = (id) => {
    dispatch(UiActions.showEditModal());
    setIsEditing(id);
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
    const tokenData = priceList.find((el) => el.tokenName === token.tokenName);

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
              ? ((tokenData.price - token.buyPrice) * token.quantity).toFixed(2)
              : ((token.sellPrice - token.buyPrice) * token.quantity).toFixed(2)
          }
          status={token.status}
          onDelete={deleteItemHandler.bind(null, token.id)}
          onSell={showSellModalHandler.bind(null, token.id)}
          onEdit={showEditModalHandler.bind(null, token.id)}
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
      <section>
        <div className={styles.trackerList}>
          {isAddModalShown && (
            <Modal onClose={hideAllModalsHandler}>
              <NewLogForm onClose={hideAllModalsHandler} />
            </Modal>
          )}
          {isSellModalShown && (
            <Modal onClose={hideAllModalsHandler}>
              <SellLogForm onClose={hideAllModalsHandler} sellId={isSelling} />
            </Modal>
          )}
          {isEditModalShown && (
            <Modal onClose={hideAllModalsHandler}>
              <ChangeLogForm
                onClose={hideAllModalsHandler}
                editId={isEditing}
              />
            </Modal>
          )}

          <table className={currentThemeTable}>
            <thead className={currentHeaderTheme}>
              <tr>
                <th className={styles.hiddenTd}></th>
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
                <th className={styles.itemChange}></th>
                <th className={styles.itemRemove}></th>
              </tr>
            </thead>
            <tbody>
              {transformedList.length >= 1 ? transformedList : emptyList}
            </tbody>
          </table>
        </div>
        <div className={styles.addLogControls}>
          <button onClick={showAddModalHandler} className={currentButtonTheme}>
            add log
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TrackerList;
