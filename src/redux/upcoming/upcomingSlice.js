import { createSlice } from '@reduxjs/toolkit';
import getUpcoming from './actions';

const initialState = {
  upcoming: [],
  loading: false,
  error: null,
};

const upcomingSlice = createSlice({
  name: 'upcoming',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUpcoming.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUpcoming.fulfilled, (state, action) => {
        state.loading = false;
        state.upcoming = action.payload;
      })
      .addCase(getUpcoming.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default upcomingSlice.reducer;
