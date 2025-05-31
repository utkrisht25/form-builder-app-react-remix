import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice'; // Import the form slice reducer

export const store = configureStore({
  reducer: {
    form: formReducer, // Assign the form reducer to the 'form' key in the store
  },
  // You can add middleware here if needed (e.g., redux-thunk, redux-logger)
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myLogger),
});