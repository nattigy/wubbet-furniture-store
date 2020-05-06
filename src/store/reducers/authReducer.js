import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    VERIFY_ERROR,
    VERIFY_REQUEST,
    VERIFY_SUCCESS
} from "./../actions/authActions";

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                isAuthenticated: true,
                newUser: action.newUser,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                isAuthenticated: false,
                loginError: true,
                errorMessage: action.error
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoggingIn: false,
                isLoggingOut: true,
                logoutError: false
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                isAuthenticated: false,
                newUser: {}
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                logoutError: true,
                errorMessage: action.error
            };
        case SIGN_UP_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
                loginError: false
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                isAuthenticated: true,
                newUser: action.newUser,
                user: action.user
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoggingIn: false,
                isAuthenticated: false,
                signUpError: true,
                errorMessage: action.error
            };
        case VERIFY_REQUEST:
            return {
                ...state,
                isVerifying: true,
                verifyingError: false
            };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false,
                isVerified: true
            };
        case VERIFY_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};