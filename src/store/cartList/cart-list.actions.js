import CartListTypes from "./cart-list.types";

export const addItemToCartRequest = () => {
    return {
        type: CartListTypes.ADD_TO_CART_REQUEST
    };
};

export const addItemToCartSuccess = () => {
    return {
        type: CartListTypes.ADD_TO_CART_SUCCESS,
    };
};

export const addItemToCartError = error => {
    return {
        type: CartListTypes.ADD_TO_CART_FAILURE,
        error
    };
};

export const fetchFromCartCheck = cartItems => {
    let totalPrice = 0;
    cartItems.forEach(item => totalPrice += parseInt(item.totalPrice));
    return {
        type: CartListTypes.FETCH_ITEM_FROM_CART_CHECK,
        cartItems,
        totalPrice
    };
};

export const fetchFromCartRequest = () => {
    return {
        type: CartListTypes.FETCH_ITEM_FROM_CART_REQUEST,
    };
};

export const fetchFromCartSuccess = cartItems => {
    let totalPrice = 0;
    cartItems.forEach(item => totalPrice += parseInt(item.totalPrice));
    return {
        type: CartListTypes.FETCH_ITEM_FROM_CART_SUCCESS,
        cartItems,
        totalPrice
    };
};

export const fetchFromCartError = error => {
    return {
        type: CartListTypes.FETCH_ITEM_FROM_CART_ERROR,
        error
    };
};

export const removeFromCartRequest = () => {
    return {
        type: CartListTypes.REMOVE_FROM_CART_REQUEST
    };
};

export const removeFromCartSuccess = () => {
    return {
        type: CartListTypes.REMOVE_FROM_CART_SUCCESS,
    };
};

export const removeFromCartError = error => {
    return {
        type: CartListTypes.REMOVE_FROM_CART_ERROR,
        error
    };
};
