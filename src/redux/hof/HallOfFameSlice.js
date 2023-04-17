import { createSlice } from "@reduxjs/toolkit";
import getHallOfFame from "./actions";

const initialState = {
  hallOfFame: [],
  loading: false,
  error: null,
};

const hallOfFameSlice = createSlice({
  name: "hallOfFame",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHallOfFame.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHallOfFame.fulfilled, (state, action) => {
        state.loading = false;
        state.hallOfFame = action.payload;
      })
      .addCase(getHallOfFame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default hallOfFameSlice.reducer;
