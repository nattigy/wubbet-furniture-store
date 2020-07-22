import AuthTypes from "./auth.types";

const authReducers = (state = {}, action) => {
    switch (action.type) {
        case AuthTypes.ANONYMOUS_LOGIN:
            return {
                ...state,
                isAnonymous: true,
            };
        case AuthTypes.NOT_ANONYMOUS_LOGIN:
            return {
                ...state,
                isAnonymous: false
            };
        case AuthTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                isLoggedIn: false,
                loginError: false
            };
        case AuthTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                loginError: false,
                newUser: action.newUser,
                user: action.user
            };
        case AuthTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                loginError: true,
                errorMessage: action.error
            };
        case AuthTypes.LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingIn: false,
                isLoggingOut: true,
                logoutError: false
            };
        case AuthTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingOut: false,
                newUser: {}
            };
        case AuthTypes.LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                logoutError: true,
                errorMessage: action.error
            };
        case AuthTypes.SIGN_UP_REQUEST:
            return {
                ...state,
                isSigningUp: true,
                signUpError: false
            };
        case AuthTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                isSigningUp: false,
                newUser: action.newUser,
                user: action.user
            };
        case AuthTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                signUpError: true,
                errorMessage: action.error
            };
        case AuthTypes.VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            };
        case AuthTypes.VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false,
                isVerified: true
            };
        case AuthTypes.VERIFY_ERROR:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export default authReducers;