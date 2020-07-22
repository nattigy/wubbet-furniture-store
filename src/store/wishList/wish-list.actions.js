import WishListTypes from "./wish-list.types";

export const addItemToWishListRequest = () => {
    return {
        type: WishListTypes.ADD_TO_WISH_LIST_REQUEST
    };
};

export const addItemToWishListSuccess = () => {
    return {
        type: WishListTypes.ADD_TO_WISH_LIST_SUCCESS,
    };
};

export const addItemToWishListError = error => {
    return {
        type: WishListTypes.ADD_TO_WISH_LIST_FAILURE,
        error
    };
};

export const fetchFromWishListCheck = wishListItems => {
    return {
        type: WishListTypes.FETCH_ITEM_FROM_WISH_LIST_CHECK,
        wishListItems
    };
};

export const fetchFromWishListRequest = () => {
    return {
        type: WishListTypes.FETCH_ITEM_FROM_WISH_LIST_REQUEST,
    };
};

export const fetchFromWishListSuccess = wishListItems => {
    return {
        type: WishListTypes.FETCH_ITEM_FROM_WISH_LIST_SUCCESS,
        wishListItems
    };
};

export const fetchFromWishListError = error => {
    return {
        type: WishListTypes.FETCH_ITEM_FROM_WISH_LIST_ERROR,
        error
    };
};

export const removeFromWishListRequest = () => {
    return {
        type: WishListTypes.REMOVE_FROM_WISH_LIST_REQUEST
    };
};

export const removeFromWishListSuccess = () => {
    return {
        type: WishListTypes.REMOVE_FROM_WISH_LIST_SUCCESS,
    };
};

export const removeFromWishListError = error => {
    return {
        type: WishListTypes.REMOVE_FROM_WISH_LIST_ERROR,
        error
    };
};
