import fbConfig from "../../firebase/firebase";
import {checkCart} from "../cartList/cart-list.utils";
import {checkWishList} from "../wishList/wish-list.utils";
import {
    anonymousLogin,
    loginError,
    loginNotAnonymous,
    logoutError,
    receiveLogin,
    receiveLogout,
    receiveSignUp,
    requestLogin,
    requestLogout,
    requestSignUp,
    SignUpError,
    verifyError,
    verifyRequest,
    verifySuccess
} from "./auth.actions";

export const loginUser = user => dispatch => {
    dispatch(requestLogin());
    let authUser = {};
    fbConfig.auth().setPersistence(fbConfig.auth.Auth.Persistence.SESSION)
        .then(() => {
            return fbConfig.auth().signInWithEmailAndPassword(user.email.toString().trim(), user.password)
        })
        .then(snapShot => {
            authUser = snapShot.user;
            return fbConfig.firestore()
                .doc("users/" + snapShot.user.uid)
                .get()
                .then(user => user.data());
        })
        .then(newUser => {
            dispatch(receiveLogin(newUser, authUser));
            dispatch(loginNotAnonymous());
        })
        .catch(error => dispatch(loginError(error)));
};

export const anonymousSignIn = () => dispatch => {
    fbConfig.auth().signInAnonymously()
        .then(snapShot => {
            return fbConfig.firestore().collection("users").doc(snapShot.user.uid).set({
                cartList: [],
                wishList: [],
            }).then(dispatch(anonymousLogin()))
        })
        .catch(error => console.log(error));
};

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    fbConfig.auth()
        .signOut()
        .then(() => dispatch(receiveLogout()))
        .catch(error => dispatch(logoutError(error)));
};

function formatString(str) {
    return str
        .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))
        .replace(/^[^ ]/g, match => (match.toUpperCase()));
}

export const registerUser = ({email, password, name}) => dispatch => {
    let newUser = {};
    dispatch(requestSignUp());
    fbConfig.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            res.user.updateProfile({
                displayName: name,
            }).then(() => newUser = res);
            return fbConfig.firestore().collection("users").doc(res.user.uid).set({
                name: formatString(name),
                email: email.toString().trim(),
                cartList: [],
                wishList: [],
                role: "USER"
            })
        })
        .then(() => {
            fbConfig.firestore()
                .doc("users/" + newUser.user.uid)
                .get()
                .then(user => {
                    dispatch(receiveSignUp(user.data(), newUser.user));
                    dispatch(loginNotAnonymous());
                });
        }).catch(error => dispatch(SignUpError(error)));
};

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    fbConfig.auth()
        .onAuthStateChanged(user => {
            if (user !== null) {
                if (user.isAnonymous) {
                    dispatch(anonymousLogin())
                } else {
                    dispatch(loginNotAnonymous())
                }
                fbConfig.firestore()
                    .doc("users/" + user.uid)
                    .get()
                    .then(newUser => {
                        dispatch(receiveLogin(newUser.data() ? newUser.data() : {}, user));
                        return newUser.data()
                    })
                    .then(u => {
                        if (u) {
                            dispatch(checkCart(user.uid));
                            dispatch(checkWishList(user.uid));
                        }
                    })
            } else {
                dispatch(verifyError())
            }
            dispatch(verifySuccess());
        });
};