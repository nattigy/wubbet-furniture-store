import {
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_WISH_LIST_FAILURE,
    ADD_TO_WISH_LIST_REQUEST,
    ADD_TO_WISH_LIST_SUCCESS,
    FETCH_ITEM_FROM_CART_CHECK,
    FETCH_ITEM_FROM_CART_ERROR,
    FETCH_ITEM_FROM_CART_REQUEST,
    FETCH_ITEM_FROM_CART_SUCCESS,
    FETCH_ITEM_FROM_WISH_LIST_CHECK,
    FETCH_ITEM_FROM_WISH_LIST_ERROR,
    FETCH_ITEM_FROM_WISH_LIST_REQUEST,
    FETCH_ITEM_FROM_WISH_LIST_SUCCESS,
    REMOVE_FROM_CART_ERROR,
    REMOVE_FROM_CART_REQUEST,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_WISH_LIST_ERROR,
    REMOVE_FROM_WISH_LIST_REQUEST,
    REMOVE_FROM_WISH_LIST_SUCCESS,
} from "./../actions/cartActions";

export default (state = {cartItems: [], wishListItems: []}, action) => {
    switch (action.type) {
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
        case ADD_TO_WISH_LIST_REQUEST:
            return {
                ...state,
                isAddingToWishList: true,
                isAddingToWishListDone: false,
                isAddingToWishListError: false,
            };
        case ADD_TO_WISH_LIST_SUCCESS:
            return {
                ...state,
                isAddingToWishList: false,
                isAddingToWishListDone: true,
                isAddingToWishListError: false,
            };
        case ADD_TO_WISH_LIST_FAILURE:
            return {
                ...state,
                isAddingToWishList: false,
                isAddingToWishListDone: false,
                isAddingToWishListError: true,
            };
        case FETCH_ITEM_FROM_CART_REQUEST:
            return {
                ...state,
                isFetchingFromCart: true,
                isFetchingFromDone: false,
                isFetchingFromError: false,
                cartItems: [],
            };
        case FETCH_ITEM_FROM_CART_SUCCESS:
            return {
                ...state,
                isFetchingFromCart: false,
                isFetchingFromDone: true,
                isFetchingFromError: false,
                cartItems: action.cartItems,
                totalPrice: action.totalPrice
            };
        case FETCH_ITEM_FROM_CART_ERROR:
            return {
                ...state,
                isFetchingFromCart: false,
                isFetchingFromDone: false,
                isFetchingFromError: true,
                cartItems: []
            };
        case FETCH_ITEM_FROM_WISH_LIST_REQUEST:
            return {
                ...state,
                isFetchingItemFromWishList: true,
                fetchingItemFromWishListDone: false,
                fetchingItemFromWishListError: false,
                wishListItems: []
            };
        case FETCH_ITEM_FROM_WISH_LIST_SUCCESS:
            return {
                ...state,
                isFetchingItemFromWishList: false,
                fetchingItemFromWishListDone: true,
                fetchingItemFromWishListError: false,
                wishListItems: action.wishListItems,
            };
        case FETCH_ITEM_FROM_WISH_LIST_ERROR:
            return {
                ...state,
                isFetchingItemFromWishList: false,
                fetchingItemFromWishListDone: false,
                fetchingItemFromWishListError: true,
                wishListItems: []
            };
        case FETCH_ITEM_FROM_CART_CHECK:
            return {
                ...state,
                cartItems: action.cartItems,
            };
        case FETCH_ITEM_FROM_WISH_LIST_CHECK:
            return {
                ...state,
                wishListItems: action.wishListItems,
            };
        case REMOVE_FROM_CART_REQUEST:
            return {
                ...state,
                isRemovingFromCart: true,
                removingFromCartDone: false,
                removingFromCartError: false,
            };
        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                isRemovingFromCart: false,
                removingFromCartDone: true,
                removingFromCartError: false,
            };
        case REMOVE_FROM_CART_ERROR:
            return {
                ...state,
                isRemovingFromCart: false,
                removingFromCartDone: false,
                removingFromCartError: true,
            };
        case REMOVE_FROM_WISH_LIST_REQUEST:
            return {
                ...state,
                isRemovingFromWishList: true,
                removingFromWishListDone: false,
                removingFromWishListError: false
            };
        case REMOVE_FROM_WISH_LIST_SUCCESS:
            return {
                ...state,
                isRemovingFromWishList: false,
                removingFromWishListDone: true,
                removingFromWishListError: false
            };
        case REMOVE_FROM_WISH_LIST_ERROR:
            return {
                ...state,
                isRemovingFromWishList: false,
                removingFromWishListDone: false,
                removingFromWishListError: true
            };
        default:
            return state;
    }
};