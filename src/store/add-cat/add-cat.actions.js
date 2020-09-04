import AddCatTypes from "./add-cat.types";

export const addCatRequest = () => {
    return {
        type: AddCatTypes.ADD_CATEGORY_REQUEST,
    };
};

export const addCatSuccess = items => {
    return {
        type: AddCatTypes.ADD_CATEGORY_SUCCESS,
        items
    };
};

export const addCatError = errorMessage => {
    return {
        type: AddCatTypes.ADD_CATEGORY_ERROR,
        errorMessage
    };
};

export const addCatSubRequest = () => {
    return {
        type: AddCatTypes.ADD_SUB_CATEGORY_REQUEST,
    };
};

export const addCatSubSuccess = items => {
    return {
        type: AddCatTypes.ADD_SUB_CATEGORY_SUCCESS,
        items
    };
};

export const addCatSubError = errorMessage => {
    return {
        type: AddCatTypes.ADD_SUB_CATEGORY_ERROR,
        errorMessage
    };
};