import React from 'react';
import GlobalMarketItem from './GlobalMarketItem';
import { useSelector } from 'react-redux/es/exports';

import styles from './GlobalMarkerList.module.css';

const GlobalMarketList = () => {
  const tokenList = useSelector((state) => state.global.tokens);

  const listGlobalMarket = tokenList.map((token) => {
    if (token.global) {
      return (
        <GlobalMarketItem
          key={Math.random()}
          tokenGlobalShortName={token.displayGlobalShortName}
          tokenGlobalFullName={token.displayGlobalFullName}
          tokenCurrentPrice={token.price}
          dailyChange={token.dailyChange}
        />
      );
    } else {
      return [];
    }
  });

  return (
    <React.Fragment>
      <div className={styles['global-list']}>{listGlobalMarket}</div>
    </React.Fragment>
  );
};

export default GlobalMarketList;
