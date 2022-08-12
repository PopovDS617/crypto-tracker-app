import React, { useCallback, useEffect } from 'react';
import GlobalMarketItem from './GlobalMarketItem';
import { useSelector } from 'react-redux/es/exports';

import styles from './GlobalMarkerList.module.css';
import useFetch from '../../hooks/use-fetch';

const GlobalMarketList = () => {
  const loadedGlobalPrice = useSelector((state) => state.global.tokens);

  const listGlobalMarket = loadedGlobalPrice.map((token) => {
    if (token.global) {
      return (
        <GlobalMarketItem
          key={Math.random()}
          tokenGlobalName={token.displayGlobalName}
          tokenCurrentPrice={token.price}
        />
      );
    }
  });

  return (
    <React.Fragment>
      <div className={styles['global-list']}>{listGlobalMarket}</div>
    </React.Fragment>
  );
};

export default GlobalMarketList;
