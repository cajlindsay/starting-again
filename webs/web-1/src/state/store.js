import { configureStore } from '@reduxjs/toolkit';
import { carsSlice, fetchCars } from './cars';
import { peopleSlice } from './people';

// Configure store
export const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
    [peopleSlice.reducerPath]: peopleSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleSlice.middleware)
});

store.dispatch(fetchCars());
