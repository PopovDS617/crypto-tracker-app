import React, { useCallback, useState } from "react";
import { globalActions } from "../store/global-slice";
import { useDispatch, useSelector } from "react-redux";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  //experimental
  const loadedGlobalPrice = useSelector((state) => state.global.globalTokens);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    for (let i = 0; i < loadedGlobalPrice.length; i++) {
      const response = await fetch(
        `https://www.binance.com/api/v3/ticker/price?symbol=${loadedGlobalPrice[i].tokenName}`
      );

      const data = await response.json();

      dispatch(
        globalActions.updateGlobal({
          tokenName: data.symbol,
          tokenPrice: data.price,
        })
      );
    }
    setIsLoading(false);
  }, []);

  return { isLoading, fetchData };
};

export default useFetch;

// const response = await fetch(url);

// const data = await response.json();

// dispatch(
//   globalActions.updateGlobal({
//     tokenName: data.symbol,
//     tokenPrice: data.price,
//   })
// );
// }, []);

// return { fetchData };
// };

// export default useFetch;
