import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userBalance: 1000,
  enoughBalance: true,
  propagate: true,
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
        state.enoughBalance = true;
      } else {
        state.userBalance;
      }
      state.propagate = true;
    },
    enoughBalance: (state, action) => {
      state.enoughBalance = action.payload;
    },
    doNotPropagateTooLowBalance: (state, action) => {
      state.propagate = action.payload;
    },
  },
});

export const { increaseBalance, decreaseBalance, enoughBalance, doNotPropagateTooLowBalance } = userBalanceSlice.actions;

export default userBalanceSlice.reducer;