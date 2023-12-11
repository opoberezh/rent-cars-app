

export const selectAdverts = state => state.adverts.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectCatalog = state => state.catalog;

export const selectCurrentPage = state => state.catalog.currentPage;

export const selectFilter = state => state.filter;

export const selectFavorites = state => state.favorites.favorites;