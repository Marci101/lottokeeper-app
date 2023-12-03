import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawnWinningNums: ["", "", "", "", ""],
};

export const winningNumbersSlice = createSlice({
  name: "winningNumbers",
  initialState,
  reducers: {
    theWinningNums: (state, action) => {
      state.drawnWinningNums = action.payload;
    }
  },
});

export const { theWinningNums } = winningNumbersSlice.actions;

export default winningNumbersSlice.reducer;