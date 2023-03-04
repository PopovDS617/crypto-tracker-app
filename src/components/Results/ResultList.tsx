import React from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './ResultList.module.css';
import useTheme from '../../hooks/use-theme';

const ResultList = () => {
  const logs = useAppSelector((state) => state.global.logs);
  const prices = useAppSelector((state) => state.global.tokens);

  const { results } = useTheme(styles);

  const completedDeals = logs.filter((log) => log.status === 'sold');
  let completedDealsResult = 0;
  for (let i = 0; i < completedDeals.length; i++) {
    const { sellPrice, buyPrice, quantity } = completedDeals[i];
    if (sellPrice && buyPrice && quantity) {
      completedDealsResult += (sellPrice - buyPrice) * quantity;
    }
  }

  const activeDeals = logs.filter((log) => log.status === 'active');
  let activeDealsResult = 0;

  for (let i = 0; i < activeDeals.length; i++) {
    const tokenData = prices.find(
      (el) => el.tokenName === activeDeals[i].tokenName
    );

    if (
      tokenData?.price &&
      activeDeals[i].buyPrice &&
      activeDeals[i].quantity
    ) {
      activeDealsResult +=
        (tokenData.price - activeDeals[i].buyPrice) * activeDeals[i].quantity;
    }
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
    <div className="info">
      <div className="results">
        <div className={results}>
          <div>
            {'Completed deals: '}
            <span className={completedDealsText}>
              {completedDealsResult.toFixed(2)}
            </span>
          </div>
          <div>
            {'Current deals: '}
            <span className={activeDealsText}>
              {activeDealsResult.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultList;
