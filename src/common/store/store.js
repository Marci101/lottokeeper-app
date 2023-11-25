import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modalSlice';
import userNameReducer from '../features/userNameSlice';
import userNumbersReducer from '../features/userNumbersSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    yourName: userNameReducer,
    yourNumbers: userNumbersReducer,
  }
});