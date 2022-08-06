import { createSlice } from "@reduxjs/toolkit";

const initialTrackerState = {
  list: [
    {
      tokenName: "TWT",
      tokenBuyPrice: "1.16",
      tokenSellPrice: "",
      tokenCurrentPrice: "3.32",
      tokenAmount: "125",
      tokenGainLoss:
        Number(tokenCurrentPrice) * Number(tokenAmount) -
        Number(tokenBuyPrice) * Number(tokenAmount),
    },
  ],
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState: initialTrackerState,
  reducers: {},
});

export const trackerActions = trackerSlice.actions;

export default trackerSlice.reducer;
