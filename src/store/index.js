import { configureStore } from "@reduxjs/toolkit";
import globalMarketReducer from "./global-slice";
import trackerReducer from "./tracker-slice";

const store = configureStore({
  reducer: { global: globalMarketReducer, tracker: trackerReducer },
});

export default store;
