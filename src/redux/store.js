import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import hallOfFameSlice from './hof/temp';
import justReleasedSlice from './just_released/justReleasedSlice';
import popularSlice from './popular/popularSlice';
import upcomingSlice from './upcoming/upcomingSlice';
import gameDetailsSlice from './game_details/gameDetailsSlice';

const rootReducer = combineReducers({
  hallOfFame: hallOfFameSlice,
  justReleased: justReleasedSlice,
  popular: popularSlice,
  upcoming: upcomingSlice,
  game: gameDetailsSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
