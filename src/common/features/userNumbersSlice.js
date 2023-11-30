import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userNumbers: [],
};

export const userNumbersSlice = createSlice({
  name: "yourNumbers",
  initialState,
  reducers: {
    yourUserNums: (state, action) => {
      return { 
        ...state, 
        userNumbers: [
          ...state.userNumbers,
          action.payload
        ]
      }
    },
    resetAllUserNums: (state) => {
      state.userNumbers = initialState.userNumbers;
    }
  },
});

export const { yourUserNums, resetAllUserNums } = userNumbersSlice.actions;

export default userNumbersSlice.reducer;