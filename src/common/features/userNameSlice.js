import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: "",
};

export const userNameSlice = createSlice({
  name: "yourName",
  initialState,
  reducers: {
    enterUserName: (state, action) => {
      state.userName = action.payload;
    },
    resetUserName: (state) => {
      state.userName = initialState.userName;
    }
  },
});

export const { enterUserName, resetUserName } = userNameSlice.actions;

export default userNameSlice.reducer;