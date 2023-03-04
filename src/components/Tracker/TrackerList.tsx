import React, { ChangeEvent, useState } from 'react';

import { globalActions } from '../../store/slices/tracker-slice';
import styles from './TrackerList.module.css';
import TrackerListItem from './TrackerListItem';
import ModalWindow from '../../UI/Modal/Modal';
import { UiActions } from '../../store/slices/ui-slice';
import NewLogForm from '../Forms/NewLogForm';
import SellLogForm from '../Forms/SellLogForm';
import ChangeLogForm from '../Forms/ChangeLogForm';
import useTheme from '../../hooks/use-theme';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

const TrackerList = () => {
  const [filterValue, setFilterValue] = useState('all');
  const [isSelling, setIsSelling] = useState('');
  const [isEditing, setIsEditing] = useState('');
  const dispatch = useAppDispatch();
  const logs = useAppSelector((state) => state.global.logs);
  const priceList = useAppSelector((state) => state.global.tokens);

  const isAddModalShown = useAppSelector((state) => state.ui.showAddModal);
  const isSellModalShown = useAppSelector((state) => state.ui.showSellModal);
  const isEditModalShown = useAppSelector((state) => state.ui.showEditModal);

  const { table, tableHead, addBtn } = useTheme(styles);

  const showAddModalHandler = () => {
    dispatch(UiActions.showAddModal());
  };

  const hideAllModalsHandler = () => {
    dispatch(UiActions.hideAllModals());
  };

  const deleteItemHandler = (id: string) => {
    dispatch(globalActions.deleteLog({ id: id }));
  };

  const showSellModalHandler = (id: string) => {
    dispatch(UiActions.showSellModal());
    setIsSelling(id);
  };

  const showEditModalHandler = (id: string) => {
    dispatch(UiActions.showEditModal());
    setIsEditing(id);
  };

  const filterHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);
  };
  let filteredList = [...logs];
  if (filterValue !== 'all') {
    filteredList = logs.filter((item) => item.status === filterValue);
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
          price={tokenData?.price ? tokenData.price : 0}
          sellPrice={token.sellPrice === null ? '-' : token.sellPrice}
          ratioGainLoss={token.ratioGainLoss}
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
    <div className="tracker">
      <section>
        <div className={styles.trackerList}>
          {isAddModalShown && (
            <ModalWindow onClose={hideAllModalsHandler}>
              <NewLogForm onClose={hideAllModalsHandler} />
            </ModalWindow>
          )}
          {isSellModalShown && (
            <ModalWindow onClose={hideAllModalsHandler}>
              <SellLogForm onClose={hideAllModalsHandler} sellId={isSelling} />
            </ModalWindow>
          )}
          {isEditModalShown && (
            <ModalWindow onClose={hideAllModalsHandler}>
              <ChangeLogForm
                onClose={hideAllModalsHandler}
                editId={isEditing}
              />
            </ModalWindow>
          )}

          <table className={table}>
            <thead className={tableHead}>
              <tr>
                <th className={styles.hiddenTd}></th>
                <th>token</th>
                <th>quantity</th>
                <th>buying price</th>
                <th>selling price</th>
                <th>current price</th>
                <th>profit / loss</th>
                <th>
                  <select
                    onChange={filterHandler}
                    name="status"
                    className={styles.statusSelect}
                  >
                    <option value="all" defaultValue="true">
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
          <button onClick={showAddModalHandler} className={addBtn}>
            add log
          </button>
        </div>
      </section>
    </div>
  );
};

export default TrackerList;
