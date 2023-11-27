import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userBalance: 10000,
};

export const userBalanceSlice = createSlice({
  name: "yourBalance",
  initialState,
  reducers: {
    increaseByAmount: (state, action) => {
      state.userBalance += action.payload;
    },
    decrease: (state) => {
      state.userBalance -= 500;
    },
  },
});

export const { increaseByAmount, decrease } = userBalanceSlice.actions;

export default userBalanceSlice.reducer;