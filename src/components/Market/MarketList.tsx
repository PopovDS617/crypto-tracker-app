import React from 'react';
import MarketItem from './MarketItem';

import { useAppSelector } from '../../store/hooks';
import styles from './MarkerList.module.css';

const MarketList = () => {
  const tokenList = useAppSelector((state) => state.global.tokens);

  const listGlobalMarket = tokenList.map((token) => {
    if (token.global) {
      return (
        <MarketItem
          key={Math.random()}
          displayGlobalShortName={
            token.displayGlobalShortName ? token.displayGlobalShortName : ''
          }
          displayGlobalFullName={
            token.displayGlobalFullName ? token.displayGlobalFullName : ''
          }
          price={token.price}
          dailyChange={token.dailyChange}
        />
      );
    } else {
      return [];
    }
  });

  return (
    <div className="info">
      <div className="list">
        <div className={styles['global-list']}>{listGlobalMarket}</div>
      </div>
    </div>
  );
};

export default MarketList;
