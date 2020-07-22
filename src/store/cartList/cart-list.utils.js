import fbConfig from "../../firebase/firebase";
import {
    addItemToCartError,
    addItemToCartRequest,
    addItemToCartSuccess,
    fetchFromCartCheck,
    fetchFromCartError,
    fetchFromCartRequest,
    fetchFromCartSuccess,
    removeFromCartError,
    removeFromCartRequest,
    removeFromCartSuccess
} from "./cart-list.actions";

export const addItemToCart = ({userId, itemId}) => dispatch => {
    dispatch(addItemToCartRequest());
    fbConfig.firestore().collection("users").doc(userId).update({
        cartList: fbConfig.firestore.FieldValue.arrayUnion(itemId),
    })
        .then(() => {
            dispatch(addItemToCartSuccess());
            dispatch(checkCart(userId));
        })
        .catch(error => dispatch(addItemToCartError(error)));
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

export const fetchFromCart = ({uid}) => dispatch => {
    dispatch(fetchFromCartRequest());
    let items = [];
    fbConfig.firestore().collection("users").doc(uid)
        .get()
        .then(snapShot => {
            let cartItems = snapShot.data().cartList;
            if (cartItems.length === 0) {
                dispatch(fetchFromCartSuccess(items));
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
                                dispatch(fetchFromCartSuccess(items));
                            }
                        } else {
                            if (i + 1 === cartItems.length) {
                                dispatch(fetchFromCartSuccess(items));
                            }
                        }
                    })
                    .catch(error => dispatch(fetchFromCartError(error)));
            }
        })
        .catch(error => dispatch(fetchFromCartError(error)));
};

export const deleteFromCart = ({userId, itemId}) => dispatch => {
    dispatch(removeFromCartRequest());
    fbConfig.firestore().collection('users').doc(userId)
        .update({
            cartList: fbConfig.firestore.FieldValue.arrayRemove(itemId)
        })
        .then(() => {
            dispatch(removeFromCartSuccess());
            dispatch(checkCart(userId));
        })
        .catch(error => dispatch(removeFromCartError(error.message)));
};