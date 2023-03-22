/* import {  
  compose, 
  applyMiddleware,
  combineReducers 
} from 'redux'; */

import { configureStore } from '@reduxjs/toolkit';

// import createSagaMiddleware from 'redux-saga';

// import rootSaga from './root-saga';
import { carsSlice } from './cars';

// Enable redux devtools in development mode
/* let composeEnhancers = compose;
const sagaConfig = {};

// Configure middleware
// const sagaMiddleware = createSagaMiddleware(sagaConfig);
//const allMiddleware = applyMiddleware(sagaMiddleware, sagaMiddleware);
// const rootEnhancer = composeEnhancers(allMiddleware);*/

// Configure store
export const store = configureStore({
  reducer: {
    cars: carsSlice.reducer
  }
});

// Sagas must be started after other
// dependencies have been initialized
// by explicitly calling this from the 
// code after initialization.
/* export const startSagas = () => {
  sagaMiddleware.run(rootSaga);
}; */
