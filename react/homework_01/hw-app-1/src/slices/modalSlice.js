import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFirstModalOpen: false,
  isSecondModalOpen: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isFirstModalOpen: false,
    isSecondModalOpen: false,
  },
  reducers: {
    openFirstModal: (state) => {
      state.isFirstModalOpen = true;
    },
    closeFirstModal: (state) => {
      state.isFirstModalOpen = false;
    },
    openSecondModal: (state) => {
      state.isSecondModalOpen = true;
    },
    closeSecondModal: (state) => {
      state.isSecondModalOpen = false;
    }
  }
});

export const {
  openFirstModal,
  closeFirstModal,
  openSecondModal,
  closeSecondModal
} = modalSlice.actions;

export default modalSlice.reducer;