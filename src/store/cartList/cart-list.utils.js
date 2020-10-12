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

export const addItemToCart = ({userId, itemId, price}) => dispatch => {
    dispatch(addItemToCartRequest());
    let oldCart = [];
    let isHere = false;
    console.log(price)
    fbConfig.firestore().collection('users').doc(userId)
        .get()
        .then(snapshot => {
            const cartList = snapshot.data().cartList;
            oldCart = cartList;
            if (cartList.length === 0) {
                oldCart = [{itemId, quantity: 1, totalPrice: parseInt(price)}];
            } else {
                oldCart.forEach((item, i) => {
                    if (item.itemId === itemId) {
                        oldCart[i].quantity = oldCart[i].quantity + 1;
                        oldCart[i].totalPrice = parseInt(oldCart[i].totalPrice) + parseInt(price);
                        isHere = true
                    }
                })

                if (!isHere) {
                    oldCart.push({itemId, quantity: 1, totalPrice: parseInt(price)})
                }
            }
        })
        .then(() => {
            fbConfig.firestore().collection("users").doc(userId)
                .update({
                    cartList: oldCart,
                })
                .then(() => {
                    dispatch(addItemToCartSuccess());
                    dispatch(checkCart(userId));
                })
                .catch(error => dispatch(addItemToCartError(error)));
        })
        .catch(error => {
            console.log(error)
            dispatch(addItemToCartError(error))
        });
};

export const checkCart = (uid) => dispatch => {
    let items = [];
    fbConfig.firestore().collection("users").doc(uid)
        .get()
        .then(snapShot => {
            let cartItems;
            cartItems = snapShot.data().cartList;
            console.log("here", cartItems)
            if (cartItems.length === 0) {
                dispatch(fetchFromCartCheck(items));
                return
            }
            for (let i = 0; i < cartItems.length; i++) {
                fbConfig.firestore().collection("items").doc(cartItems[i].itemId)
                    .get()
                    .then(snapshot => {
                        if (snapshot.exists) {
                            let data = snapshot.data();
                            data.id = snapshot.id;
                            data.quantity = cartItems[i].quantity;
                            data.totalPrice = cartItems[i].totalPrice;
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
                fbConfig.firestore().collection("items").doc(cartItems[i].itemId)
                    .get()
                    .then(snapshot => {
                        if (snapshot.exists) {
                            let data = snapshot.data();
                            data.id = snapshot.id;
                            data.quantity = cartItems[i].quantity;
                            data.totalPrice = cartItems[i].totalPrice;
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

export const deleteFromCart = ({userId, itemId, isDecrease, price}) => dispatch => {
    dispatch(removeFromCartRequest());
    let newCart = [];
    fbConfig.firestore().collection('users').doc(userId)
        .get()
        .then(snapshot => {
            let cartList = snapshot.data().cartList;
            newCart = cartList;

            if (isDecrease) {
                cartList.forEach((item, i) => {
                    if (item.itemId === itemId) {
                        if (newCart[i].quantity === 1) {
                            cartList.forEach((item, i) => {
                                if (item.itemId === itemId) {
                                    newCart.splice(i, 1)
                                }
                            })
                        } else {
                            newCart[i].quantity = newCart[i].quantity - 1;
                            newCart[i].totalPrice = parseInt(newCart[i].totalPrice) - parseInt(price);
                        }
                    }
                })
            } else {
                cartList.forEach((item, i) => {
                    if (item.itemId === itemId) {
                        newCart.splice(i, 1)
                    }
                })
            }
        })
        .then(() => {
            fbConfig.firestore().collection('users').doc(userId)
                .update({
                    cartList: newCart
                })
                .then(() => {
                    dispatch(removeFromCartSuccess());
                    dispatch(checkCart(userId));
                })
                .catch(error => dispatch(removeFromCartError(error.message)))
        })
        .catch(error => dispatch(removeFromCartError(error.message)));
};