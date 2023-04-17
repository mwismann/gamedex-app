import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import hallOfFameReducer from './hof/hallOfFameSlice.js';

const rootReducer = combineReducers({
  hallOfFame: hallOfFameReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
