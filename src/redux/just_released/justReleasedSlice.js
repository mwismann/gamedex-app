import { createSlice } from '@reduxjs/toolkit';
import getJustReleased from './actions';

const initialState = {
  justReleased: [],
  loading: false,
  error: null,
};

const justReleasedSlice = createSlice({
  name: 'justReleased',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJustReleased.pending, (state) => {
        state.loading = true;
      })
      .addCase(getJustReleased.fulfilled, (state, action) => {
        state.loading = false;
        state.justReleased = action.payload;
      })
      .addCase(getJustReleased.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default justReleasedSlice.reducer;
