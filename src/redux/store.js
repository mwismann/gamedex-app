import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
