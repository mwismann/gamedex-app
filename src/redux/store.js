import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import hallOfFameSlice from './hof/hallOfFameSlice';

const store = configureStore({
  reducer: {
    hallOfFame: hallOfFameSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
