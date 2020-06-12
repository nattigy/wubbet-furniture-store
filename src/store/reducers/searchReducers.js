import {
    NEW_PRODUCT_SEARCH_ERROR,
    NEW_PRODUCT_SEARCH_REQUEST,
    NEW_PRODUCT_SEARCH_SUCCESS,
    SEARCH_ITEM_ERROR,
    SEARCH_ITEM_REQUEST,
    SEARCH_ITEM_SUCCESS,
} from "./../actions/searchActions";

export default (state = {}, action) => {
    switch (action.type) {
        case NEW_PRODUCT_SEARCH_REQUEST:
            return {
                ...state,
                isSearchingNewProducts: true,
                isSearchingNewProductsError: false
            };
        case NEW_PRODUCT_SEARCH_SUCCESS:
            return {
                ...state,
                isSearchingNewProducts: false,
                isSearchingNewProductsError: false,
                newProducts: action.items
            };
        case NEW_PRODUCT_SEARCH_ERROR:
            return {
                ...state,
                isSearchingNewProducts: false,
                isSearchingNewProductsError: true,
                errorMessage: action.errorMessage
            };
        case SEARCH_ITEM_REQUEST:
            return {
                ...state,
                isSearching: true,
                isSearchError: false,
            };
        case SEARCH_ITEM_SUCCESS:
            return {
                ...state,
                isSearching: false,
                isSearchError: false,
                searchItems: action.searchItems
            };
        case SEARCH_ITEM_ERROR:
            return {
                ...state,
                isSearching: false,
                isSearchError: true,
            };
        default:
            return state;
    }
};