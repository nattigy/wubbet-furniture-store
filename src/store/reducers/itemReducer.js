import {
    ADD_ITEM_FAILURE,
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_WISH_LIST_FAILURE,
    ADD_TO_WISH_LIST_REQUEST,
    ADD_TO_WISH_LIST_SUCCESS,
    FETCH_ITEM_FROM_CART_ERROR,
    FETCH_ITEM_FROM_CART_REQUEST,
    FETCH_ITEM_FROM_CART_SUCCESS,
    FETCH_MY_ITEM_ERROR,
    FETCH_MY_ITEM_REQUEST,
    FETCH_MY_ITEM_SUCCESS,
    GET_ITEM_DETAIL_ERROR,
    GET_ITEM_DETAIL_REQUEST,
    GET_ITEM_DETAIL_SUCCESS,
    REMOVE_FROM_CART_ERROR,
    REMOVE_FROM_CART_REQUEST,
    REMOVE_FROM_CART_SUCCESS,
} from "./../actions/itemActions";

export default (state = {cartItems: [], cartItemOffline: [], myItems: []}, action) => {
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
        case GET_ITEM_DETAIL_REQUEST:
            return {
                ...state,
                isGettingItemDetail: true,
                gettingItemDetailDone: false,
                gettingItemDetailError: false,
            };
        case GET_ITEM_DETAIL_SUCCESS:
            return {
                ...state,
                isGettingItemDetail: false,
                gettingItemDetailDone: true,
                gettingItemDetailError: false,
                itemDetail: action.item,
            };
        case GET_ITEM_DETAIL_ERROR:
            return {
                ...state,
                isGettingItemDetail: false,
                gettingItemDetailDone: false,
                gettingItemDetailError: true,
                errorMessage: action.error
            };
        case FETCH_MY_ITEM_REQUEST:
            return {
                ...state,
                isFetchingMyItems: true,
                fetchingMyItemsDone: false,
                fetchingMyItemsError: false,
            };
        case FETCH_MY_ITEM_SUCCESS:
            return {
                ...state,
                isFetchingMyItems: false,
                fetchingMyItemsDone: true,
                fetchingMyItemsError: false,
                myItems: action.myItems
            };
        case FETCH_MY_ITEM_ERROR:
            return {
                ...state,
                isFetchingMyItems: false,
                fetchingMyItemsDone: false,
                fetchingMyItemsError: true,
                error: action.error
            };
        default:
            return state;
    }
};