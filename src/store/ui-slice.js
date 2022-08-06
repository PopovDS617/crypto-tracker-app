import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "dark",
  },
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const UiActions = UiSlice.actions;

export default UiSlice.reducer;
