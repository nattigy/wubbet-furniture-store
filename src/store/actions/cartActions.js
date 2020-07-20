import fbConfig from "../../firebase/firebase";

export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const ADD_TO_WISH_LIST_REQUEST = "ADD_TO_WISH_LIST_REQUEST";
export const ADD_TO_WISH_LIST_SUCCESS = "ADD_TO_WISH_LIST_SUCCESS";
export const ADD_TO_WISH_LIST_FAILURE = "ADD_TO_WISH_LIST_FAILURE";

export const FETCH_ITEM_FROM_CART_CHECK = "FETCH_ITEM_FROM_CART_CHECK";
export const FETCH_ITEM_FROM_WISH_LIST_CHECK = "FETCH_ITEM_FROM_WISH_LIST_CHECK";

export const FETCH_ITEM_FROM_CART_REQUEST = "FETCH_ITEM_FROM_CART_REQUEST";
export const FETCH_ITEM_FROM_CART_SUCCESS = "FETCH_ITEM_FROM_CART_SUCCESS";
export const FETCH_ITEM_FROM_CART_ERROR = "FETCH_ITEM_FROM_CART_ERROR";

export const FETCH_ITEM_FROM_WISH_LIST_REQUEST = "FETCH_ITEM_FROM_WISH_LIST_REQUEST";
export const FETCH_ITEM_FROM_WISH_LIST_SUCCESS = "FETCH_ITEM_FROM_WISH_LIST_SUCCESS";
export const FETCH_ITEM_FROM_WISH_LIST_ERROR = "FETCH_ITEM_FROM_WISH_LIST_ERROR";

export const REMOVE_FROM_CART_REQUEST = "REMOVE_FROM_CART_REQUEST";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const REMOVE_FROM_CART_ERROR = "REMOVE_FROM_CART_ERROR";

export const REMOVE_FROM_WISH_LIST_REQUEST = "REMOVE_FROM_WISH_LIST_REQUEST";
export const REMOVE_FROM_WISH_LIST_SUCCESS = "REMOVE_FROM_WISH_LIST_SUCCESS";
export const REMOVE_FROM_WISH_LIST_ERROR = "REMOVE_FROM_WISH_LIST_ERROR";

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

const addItemToWishListRequest = () => {
    return {
        type: ADD_TO_WISH_LIST_REQUEST
    };
};

const addItemToWishListSuccess = () => {
    return {
        type: ADD_TO_WISH_LIST_SUCCESS,
    };
};

const addItemToWishListError = error => {
    return {
        type: ADD_TO_WISH_LIST_FAILURE,
        error
    };
};

const fetchFromCartCheck = cartItems => {
    return {
        type: FETCH_ITEM_FROM_CART_CHECK,
        cartItems
    };
};

const fetchFromWishListCheck = wishListItems => {
    return {
        type: FETCH_ITEM_FROM_WISH_LIST_CHECK,
        wishListItems
    };
};

const fetchFromCartRequest = () => {
    return {
        type: FETCH_ITEM_FROM_CART_REQUEST,
    };
};

const fetchFromCartSuccess = cartItems => {
    let totalPrice = 0;
    cartItems.forEach(item => totalPrice += parseInt(item.price));
    return {
        type: FETCH_ITEM_FROM_CART_SUCCESS,
        cartItems,
        totalPrice
    };
};

const fetchFromCartError = error => {
    return {
        type: FETCH_ITEM_FROM_CART_ERROR,
        error
    };
};

const fetchFromWishListRequest = () => {
    return {
        type: FETCH_ITEM_FROM_WISH_LIST_REQUEST,
    };
};

const fetchFromWishListSuccess = wishListItems => {
    return {
        type: FETCH_ITEM_FROM_WISH_LIST_SUCCESS,
        wishListItems
    };
};

const fetchFromWishListError = error => {
    return {
        type: FETCH_ITEM_FROM_WISH_LIST_ERROR,
        error
    };
};

const removeFromCartRequest = () => {
    return {
        type: REMOVE_FROM_CART_REQUEST
    };
};

const removeFromCartSuccess = () => {
    return {
        type: REMOVE_FROM_CART_SUCCESS,
    };
};

const removeFromCartError = error => {
    return {
        type: REMOVE_FROM_CART_ERROR,
        error
    };
};

const removeFromWishListRequest = () => {
    return {
        type: REMOVE_FROM_WISH_LIST_REQUEST
    };
};

const removeFromWishListSuccess = () => {
    return {
        type: REMOVE_FROM_WISH_LIST_SUCCESS,
    };
};

const removeFromWishListError = error => {
    return {
        type: REMOVE_FROM_WISH_LIST_ERROR,
        error
    };
};

export const addItemToCart = ({userId, itemId, itemPrice, type}) => dispatch => {
    let list;
    switch (type) {
        case "ADD_TO_CART":
            dispatch(addItemToCartRequest());
            list = "cartList";
            break;
        case "ADD_TO_WISH_LIST":
            dispatch(addItemToWishListRequest());
            list = "wishList";
            break;
        default:
            list = "cartList"
    }
    fbConfig.firestore().collection("users").doc(userId).update({
        [list]: fbConfig.firestore.FieldValue.arrayUnion(itemId),
        totalPriceOfCart: fbConfig.firestore.FieldValue.increment(list === "cartList" ? itemPrice : 0)
    })
        .then(() => {
            list === "cartList" ? dispatch(addItemToCartSuccess()) : dispatch(addItemToWishListSuccess());
            list === "cartList" ? dispatch(checkCart(userId)) : dispatch(checkWishList(userId));
        })
        .catch(error => dispatch(list === "cartList" ? addItemToCartError(error) :
            dispatch(addItemToWishListError(error))));
};

