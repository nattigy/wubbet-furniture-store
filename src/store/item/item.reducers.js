import ItemTypes from "./item.types";

const itemReducers = (state = {cartItems: [], wishListItem: [], myItems: []}, action) => {
    switch (action.type) {
        case ItemTypes.ADD_ITEM_REQUEST:
            return {
                ...state,
                isAdding: true,
                addingSuccess: false,
                addingError: false
            };
        case ItemTypes.ADD_ITEM_SUCCESS:
            return {
                ...state,
                isAdding: false,
                addingSuccess: true,
                addingError: false
            };
        case ItemTypes.ADD_ITEM_FAILURE:
            return {
                ...state,
                isAdding: false,
                addingSuccess: false,
                addingError: true,
                errorMessage: action.error
            };
        case ItemTypes.GET_ITEM_DETAIL_REQUEST:
            return {
                ...state,
                isGettingItemDetail: true,
                gettingItemDetailDone: false,
                gettingItemDetailError: false,
            };
        case ItemTypes.GET_ITEM_DETAIL_SUCCESS:
            return {
                ...state,
                isGettingItemDetail: false,
                gettingItemDetailDone: true,
                gettingItemDetailError: false,
                itemDetail: action.item,
            };
        case ItemTypes.GET_ITEM_DETAIL_ERROR:
            return {
                ...state,
                isGettingItemDetail: false,
                gettingItemDetailDone: false,
                gettingItemDetailError: true,
                errorMessage: action.error
            };
        case ItemTypes.FETCH_MY_ITEM_REQUEST:
            return {
                ...state,
                isFetchingMyItems: true,
                fetchingMyItemsDone: false,
                fetchingMyItemsError: false,
            };
        case ItemTypes.FETCH_MY_ITEM_SUCCESS:
            return {
                ...state,
                isFetchingMyItems: false,
                fetchingMyItemsDone: true,
                fetchingMyItemsError: false,
                myItems: action.myItems
            };
        case ItemTypes.FETCH_MY_ITEM_ERROR:
            return {
                ...state,
                isFetchingMyItems: false,
                fetchingMyItemsDone: false,
                fetchingMyItemsError: true,
                error: action.error
            };
        case ItemTypes.EDIT_MY_ITEM_REQUEST:
            return {
                ...state,
                isEditing: true,
                editingDone: false,
                editingError: false,
            };
        case ItemTypes.EDIT_MY_ITEM_SUCCESS:
            return {
                ...state,
                isEditing: false,
                editingDone: true,
                editingError: false,
            };
        case ItemTypes.EDIT_MY_ITEM_ERROR:
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

export default itemReducers;