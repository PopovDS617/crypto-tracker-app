import { configureStore } from '@reduxjs/toolkit';
import globalMarketReducer from './global-slice';

import UiReducer from './ui-slice';

const store = configureStore({
  reducer: {
    global: globalMarketReducer,

    ui: UiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
