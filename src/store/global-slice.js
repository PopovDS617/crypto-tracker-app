import { createSlice } from "@reduxjs/toolkit";

const initialGlobalMarketState = {
  globalTokens: [
    {
      tokenName: "BTCUSDT",
      price: 0,
    },
    {
      tokenName: "ETHUSDT",
      price: 0,
    },
    {
      tokenName: "BNBUSDT",
      price: 0,
    },
  ],
};

const globalMarketSlice = createSlice({
  name: "global",
  initialState: initialGlobalMarketState,
  reducers: {
    updateGlobal(state, action) {
      const updatedArray = [...state.globalTokens];
      const updatedItemIndex = updatedArray.findIndex(
        (el) => el.tokenName === action.payload.tokenName
      );

      updatedArray[updatedItemIndex] = {
        tokenName: action.payload.tokenName,
        tokenPrice: Number(action.payload.price).toFixed(0),
      };
      state.globalTokens = updatedArray;
    },
  },
});

export const globalActions = globalMarketSlice.actions;

export default globalMarketSlice.reducer;
