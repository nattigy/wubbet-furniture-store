import SearchTypes from "./search.types";

const searchReducers = (state = {}, action) => {
    switch (action.type) {
        case SearchTypes.NEW_PRODUCT_SEARCH_REQUEST:
            return {
                ...state,
                isSearchingNewProducts: true,
                isSearchingNewProductsDone: false,
                isSearchingNewProductsError: false
            };
        case SearchTypes.NEW_PRODUCT_SEARCH_SUCCESS:
            return {
                ...state,
                isSearchingNewProducts: false,
                isSearchingNewProductsDone: true,
                isSearchingNewProductsError: false,
                newProducts: action.items
            };
        case SearchTypes.NEW_PRODUCT_SEARCH_ERROR:
            return {
                ...state,
                isSearchingNewProducts: false,
                isSearchingNewProductsDone: false,
                isSearchingNewProductsError: true,
                errorMessage: action.errorMessage
            };
        case SearchTypes.SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isSearching: true,
                isSearchingDone: false,
                isSearchError: false,
            };
        case SearchTypes.SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                isSearching: false,
                isSearchingDone: true,
                isSearchError: false,
                searchItems: action.searchItems
            };
        case SearchTypes.SEARCH_ITEM_ERROR:
            return {
                ...state,
                isSearching: false,
                isSearchingDone: false,
                isSearchError: true,
            };
        default:
            return state;
    }
};

export default searchReducers;