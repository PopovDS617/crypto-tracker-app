import { configureStore } from "@reduxjs/toolkit";
import globalMarketReducer from "./global-slice";

const store = configureStore({
  reducer: { global: globalMarketReducer },
});

export default store;
