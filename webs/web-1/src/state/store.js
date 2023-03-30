import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core'

import { carsSlice, fetchCars } from './cars';
import { peopleSlice } from './people';
import { reducer as devices } from './devices';

import rootSaga from './_root-saga';

const sagaMiddleware = createSagaMiddleware();

// Configure store
export const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
    devices,
    [peopleSlice.reducerPath]: peopleSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(peopleSlice.middleware)
    .concat(sagaMiddleware)
});

store.dispatch(fetchCars());
sagaMiddleware.run(rootSaga);
