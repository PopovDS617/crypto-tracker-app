import { useCallback, useState } from 'react';
import { globalActions } from '../store/global-slice';
import { tokens } from '../data';
import { urlConverter } from '../utils/converters';

import { useDispatch } from 'react-redux';

const useFetchCurrentPrice = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const dailyChangeUrl = urlConverter(tokens, '24hr');

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    const dailyDataResponse = await fetch(dailyChangeUrl);

    const dailyChange = await dailyDataResponse.json();

    dispatch(globalActions.updateDailyChange(dailyChange));

    setIsLoading(false);
  }, [dailyChangeUrl, dispatch]);

  return { isLoading, fetchData };
};

export default useFetchCurrentPrice;
