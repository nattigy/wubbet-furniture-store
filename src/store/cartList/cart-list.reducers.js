import CartListTypes from "./cart-list.types";

const cartListReducers = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case CartListTypes.ADD_TO_CART_REQUEST:
            return {
                ...state,
                isAddingToCart: true,
                isAddingToCartDone: false,
                isAddingToCartError: false,
            };
        case CartListTypes.ADD_TO_CART_SUCCESS:
            return {
                ...state,
                isAddingToCart: false,
                isAddingToCartDone: true,
                isAddingToCartError: false,
            };
        case CartListTypes.ADD_TO_CART_FAILURE:
            return {
                ...state,
                isAddingToCart: false,
                isAddingToCartDone: false,
                isAddingToCartError: true,
            };
        case CartListTypes.FETCH_ITEM_FROM_CART_REQUEST:
            return {
                ...state,
                isFetchingFromCart: true,
                isFetchingFromDone: false,
                isFetchingFromError: false,
                cartItems: [],
            };
        case CartListTypes.FETCH_ITEM_FROM_CART_SUCCESS:
            return {
                ...state,
                isFetchingFromCart: false,
                isFetchingFromDone: true,
                isFetchingFromError: false,
                cartItems: action.cartItems,
                totalPrice: action.totalPrice
            };
        case CartListTypes.FETCH_ITEM_FROM_CART_ERROR:
            return {
                ...state,
                isFetchingFromCart: false,
                isFetchingFromDone: false,
                isFetchingFromError: true,
                cartItems: []
            };
        case CartListTypes.FETCH_ITEM_FROM_CART_CHECK:
            return {
                ...state,
                cartItems: action.cartItems,
            };
        case CartListTypes.REMOVE_FROM_CART_REQUEST:
            return {
                ...state,
                isRemovingFromCart: true,
                removingFromCartDone: false,
                removingFromCartError: false,
            };
        case CartListTypes.REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                isRemovingFromCart: false,
                removingFromCartDone: true,
                removingFromCartError: false,
            };
        case CartListTypes.REMOVE_FROM_CART_ERROR:
            return {
                ...state,
                isRemovingFromCart: false,
                removingFromCartDone: false,
                removingFromCartError: true,
            };
        default:
            return state;
    }
};

export default cartListReducers;