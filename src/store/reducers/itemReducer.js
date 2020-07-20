import {
    ADD_ITEM_FAILURE,
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    EDIT_MY_ITEM_ERROR,
    EDIT_MY_ITEM_REQUEST,
    EDIT_MY_ITEM_SUCCESS,
    FETCH_MY_ITEM_ERROR,
    FETCH_MY_ITEM_REQUEST,
    FETCH_MY_ITEM_SUCCESS,
    GET_ITEM_DETAIL_ERROR,
    GET_ITEM_DETAIL_REQUEST,
    GET_ITEM_DETAIL_SUCCESS,
} from "./../actions/itemActions";

export default (state = {cartItems: [], wishListItem: [], myItems: []}, action) => {
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
        case EDIT_MY_ITEM_REQUEST:
            return {
                ...state,
                isEditing: true,
                editingDone: false,
                editingError: false,
            };
        case EDIT_MY_ITEM_SUCCESS:
            return {
                ...state,
                isEditing: false,
                editingDone: true,
                editingError: false,
            };
        case EDIT_MY_ITEM_ERROR:
            return {
                ...state,
                isEditing: false,
                editingDone: false,
                editingError: true,
            };
        default:
            return state;
    }
};