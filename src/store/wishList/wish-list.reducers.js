import WishListTypes from "./wish-list.types";

const wishListReducer = (state = {wishListItems: []}, action) => {
    switch (action.type) {
        case WishListTypes.ADD_TO_WISH_LIST_REQUEST:
            return {
                ...state,
                isAddingToWishList: true,
                isAddingToWishListDone: false,
                isAddingToWishListError: false,
            };
        case WishListTypes.ADD_TO_WISH_LIST_SUCCESS:
            return {
                ...state,
                isAddingToWishList: false,
                isAddingToWishListDone: true,
                isAddingToWishListError: false,
            };
        case WishListTypes.ADD_TO_WISH_LIST_FAILURE:
            return {
                ...state,
                isAddingToWishList: false,
                isAddingToWishListDone: false,
                isAddingToWishListError: true,
            };
        case WishListTypes.FETCH_ITEM_FROM_WISH_LIST_REQUEST:
            return {
                ...state,
                isFetchingItemFromWishList: true,
                fetchingItemFromWishListDone: false,
                fetchingItemFromWishListError: false,
                wishListItems: []
            };
        case WishListTypes.FETCH_ITEM_FROM_WISH_LIST_SUCCESS:
            return {
                ...state,
                isFetchingItemFromWishList: false,
                fetchingItemFromWishListDone: true,
                fetchingItemFromWishListError: false,
                wishListItems: action.wishListItems,
            };
        case WishListTypes.FETCH_ITEM_FROM_WISH_LIST_ERROR:
            return {
                ...state,
                isFetchingItemFromWishList: false,
                fetchingItemFromWishListDone: false,
                fetchingItemFromWishListError: true,
                wishListItems: []
            };
        case WishListTypes.FETCH_ITEM_FROM_WISH_LIST_CHECK:
            return {
                ...state,
                wishListItems: action.wishListItems,
            };
        case WishListTypes.REMOVE_FROM_WISH_LIST_REQUEST:
            return {
                ...state,
                isRemovingFromWishList: true,
                removingFromWishListDone: false,
                removingFromWishListError: false
            };
        case WishListTypes.REMOVE_FROM_WISH_LIST_SUCCESS:
            return {
                ...state,
                isRemovingFromWishList: false,
                removingFromWishListDone: true,
                removingFromWishListError: false
            };
        case WishListTypes.REMOVE_FROM_WISH_LIST_ERROR:
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

export default wishListReducer;