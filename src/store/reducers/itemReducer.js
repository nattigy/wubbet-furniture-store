import {
    ADD_ITEM_FAILURE,
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    FETCH_ITEM_FROM_CART_REQUEST,
    FETCH_ITEM_FROM_CART_SUCCESS,
    FETCH_ITEM_FROM_CART_ERROR,
    ADD_TO_CART_SUCCESS_OFFLINE
} from "./../actions/itemActions";

export default (state = {cartItems: [], cartItemOffline: []}, action) => {
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
                isAddingToCartDone: false,
                isAddingToCartError: false,
            };
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                isAddingToCart: false,
                isAddingToCartDone: true,
                isAddingToCartError: false,
            };
        case ADD_TO_CART_FAILURE:
            return {
                ...state,
                isAddingToCart: false,
                isAddingToCartDone: false,
                isAddingToCartError: true,
            };
        case FETCH_ITEM_FROM_CART_REQUEST:
            return {
                ...state,
                isFetchingFromCart: true,
                isFetchingFromDone: false,
                isFetchingFromError: false,
                cartItems: []
            };
        case FETCH_ITEM_FROM_CART_SUCCESS:
            return {
                ...state,
                isFetchingFromCart: false,
                isFetchingFromDone: true,
                isFetchingFromError: false,
                cartItems: action.cartItems
            };
        case FETCH_ITEM_FROM_CART_ERROR:
            return {
                ...state,
                isFetchingFromCart: false,
                isFetchingFromDone: false,
                isFetchingFromError: true,
                cartItems: []
            };
        default:
            return state;
    }
};