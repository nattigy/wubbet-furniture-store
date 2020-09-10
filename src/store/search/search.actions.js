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

export const searchAllCatRequest = () => {
    return {
        type: SearchTypes.SEARCH_ALL_CAT_REQUEST
    };
};

export const searchAllCatSuccess = searchItems => {
    return {
        type: SearchTypes.SEARCH_ALL_CAT_SUCCESS,
        searchItems
    };
};

export const searchAllCatError = error => {
    return {
        type: SearchTypes.SEARCH_ALL_CAT_ERROR,
        error
    };
};

export const searchCatRequest = () => {
    return {
        type: SearchTypes.SEARCH_CAT_REQUEST
    };
};

export const searchCatSuccess = searchItems => {
    console.log(searchItems);
    return {
        type: SearchTypes.SEARCH_CAT_SUCCESS,
        searchItems
    };
};

export const searchCatError = error => {
    return {
        type: SearchTypes.SEARCH_CAT_ERROR,
        error
    };
};
