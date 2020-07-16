import fbConfig from "../../firebase/firebase";

export const ANONYMOUS_LOGIN = "ANONYMOUS_LOGIN";
export const NOT_ANONYMOUS_LOGIN = "NOT_ANONYMOUS_LOGIN";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";
export const VERIFY_ERROR = "VERIFY_ERROR";

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const anonymousLogin = () => {
    return {
        type: ANONYMOUS_LOGIN
    }
};

const loginNotAnonymous = () => {
    return {
        type: NOT_ANONYMOUS_LOGIN
    }
};

const receiveLogin = (newUser, authUser) => {
    return {
        type: LOGIN_SUCCESS,
        newUser,
        user: authUser
    };
};

const loginError = error => {
    return {
        type: LOGIN_FAILURE,
        error
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

const logoutError = error => {
    return {
        type: LOGOUT_FAILURE,
        error
    };
};

const requestSignUp = () => {
    return {
        type: SIGN_UP_REQUEST
    };
};

const receiveSignUp = (newUser, authUser) => {
    return {
        type: SIGN_UP_SUCCESS,
        user: authUser,
        newUser
    };
};

const SignUpError = error => {
    return {
        type: SIGN_UP_FAILURE,
        error
    };
};

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};

const verifyError = () => {
    return {
        type: VERIFY_ERROR
    };
};

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
                    .then(newUser => dispatch(receiveLogin(newUser.data(), user)));
                // .then(newUser => console.log("here : newuser : ", newUser.data(), " user : ", user));
            } else {
                dispatch(verifyError())
            }
            dispatch(verifySuccess());
        });
};
