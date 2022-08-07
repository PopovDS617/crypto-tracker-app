import React, { useCallback, useState } from "react";
import { globalActions } from "../store/global-slice";

import { useDispatch, useSelector } from "react-redux";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const tokenData = useSelector((state) => state.global.tokens);

  const urlConverter = () => {
    const urlList = tokenData.map((token) => token.tokenName);
    const url = urlList.join('","');

    return `https://www.binance.com/api/v3/ticker/price?symbols=["${url}"]`;
  };
  const finalUrl = urlConverter();

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch(finalUrl);
    const data = await response.json();

    dispatch(globalActions.updatePrice(data));

    setIsLoading(false);
  }, []);

  return { isLoading, fetchData };
};

export default useFetch;
