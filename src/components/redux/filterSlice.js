import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selectedMake: null,
    selectedPrice: null,
    selectedPriceLabel: null,
    minValue: '',
    maxValue: '',
  },
  reducers: {
    advertsFilter(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setMake(state, action) {
      state.formData.selectedMake = action.payload;
    },
    setPrice(state, action) {
      state.formData.selectedPrice = action.payload;
      state.formData.selectedPriceLabel = action.payload
        ? `${action.payload}`
        : null;
    },
    setFromMileage(state, action) {
      state.formData.minValue = action.payload;
    },
    setToMileage(state, action) {
      state.formData.maxValue = action.payload;
    },
  },
});

export const {
  advertsFilter,
  setMake,
  setPrice,
  setFromMileage,
  setToMileage,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
