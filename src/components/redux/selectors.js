

export const selectAdverts = state => state.adverts.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFavoriteCards = state => state.favorites.favorites;

export const selectDisplayedItems = state => state.catalog.displayedItems;

export const selectIsModalOpen = state => state.catalog.isModalOpen;

export const selectSelectedAdvert = state => state.catalog.selectedAdvert;