import { createSlice } from '@reduxjs/toolkit';
import getGame from './actions';

const initialState = {
  game: {},
  loading: false,
  error: null,
};

const gameDetailsSlice = createSlice({
  name: 'gameDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGame.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGame.fulfilled, (state, action) => {
        state.loading = false;
        state.game = action.payload;
      })
      .addCase(getGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default gameDetailsSlice.reducer;
