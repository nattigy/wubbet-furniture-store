import SearchTypes from "./search.types";

const searchReducers = (state = {searchItems: []}, action) => {
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
        case SearchTypes.SEARCH_ALL_CAT_REQUEST:
            return {
                ...state,
                isSearchingAllCat: true,
                isSearchingAllCatDone: false,
                isSearchError: false,
            };
        case SearchTypes.SEARCH_ALL_CAT_SUCCESS:
            return {
                ...state,
                isSearchingAllCat: false,
                isSearchingAllCatDone: true,
                isSearchError: false,
                allCategories: action.searchItems
            };
        case SearchTypes.SEARCH_ALL_CAT_ERROR:
            return {
                ...state,
                isSearchingAllCat: false,
                isSearchingAllCatDone: false,
                isSearchError: true,
            };
        case SearchTypes.SEARCH_CAT_REQUEST:
            return {
                ...state,
                isSearchingCat: true,
                isSearchingCatDone: false,
                isSearchError: false,
            };
        case SearchTypes.SEARCH_CAT_SUCCESS:
            return {
                ...state,
                isSearchingCat: false,
                isSearchingCatDone: true,
                isSearchError: false,
                category: action.searchItems
            };
        case SearchTypes.SEARCH_CAT_ERROR:
            return {
                ...state,
                isSearchingCat: false,
                isSearchingCatDone: false,
                isSearchError: true,
            };
        default:
            return state;
    }
};

export default searchReducers;