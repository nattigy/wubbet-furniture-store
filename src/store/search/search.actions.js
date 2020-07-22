import SearchTypes from "./search.types";

export const newProductSearchRequest = () => {
    return {
        type: SearchTypes.NEW_PRODUCT_SEARCH_REQUEST,
    };
};

export const newProductSearchSuccess = items => {
    return {
        type: SearchTypes.NEW_PRODUCT_SEARCH_SUCCESS,
        items
    };
};

export const newProductSearchError = errorMessage => {
    return {
        type: SearchTypes.NEW_PRODUCT_SEARCH_ERROR,
        errorMessage
    };
};

export const searchItemRequest = () => {
    return {
        type: SearchTypes.SEARCH_ITEM_REQUEST
    };
};

export const searchItemSuccess = searchItems => {
    return {
        type: SearchTypes.SEARCH_ITEM_SUCCESS,
        searchItems
    };
};

export const searchItemError = error => {
    return {
        type: SearchTypes.SEARCH_ITEM_ERROR,
        error
    };
};
