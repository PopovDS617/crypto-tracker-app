import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetch from "../../hooks/use-fetch";
import styles from "./TrackerList.module.css";
import TrackerListItem from "./TrackerListItem";

const TrackerList = () => {
  const tokenList = useSelector((state) => state.tracker.tokens);
  const appTheme = useSelector((state) => state.ui.theme);
  const { fetchData, isLoading } = useFetch(tokenList, "tracker");

  let currentThemeTable;
  let currentThemeContent;
  if (appTheme === "dark") {
    currentThemeTable = styles.table;
  } else {
    currentThemeTable = styles["table-light"];
  }

  const transformedList = tokenList.map((item) => {
    return (
      <tr key={Math.random().toFixed(8)}>
        <TrackerListItem
          id={Math.random().toFixed(8)}
          key={Math.random().toFixed(8)}
          name={item.tokenName}
          buyPrice={item.buyPrice}
          quantity={item.quantity}
          price={item.price}
          sellprice={item.sellprice}
          ratioGainLoss={item.ratioGainLoss}
          status={item.status}
        />
      </tr>
    );
  });

  useEffect(() => {
    if (!isLoading) {
      fetchData();
      const fetchTimer = setInterval(fetchData, 5000);
      return () => clearTimeout(fetchTimer);
    }
  }, [fetchData]);

  return (
    <React.Fragment>
      <p>{tokenList[0].name}</p>
      <table className={currentThemeTable}>
        <thead>
          <tr>
            <th>token</th>
            <th>quantity of tokens</th>
            <th>buy price</th>
            <th>sell price</th>
            <th>current price</th>
            <th>profit / loss</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>{transformedList}</tbody>
      </table>
    </React.Fragment>
  );
};

export default TrackerList;
