import { createSlice } from "@reduxjs/toolkit";

const initialGlobalMarketState = {
  globalTokens: [
    {
      tokenName: "BTCUSDT",
      tokenPrice: 0,
    },
    {
      tokenName: "ETHUSDT",
      tokenPrice: 0,
    },
    {
      tokenName: "BNBUSDT",
      tokenPrice: 0,
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
        tokenPrice: Number(action.payload.tokenPrice).toFixed(2),
      };
      state.globalTokens = updatedArray;
    },
  },
});

export const globalActions = globalMarketSlice.actions;

export default globalMarketSlice.reducer;
