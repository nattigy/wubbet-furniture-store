import ItemTypes from "./item.types";

export const addItemRequest = () => {
    return {
        type: ItemTypes.ADD_ITEM_REQUEST
    };
};

export const addItemSuccess = () => {
    return {
        type: ItemTypes.ADD_ITEM_SUCCESS,
    };
};

export const addItemError = error => {
    return {
        type: ItemTypes.ADD_ITEM_FAILURE,
        error
    };
};

export const getItemDetailRequest = () => {
    return {
        type: ItemTypes.GET_ITEM_DETAIL_REQUEST
    }
};

export const getItemDetailSuccess = item => {
    return {
        type: ItemTypes.GET_ITEM_DETAIL_SUCCESS,
        item
    }
};

export const getItemDetailError = error => {
    return {
        type: ItemTypes.GET_ITEM_DETAIL_ERROR,
        error
    }
};

export const fetchMyItemsRequest = () => {
    return {
        type: ItemTypes.FETCH_MY_ITEM_REQUEST
    }
};

export const fetchMyItemsSuccess = myItems => {
    return {
        type: ItemTypes.FETCH_MY_ITEM_SUCCESS,
        myItems
    }
};

export const fetchMyItemsError = error => {
    return {
        type: ItemTypes.FETCH_MY_ITEM_ERROR,
        error
    }
};

export const editMyItemsRequest = () => {
    return {
        type: ItemTypes.EDIT_MY_ITEM_REQUEST
    }
};

export const editMyItemsSuccess = myItems => {
    return {
        type: ItemTypes.EDIT_MY_ITEM_SUCCESS,
        myItems
    }
};

export const editMyItemsError = error => {
    return {
        type: ItemTypes.EDIT_MY_ITEM_ERROR,
        error
    }
};