export const checkCart = (uid) => dispatch => {
    let items = [];
    fbConfig.firestore().collection("users").doc(uid)
        .get()
        .then(snapShot => {
            let cartItems;
            cartItems = snapShot.data().cartList;
            if (cartItems.length === 0) {
                dispatch(fetchFromCartCheck(items));
                return
            }
            for (let i = 0; i < cartItems.length; i++) {
                fbConfig.firestore().collection("items").doc(cartItems[i])
                    .get()
                    .then(snapshot => {
                        if (snapshot.exists) {
                            let data = snapshot.data();
                            data.id = snapshot.id;
                            items.push(data);
                            if (i + 1 === cartItems.length) {
                                dispatch(fetchFromCartCheck(items))
                            }
                        } else {
                            if (i + 1 === cartItems.length) {
                                dispatch(fetchFromCartCheck(items))
                            }
                        }
                    })
                    .catch(error => dispatch(fetchFromCartError(error)))
            }
        })
        .catch(error => dispatch(fetchFromCartError(error)))
};

export const checkWishList = (uid) => dispatch => {
    let items = [];
    fbConfig.firestore().collection("users").doc(uid)
        .get()
        .then(snapShot => {
            let cartItems;
            cartItems = snapShot.data().wishList;
            if (cartItems.length === 0) {
                dispatch(fetchFromWishListCheck(items));
                return
            }
            for (let i = 0; i < cartItems.length; i++) {
                fbConfig.firestore().collection("items").doc(cartItems[i])
                    .get()
                    .then(snapshot => {
                        if (snapshot.exists) {
                            let data = snapshot.data();
                            data.id = snapshot.id;
                            items.push(data);
                            if (i + 1 === cartItems.length) {
                                dispatch(fetchFromWishListCheck(items));
                            }
                        } else {
                            if (i + 1 === cartItems.length) {
                                dispatch(fetchFromWishListCheck(items));
                            }
                        }
                    })
                    .catch(error => dispatch(fetchFromWishListError(error)))
            }
        })
        .catch(error => dispatch(fetchFromWishListError(error)))
};

export const fetchFromCart = ({uid, type}) => dispatch => {
    type === "CART_LIST" ? dispatch(fetchFromCartRequest()) : dispatch(fetchFromWishListRequest());
    let items = [];
    fbConfig.firestore().collection("users").doc(uid)
        .get()
        .then(snapShot => {
            let cartItems;
            switch (type) {
                case "WISH_LIST":
                    cartItems = snapShot.data().wishList;
                    break;
                case "CART_LIST":
                    cartItems = snapShot.data().cartList;
                    break;
                default:
                    cartItems = snapShot.data().cartList;
            }
            if (cartItems.length === 0) {
                type === "CART_LIST" ? dispatch(fetchFromCartSuccess(items)) : dispatch(fetchFromWishListSuccess(items));
                return
            }
            for (let i = 0; i < cartItems.length; i++) {
                fbConfig.firestore().collection("items").doc(cartItems[i])
                    .get()
                    .then(snapshot => {
                        if (snapshot.exists) {
                            let data = snapshot.data();
                            data.id = snapshot.id;
                            items.push(data);
                            if (i + 1 === cartItems.length) {
                                type === "CART_LIST" ? dispatch(fetchFromCartSuccess(items)) :
                                    dispatch(fetchFromWishListSuccess(items));
                            }
                        } else {
                            if (i + 1 === cartItems.length) {
                                type === "CART_LIST" ? dispatch(fetchFromCartSuccess(items)) :
                                    dispatch(fetchFromWishListSuccess(items));
                            }
                        }
                    })
                    .catch(error => type === "CART_LIST" ? dispatch(fetchFromCartError(error)) :
                        dispatch(fetchFromWishListError(error)))
            }
        })
        .catch(error => type === "CART_LIST" ? dispatch(fetchFromCartError(error)) :
            dispatch(fetchFromWishListError(error)));
};

export const deleteFromCart = ({userId, itemId, type}) => dispatch => {
    type === "CART_LIST" ? dispatch(removeFromCartRequest()) : dispatch(removeFromWishListRequest());
    let cartList;
    switch (type) {
        case "CART_LIST":
            cartList = "cartList";
            break;
        case "WISH_LIST":
            cartList = "wishList";
            break;
        default:
            cartList = "cartList";
    }
    fbConfig.firestore().collection('users').doc(userId)
        .update({
            [cartList]: fbConfig.firestore.FieldValue.arrayRemove(itemId)
        })
        .then(() => {
            type === "CART_LIST" ? dispatch(removeFromCartSuccess()) : dispatch(removeFromWishListSuccess());
            type === "CART_LIST" ? dispatch(checkCart(userId)) : dispatch(checkWishList(userId));
        })
        .catch(error => type === "CART_LIST" ? dispatch(removeFromCartError(error.message)) :
            dispatch(removeFromWishListError(error.message)))
};