import fbConfig from "../../firebase/firebase";
import uuid from 'react-uuid'

export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
export const ADD_ITEM_SUCCESS = "LOGIN_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const ADD_TO_WISH_LIST_REQUEST = "ADD_TO_WISH_LIST_REQUEST";
export const ADD_TO_WISH_LIST_SUCCESS = "ADD_TO_WISH_LIST_SUCCESS";
export const ADD_TO_WISH_LIST_FAILURE = "ADD_TO_WISH_LIST_FAILURE";

export const REMOVE_FROM_CART_REQUEST = "REMOVE_FROM_CART_REQUEST";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const REMOVE_FROM_CART_ERROR = "REMOVE_FROM_CART_ERROR";

export const REMOVE_FROM_WISH_LIST_REQUEST = "REMOVE_FROM_WISH_LIST_REQUEST";
export const REMOVE_FROM_WISH_LIST_SUCCESS = "REMOVE_FROM_WISH_LIST_SUCCESS";
export const REMOVE_FROM_WISH_LIST_ERROR = "REMOVE_FROM_WISH_LIST_ERROR";

const addItemRequest = () => {
    return {
        type: ADD_ITEM_REQUEST
    };
};

const addItemSuccess = () => {
    return {
        type: ADD_ITEM_SUCCESS,
    };
};

const addItemError = error => {
    return {
        type: ADD_ITEM_FAILURE,
        error
    };
};

const addItemToCartRequest = () => {
    return {
        type: ADD_TO_CART_REQUEST
    };
};

const addItemToCartSuccess = () => {
    return {
        type: ADD_TO_CART_SUCCESS,
    };
};

const addItemToCartError = error => {
    return {
        type: ADD_TO_CART_FAILURE,
        error
    };
};

export const addItem = ({category, name, price, size, color, description}) => dispatch => {
    dispatch(addItemRequest());
    const newUuid = uuid();
    fbConfig.firestore().collection(category).doc(newUuid).set({
        category, name, price, size, color, description
    })
        .then(() => {
            fbConfig.firestore().collection("items_name").doc(newUuid)
                .set({
                    item_id: newUuid,
                    item_name: name,
                    category
                })
                .then(() => dispatch(addItemSuccess()))
                .catch(error => dispatch(addItemError(error)))
        })
        .catch(error => dispatch(addItemError(error)))
};

export const addItemToCart = ({userId, itemId}) => dispatch => {
    dispatch(addItemToCartRequest());
    fbConfig.firestore().collection("users").doc(userId).update({
        cartList: fbConfig.firestore.FieldValue.arrayUnion(itemId)
    })
        .then(() => {
            dispatch(addItemToCartSuccess())
        })
        .catch(error => dispatch(addItemToCartError(error)));
};
