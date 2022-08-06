import React, { useCallback, useEffect } from "react";
import GlobalMarketItem from "./GlobalMarketItem";
import { useSelector } from "react-redux/es/exports";

import styles from "./GlobalMarkerList.module.css";
import useFetch from "../../hooks/use-fetch";

const GlobalMarketList = () => {
  const loadedGlobalPrice = useSelector((state) => state.global.globalTokens);

  const { fetchData, isLoading } = useFetch();
  // const { fetchData: fetchDataBTC } = useFetch(
  //   "https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
  // );
  // const { fetchData: fetchDataETH } = useFetch(
  //   "https://www.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
  // );
  // const { fetchData: fetchDataBNB } = useFetch(
  //   "https://www.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
  // );

  useEffect(() => {
    if (!isLoading) {
      const fetchTimer = setInterval(fetchData, 5000);
      return () => clearTimeout(fetchTimer);
    }
  }, [fetchData]);

  // useEffect(() => {
  //   const globalFetch = () => {
  //     fetchDataBTC();
  //     fetchDataETH();
  //     fetchDataBNB();
  //   };
  //   const fetchTimer = setInterval(globalFetch, 2500);
  //   return () => clearTimeout(fetchTimer);
  // });

  const listGlobalMarket = loadedGlobalPrice.map((token) => {
    return (
      <GlobalMarketItem
        key={Math.random()}
        tokenName={token.tokenName}
        tokenCurrentPrice={token.tokenPrice}
      />
    );
  });

  return (
    <React.Fragment>
      <div className={styles["global-list"]}>{listGlobalMarket}</div>
    </React.Fragment>
  );
};

export default GlobalMarketList;
