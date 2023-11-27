import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userBalance: 10000,
};

export const userBalanceSlice = createSlice({
  name: "yourBalance",
  initialState,
  reducers: {
    increaseBalance: (state, action) => {
      state.userBalance += action.payload;
    },
    decreaseBalance: (state) => {
      if(state.userBalance >= 500) {
        state.userBalance -= 500; 
      } else {
        state.userBalance;
      }
    },
  },
});

export const { increaseBalance, decreaseBalance } = userBalanceSlice.actions;

export default userBalanceSlice.reducer;