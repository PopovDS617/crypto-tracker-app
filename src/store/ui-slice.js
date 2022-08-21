import { createSlice } from '@reduxjs/toolkit';

const UiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'dark',
    showAddModal: false,
    showSellModal: false,
    showEditModal: false,
  },
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    showAddModal(state) {
      state.showAddModal = !state.showAddModal;
      state.showSellModal = false;
      state.showEditModal = false;
    },
    showSellModal(state) {
      state.showSellModal = !state.showSellModal;
      state.showAddModal = false;
      state.showEditModal = false;
    },
    showEditModal(state) {
      state.showEditModal = !state.showEditModal;
      state.showAddModal = false;
      state.showSellModal = false;
    },

    hideAllModals(state) {
      state.showSellModal = false;
      state.showAddModal = false;
      state.showEditModal = false;
    },
  },
});

export const UiActions = UiSlice.actions;

export default UiSlice.reducer;
