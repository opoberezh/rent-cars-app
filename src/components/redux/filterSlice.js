import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selectedMake: null,
    selectedPrice: null,
   minValue: '',
    maxValue: '',
  },
  reducers: {
    setMake: (state, action) => {
      state.selectedMake = action.payload;
    },
    setPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
    setFromMileage: (state, action) => {
      state.minValue = action.payload;
    },
    setToMileage: (state, action) => {
      state.maxValue = action.payload;
    },
   
  },
});

export const {
  setMake,
  setPrice,
  setFromMileage,
  setToMileage,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;