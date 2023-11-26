import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userNumbers: [],
};

export const userNumbersSlice = createSlice({
  name: "yourNumbers",
  initialState,
  reducers: {
    yourUserNums: (state, action) => {
      const newState = [...state.userNumbers, action.payload];
      state.userNumbers = newState;
    }
  },
});

export const { yourUserNums } = userNumbersSlice.actions;

export default userNumbersSlice.reducer;