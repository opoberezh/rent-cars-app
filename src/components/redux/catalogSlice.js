import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayedItems: 12,
  isModalOpen: false,
  selectedAdvert: null,
  currentPage: 1,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setDisplayedItems: (state, action) => {
      state.displayedItems = action.payload;
    },

    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },

    setSelectedAdvert: (state, action) => {
      state.selectedAdvert = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setDisplayedItems,
  setIsModalOpen,
  setSelectedAdvert,
  setCurrentPage,
} = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
