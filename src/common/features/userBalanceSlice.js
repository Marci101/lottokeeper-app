import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userBalance: (JSON.parse(localStorage.getItem("balanceOfUser") ?? 10000)),
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
        localStorage.setItem('balanceOfUser', JSON.stringify(state.userBalance));
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
    resetBalance: (state) => {
      state.userBalance = 10000;
    },
  },
});

export const { increaseBalance, decreaseBalance, enoughBalance, doNotPropagateTooLowBalance, resetBalance } = userBalanceSlice.actions;

export default userBalanceSlice.reducer;