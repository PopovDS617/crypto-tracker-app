import { createSlice } from "@reduxjs/toolkit";

const iniailGlobalMarketState = {
  globalTokens: [
    {
      tokenName: "BTC / USDT",
      tokenPrice: 0,
    },
    {
      tokenName: "ETC / USDT",
      tokenPrice: 0,
    },
    {
      tokenName: "BNB / USDT",
      tokenPrice: 0,
    },
  ],
};

const globalMarketSlice = createSlice({
  name: "global",
  initialState: iniailGlobalMarketState,
  reducers: {
    updateGlobalBTC(state, action) {
      const updatedArray = [...state.globalTokens];
      updatedArray[0] = {
        tokenName: action.payload.tokenName,
        tokenPrice: Number(action.payload.tokenPrice).toFixed(2),
      };
      state.globalTokens = updatedArray;
    },
    updateGlobalETH(state, action) {
      const updatedArray = [...state.globalTokens];
      updatedArray[1] = {
        tokenName: action.payload.tokenName,
        tokenPrice: Number(action.payload.tokenPrice).toFixed(2),
      };
      state.globalTokens = updatedArray;
    },
    updateGlobalBNB(state, action) {
      const updatedArray = [...state.globalTokens];
      updatedArray[2] = {
        tokenName: action.payload.tokenName,
        tokenPrice: Number(action.payload.tokenPrice).toFixed(2),
      };
      state.globalTokens = updatedArray;
    },
  },
});

export const globalActions = globalMarketSlice.actions;

export default globalMarketSlice.reducer;
