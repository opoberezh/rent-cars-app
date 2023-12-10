import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    displayedItems: 12,
    isModalOpen: false,
    selectedAdvert: null,
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
    }
})

export const { setDisplayedItems, setIsModalOpen, setSelectedAdvert } = catalogSlice.actions;

export default catalogSlice.reducer;