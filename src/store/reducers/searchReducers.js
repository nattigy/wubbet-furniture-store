import {
    NEW_PRODUCT_SEARCH_ERROR,
    NEW_PRODUCT_SEARCH_REQUEST,
    NEW_PRODUCT_SEARCH_SUCCESS,
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
        default:
            return state;
    }
};