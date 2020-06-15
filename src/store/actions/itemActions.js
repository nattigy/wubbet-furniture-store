import fbConfig from "../../firebase/firebase";
import {useSelector} from "react-redux";

export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
export const ADD_ITEM_SUCCESS = "LOGIN_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_SUCCESS_OFFLINE = "ADD_TO_CART_SUCCESS_OFFLINE";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const FETCH_ITEM_FROM_CART_REQUEST = "FETCH_ITEM_FROM_CART_REQUEST";
export const FETCH_ITEM_FROM_CART_SUCCESS = "FETCH_ITEM_FROM_CART_SUCCESS";
export const FETCH_ITEM_FROM_CART_ERROR = "FETCH_ITEM_FROM_CART_ERROR";

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

const addItemToCartSuccessOffline = cartItem => {
    return {
        type: ADD_TO_CART_SUCCESS_OFFLINE,
        cartItem
    };
};

const addItemToCartError = error => {
    return {
        type: ADD_TO_CART_FAILURE,
        error
    };
};

const fetchFromCartRequest = () => {
    return {
        type: FETCH_ITEM_FROM_CART_REQUEST,
    };
};

const fetchFromCartSuccess = cartItems => {
    return {
        type: FETCH_ITEM_FROM_CART_SUCCESS,
        cartItems
    };
};

const fetchFromCartError = error => {
    return {
        type: FETCH_ITEM_FROM_CART_ERROR,
        error
    };
};

const create_name_array = name => {
    return name.split(" ");
};

const create_cat_name_combo = (category, name) => {
    let name_array = name.split(" ");
    let cat_name_combo = [];
    name_array.map(name => {
        cat_name_combo.push(name + "_" + category)
    });
    return cat_name_combo;
};

export const addItem = ({category, name, price, size, color, description}) => dispatch => {
    dispatch(addItemRequest());
    const name_array = create_name_array(name);
    const cat_name_combo = create_cat_name_combo(category, name);
    fbConfig.firestore().collection("items").doc().set({
        category, name_array, price, size, color, description, name,
        cat_name_combo
    })
        .then(() => dispatch(addItemSuccess()))
        .catch(error => dispatch(addItemError(error)))
};

export const addItemToCart = ({userId, itemId, itemPrice}) => dispatch => {
    dispatch(addItemToCartRequest());
    fbConfig.firestore().collection("users").doc(userId).update({
        cartList: fbConfig.firestore.FieldValue.arrayUnion(itemId),
        totalPriceOfCart: fbConfig.firestore.FieldValue.increment(itemPrice)
    })
        .then(() => {
            dispatch(addItemToCartSuccess())
        })
        .catch(error => dispatch(addItemToCartError(error)));
};

export const addItemToCartOffline = ({item}) => dispatch => {
    dispatch(addItemToCartRequest());
    dispatch(addItemToCartSuccessOffline(item));
};

export const fetchFromCart = ({uid}) => dispatch => {
    dispatch(fetchFromCartRequest());
    let items = [];
    fbConfig.firestore().collection("users").doc(uid)
        .get()
        .then(snapShot => {
            const cartItems = snapShot.data().cartList;
            if(cartItems.length === 0)
                dispatch(fetchFromCartSuccess(items));
            for(let i = 0; i < cartItems.length; i++){
                fbConfig.firestore().collection("items").doc(cartItems[i])
                    .get()
                    .then(snapshot => {
                        items.push(snapshot.data());
                        if(i + 1 === cartItems.length){
                            dispatch(fetchFromCartSuccess(items));
                        }
                    })
                    .catch(error => dispatch(fetchFromCartError(error)))
            }
        }).catch();
};

