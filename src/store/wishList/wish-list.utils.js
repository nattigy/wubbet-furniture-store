import fbConfig from "../../firebase/firebase";
import {
    addItemToWishListError,
    addItemToWishListRequest,
    addItemToWishListSuccess,
    fetchFromWishListCheck,
    fetchFromWishListError,
    fetchFromWishListRequest,
    fetchFromWishListSuccess,
    removeFromWishListError,
    removeFromWishListRequest,
    removeFromWishListSuccess
} from "./wish-list.actions";

export const addItemToWishList = ({userId, itemId, itemPrice}) => dispatch => {
    dispatch(addItemToWishListRequest());
    fbConfig.firestore().collection("users").doc(userId).update({
        wishList: fbConfig.firestore.FieldValue.arrayUnion(itemId)
    })
        .then(() => {
            dispatch(addItemToWishListSuccess());
            dispatch(checkWishList(userId));
        })
        .catch(error => dispatch(addItemToWishListError(error)));
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
                    .catch(error => dispatch(fetchFromWishListError(error)));
            }
        })
        .catch(error => dispatch(fetchFromWishListError(error)));
};

export const fetchFromWishList = ({uid}) => dispatch => {
    dispatch(fetchFromWishListRequest());
    let items = [];
    fbConfig.firestore().collection("users").doc(uid)
        .get()
        .then(snapShot => {
            let cartItems = snapShot.data().wishList;
            if (cartItems.length === 0) {
                dispatch(fetchFromWishListSuccess(items));
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
                                dispatch(fetchFromWishListSuccess(items));
                            }
                        } else {
                            if (i + 1 === cartItems.length) {
                                dispatch(fetchFromWishListSuccess(items));
                            }
                        }
                    })
                    .catch(error => dispatch(fetchFromWishListError(error)));
            }
        })
        .catch(error => dispatch(fetchFromWishListError(error)));
};

export const deleteFromWishList = ({userId, itemId}) => dispatch => {
    dispatch(removeFromWishListRequest());
    fbConfig.firestore().collection('users').doc(userId)
        .update({
            wishList: fbConfig.firestore.FieldValue.arrayRemove(itemId)
        })
        .then(() => {
            dispatch(removeFromWishListSuccess());
            dispatch(checkWishList(userId));
        })
        .catch(error => dispatch(removeFromWishListError(error.message)));
};