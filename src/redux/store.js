import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import hallOfFameSlice from './hof/hallOfFameSlice';
import justReleasedSlice from './just_released/justReleasedSlice';

const rootReducer = combineReducers({
  hallOfFame: hallOfFameSlice,
  justReleased: justReleasedSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
