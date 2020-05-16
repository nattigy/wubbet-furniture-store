import {
    ADD_ITEM_FAILURE,
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
} from "./../actions/itemActions";

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM_REQUEST:
            return {
                ...state,
                isAdding: true,
                addingSuccess: false,
                addingError: false
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                isAdding: false,
                addingSuccess: true,
                addingError: false
            };
        case ADD_ITEM_FAILURE:
            return {
                ...state,
                isAdding: false,
                addingSuccess: false,
                addingError: true,
                errorMessage: action.error
            };
        case ADD_TO_CART_REQUEST:
            return {
                ...state,
                isAddingToCart: true,
                isAddingToCartError: false,
            };
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                isAddingToCart: false,
                isAddingToCartError: false,
            };
        case ADD_TO_CART_FAILURE:
            return {
                ...state,
                isAddingToCart: false,
                isAddingToCartError: true,
            };
        default:
            return state;
    }
};