import React, { useCallback, useEffect } from "react";
import GlobalMarketItem from "./GlobalMarketItem";
import { useSelector } from "react-redux/es/exports";

import styles from "./GlobalMarkerList.module.css";
import useFetch from "../../hooks/use-fetch";

const GlobalMarketList = () => {
  const loadedGlobalPrice = useSelector((state) => state.global.globalTokens);

  const { fetchData, isLoading } = useFetch(loadedGlobalPrice, "global");

  useEffect(() => {
    if (!isLoading) {
      fetchData();
      const fetchTimer = setInterval(fetchData, 5000);
      return () => clearTimeout(fetchTimer);
    }
  }, [fetchData]);

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
