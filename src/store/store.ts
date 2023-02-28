import { configureStore } from '@reduxjs/toolkit';
import trackerReducer from './slices/tracker-slice';
import UiReducer from './slices/ui-slice';

const store = configureStore({
  reducer: {
    global: trackerReducer,
    ui: UiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
