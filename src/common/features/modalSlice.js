import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  message: '',
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
    },
  },
});

export const { showModal } = modalSlice.actions;

export default modalSlice.reducer;
