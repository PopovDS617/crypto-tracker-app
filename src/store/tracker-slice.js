import { createSlice } from "@reduxjs/toolkit";

const initialTrackerState = {
  tokens: [
    {
      tokenName: "TWTUSDT",
      buyPrice: "1.16",
      sellPrice: "",
      price: "0",
      quantity: "125",
      ratioGainLoss: "25",
      status: "sold",
    },
    {
      tokenName: "AVAXUSDT",
      buyPrice: "1.16",
      sellPrice: "",
      price: "0",
      quantity: "125",
      ratioGainLoss: "25",
      status: "sold",
    },
  ],
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState: initialTrackerState,
  reducers: {
    updateTracker(state, action) {
      const updatedArray = [...state.tokens];

      const updatedItemIndex = updatedArray.findIndex(
        (el) => el.tokenName === action.payload.tokenName
      );

      const updatedItem = {
        ...updatedArray[updatedItemIndex],
        price: Number(action.payload.tokenPrice).toFixed(3),
      };

      updatedArray[updatedItemIndex] = updatedItem;

      state.tokens = updatedArray;
    },
  },
});

export const trackerActions = trackerSlice.actions;

export default trackerSlice.reducer;
