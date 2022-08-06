import React, { useCallback, useState } from "react";
import { globalActions } from "../store/global-slice";
import { trackerActions } from "../store/tracker-slice";
import { useDispatch, useSelector } from "react-redux";

const useFetch = (source, module) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  //experimental
  //const dataArray = useSelector((state) => state.global.globalTokens);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    for (let i = 0; i < source.length; i++) {
      const response = await fetch(
        `https://www.binance.com/api/v3/ticker/price?symbol=${source[i].tokenName}`
      );
      const data = await response.json();

      // для фетча глабольных токенов
      if (module === "global") {
        dispatch(
          globalActions.updateGlobal({
            tokenName: data.symbol,
            price: data.price,
          })
        );
      }
      // для фетча трекера
      if (module === "tracker") {
        dispatch(
          trackerActions.updateTracker({
            tokenName: data.symbol,
            tokenPrice: data.price,
          })
        );
      }

      // для фетча избранных токенов
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
