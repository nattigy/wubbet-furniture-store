import AuthTypes from "./auth.types";

export const requestLogin = () => {
    return {
        type: AuthTypes.LOGIN_REQUEST
    };
};

export const anonymousLogin = () => {
    return {
        type: AuthTypes.ANONYMOUS_LOGIN
    }
};

export const loginNotAnonymous = () => {
    return {
        type: AuthTypes.NOT_ANONYMOUS_LOGIN
    }
};

export const receiveLogin = (newUser, authUser) => {
    return {
        type: AuthTypes.LOGIN_SUCCESS,
        newUser,
        user: authUser
    };
};

export const loginError = error => {
    return {
        type: AuthTypes.LOGIN_FAILURE,
        error
    };
};

export const requestLogout = () => {
    return {
        type: AuthTypes.LOGOUT_REQUEST
    };
};

export const receiveLogout = () => {
    return {
        type: AuthTypes.LOGOUT_SUCCESS
    };
};

export const logoutError = error => {
    return {
        type: AuthTypes.LOGOUT_FAILURE,
        error
    };
};

export const requestSignUp = () => {
    return {
        type: AuthTypes.SIGN_UP_REQUEST
    };
};

export const receiveSignUp = (newUser, authUser) => {
    return {
        type: AuthTypes.SIGN_UP_SUCCESS,
        user: authUser,
        newUser
    };
};

export const SignUpError = error => {
    return {
        type: AuthTypes.SIGN_UP_FAILURE,
        error
    };
};

export const verifyRequest = () => {
    return {
        type: AuthTypes.VERIFY_REQUEST
    };
};

export const verifySuccess = () => {
    return {
        type: AuthTypes.VERIFY_SUCCESS
    };
};

export const verifyError = () => {
    return {
        type: AuthTypes.VERIFY_ERROR
    };
};
