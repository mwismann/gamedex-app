import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import hallOfFameSlice from './hof/temp';

const store = configureStore({
  reducer: {
    hallOfFame: hallOfFameSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
