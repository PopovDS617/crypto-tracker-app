import { configureStore } from "@reduxjs/toolkit";
import globalMarketReducer from "./global-slice";
import trackerReducer from "./tracker-slice";
import UiReducer from "./ui-slice";

const store = configureStore({
  reducer: {
    global: globalMarketReducer,
    tracker: trackerReducer,
    ui: UiReducer,
  },
});

export default store;
