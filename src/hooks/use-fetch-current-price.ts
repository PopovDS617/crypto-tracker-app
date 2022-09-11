import { useCallback, useState } from 'react';
import { globalActions } from '../store/global-slice';
import { tokens } from '../data/data';
import { urlConverter } from '../utils/converters';
import { UiActions } from '../store/ui-slice';
import { useDispatch } from 'react-redux';

const useFetchCurrentPrice = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const currentPriceUrl = urlConverter(tokens, 'price');

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const currentDataResponse = await fetch(currentPriceUrl);

      const currentPrice = await currentDataResponse.json();
      dispatch(globalActions.updateCurrentPrice(currentPrice));
      dispatch(UiActions.setError(false));
    } catch (error) {
      console.log(error);
      dispatch(UiActions.setError(true));
    }

    setIsLoading(false);
  }, [currentPriceUrl, dispatch]);

  return { isLoading, fetchData };
};

export default useFetchCurrentPrice;
