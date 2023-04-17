import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import hallOfFameSlice from './hof/hallOfFameSlice';

const rootReducer = combineReducers({
  hallOfFame: hallOfFameSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
