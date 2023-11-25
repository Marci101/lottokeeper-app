import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userNumbers: {},
};

export const userNumbersSlice = createSlice({
  name: "yourNumbers",
  initialState,
  reducers: {
    storeUserNums: (state, action) => {
      state.userNumbers = action.payload;
    }
  },
});

export const { storeUserNums } = userNumbersSlice.actions;

export default userNumbersSlice.reducer;