import { createSlice } from '@reduxjs/toolkit';
import { initialTrackerState } from '../../utils/initial-state';

const trackerSlice = createSlice({
  name: 'tracker',
  initialState: initialTrackerState,
  reducers: {
    updateCurrentPrice(state, action) {
      const updatedArray = [...state.tokens];

      for (let i = 0; i < updatedArray.length; i++) {
        for (let x = 0; x < updatedArray.length; x++) {
          if (updatedArray[i].tokenName === action.payload[x].symbol) {
            updatedArray[i] = {
              ...updatedArray[i],
              price: +action.payload[x].price,
            };
          }
        }
      }
      state.tokens = updatedArray;
    },
    updateDailyChange(state, action) {
      const updatedArray = [...state.tokens];

      for (let i = 0; i < updatedArray.length; i++) {
        for (let x = 0; x < updatedArray.length; x++) {
          if (updatedArray[i].tokenName === action.payload[x].symbol) {
            updatedArray[i] = {
              ...updatedArray[i],
              dailyChange: +action.payload[x].priceChange,
            };
          }
        }
      }
      state.tokens = updatedArray;
    },

    addLog(state, action) {
      const updatedArray = [...state.logs];
      const newLog = {
        id: Math.random().toFixed(8),
        tokenName: action.payload.tokenName,
        buyPrice: action.payload.buyPrice,
        sellPrice: null,
        price: null,
        quantity: action.payload.quantity,
        ratioGainLoss: 0,
        status: 'active',
      };
      updatedArray.push(newLog);

      state.logs = updatedArray;
    },

    deleteLog(state, action) {
      const logArray = [...state.logs];

      const filteredArray = logArray.filter(
        (item) => item.id !== action.payload.id
      );

      state.logs = filteredArray;
    },
    sellLog(state, action) {
      const logArray = [...state.logs];
      const itemIndex = logArray.findIndex((el) => el.id === action.payload.id);
      let updatedItem = logArray[itemIndex];
      updatedItem = {
        ...logArray[itemIndex],
        sellPrice: action.payload.sellPrice,
        status: 'sold',
        ratioGainLoss:
          logArray[itemIndex].quantity * +action.payload.sellPrice -
          logArray[itemIndex].quantity * logArray[itemIndex].buyPrice,
      };

      logArray[itemIndex] = updatedItem;

      state.logs = logArray;
    },
    changeLog(state, action) {
      const logArray = [...state.logs];
      const itemIndex = logArray.findIndex((el) => el.id === action.payload.id);
      let updatedItem = logArray[itemIndex];
      updatedItem = {
        ...logArray[itemIndex],
        buyPrice: +action.payload.buyPrice,
        sellPrice:
          +action.payload.sellPrice === 0 ? null : +action.payload.sellPrice,
        quantity: +action.payload.quantity,
        ratioGainLoss:
          (action.payload.sellPrice - logArray[itemIndex].buyPrice) *
          logArray[itemIndex].quantity,
        status: action.payload.status,
      };
      logArray[itemIndex] = updatedItem;
      state.logs = logArray;
      console.log(logArray);
    },
  },
});

export const globalActions = trackerSlice.actions;

export default trackerSlice.reducer;
