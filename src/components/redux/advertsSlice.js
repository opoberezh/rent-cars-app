import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchFilteredAdverts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items.push(...action.payload);
  state.error = null;
  state.isFilter = false;
};

const handleFilteredFulfilled = (state, action) => {
  state.isLoading = false;

  state.items = action.payload;

  state.error = null;
  state.isFilter = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isFilter: false,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchFilteredAdverts.pending, handlePending)
      .addCase(fetchFilteredAdverts.fulfilled, handleFilteredFulfilled)
      .addCase(fetchFilteredAdverts.rejected, handleRejected),
});

export const advertsReducer = advertsSlice.reducer;
