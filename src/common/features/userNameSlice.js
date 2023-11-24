import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { enterUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
