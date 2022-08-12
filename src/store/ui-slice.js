import { createSlice } from '@reduxjs/toolkit';

const UiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'dark',
    showModal: false,
  },
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    showModal(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const UiActions = UiSlice.actions;

export default UiSlice.reducer;
