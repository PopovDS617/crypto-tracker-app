import React, { useCallback, useState } from 'react';
import { globalActions } from '../store/global-slice';

import { useDispatch, useSelector } from 'react-redux';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const tokenData = useSelector((state) => state.global.tokens);

  const urlConverter = (infoType) => {
    const urlList = tokenData.map((token) => token.tokenName);
    const url = urlList.join('","');

    return `https://www.binance.com/api/v3/ticker/${infoType}?symbols=["${url}"]`;
  };
  const currentPriceUrl = urlConverter('price');
  const dailyPriceUrl = urlConverter('24hr');

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    const currentDataResponse = await fetch(currentPriceUrl);
    const currentPrice = await currentDataResponse.json();
    const dailyDataResponse = await fetch(dailyPriceUrl);
    const dailyPrice = await dailyDataResponse.json();

    dispatch(globalActions.updatePrice({ currentPrice, dailyPrice }));

    setIsLoading(false);
  }, []);

  return { isLoading, fetchData };
};

export default useFetch;
