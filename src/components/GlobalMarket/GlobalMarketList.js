import React, { useCallback, useEffect } from "react";
import GlobalMarketItem from "./GlobalMarketItem";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { globalActions } from "../../store/global-slice";
import styles from "./GlobalMarkerList.module.css";

const GlobalMarketList = () => {
  const loadedGlobalPrice = useSelector((state) => state.global.globalTokens);
  const dispatch = useDispatch();

  const getPriceBTC = useCallback(async () => {
    const response = await fetch(
      "https://www.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
    );
    const data = await response.json();

    dispatch(
      globalActions.updateGlobalBTC({
        tokenName: data.symbol,
        tokenPrice: data.price,
      })
    );
  }, []);

  const getPriceETH = useCallback(async () => {
    const response = await fetch(
      "https://www.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
    );
    const data = await response.json();

    dispatch(
      globalActions.updateGlobalETH({
        tokenName: data.symbol,
        tokenPrice: data.price,
      })
    );
  }, []);
  const getPriceBNB = useCallback(async () => {
    const response = await fetch(
      "https://www.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
    );
    const data = await response.json();

    dispatch(
      globalActions.updateGlobalBNB({
        tokenName: data.symbol,
        tokenPrice: data.price,
      })
    );
  }, []);

  useEffect(() => {
    const globalFetch = () => {
      getPriceBTC();
      getPriceETH();
      getPriceBNB();
    };
    const fetchTimer = setInterval(globalFetch, 2500);
    return () => clearTimeout(fetchTimer);
  });

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
