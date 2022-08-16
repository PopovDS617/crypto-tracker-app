import { createSlice } from '@reduxjs/toolkit';

const UiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'dark',
    showAddModal: false,
    showSellModal: false,
  },
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    showAddModal(state) {
      state.showAddModal = !state.showAddModal;
      state.showSellModal = false;
    },
    showSellModal(state) {
      state.showSellModal = !state.showSellModal;
      state.showAddModal = false;
    },
    hideAllModals(state) {
      state.showSellModal = false;
      state.showAddModal = false;
    },
  },
});

export const UiActions = UiSlice.actions;

export default UiSlice.reducer;
