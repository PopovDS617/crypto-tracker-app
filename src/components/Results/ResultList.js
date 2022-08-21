import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ResultList.module.css';

const ResultList = () => {
  const logs = useSelector((state) => state.global.logs);
  const prices = useSelector((state) => state.global.tokens);

  const completedDeals = logs.filter((log) => log.status === 'sold');
  let completedDealsResult = 0;
  for (let i = 0; i < completedDeals.length; i++) {
    completedDealsResult +=
      (completedDeals[i].sellPrice - completedDeals[i].buyPrice) *
      completedDeals[i].quantity;
  }

  const activeDeals = logs.filter((log) => log.status === 'active');
  let activeDealsResult = 0;
  for (let i = 0; i < activeDeals.length; i++) {
    const tokenData = prices.find(
      (el) => el.tokenName === activeDeals[i].tokenName
    );

    activeDealsResult +=
      (tokenData.price - activeDeals[i].buyPrice) * activeDeals[i].quantity;
  }

  let completedDealsText;
  let activeDealsText;
  if (completedDealsResult > 0) {
    completedDealsText = styles.profit;
  }
  if (completedDealsResult < 0) {
    completedDealsText = styles.loss;
  }

  if (activeDealsResult > 0) {
    activeDealsText = styles.profit;
  }
  if (activeDealsResult < 0) {
    activeDealsText = styles.loss;
  }

  return (
    <div className={styles.resultContainer}>
      <div>
        {'Completed deals: '}
        <span className={completedDealsText}>
          {completedDealsResult.toFixed(2)}
        </span>
      </div>
      <div>
        {'Current deals: '}
        <span className={activeDealsText}>{activeDealsResult.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ResultList;
