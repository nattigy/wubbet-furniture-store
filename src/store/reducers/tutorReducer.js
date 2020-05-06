import {
    TUTOR_ORDER_ERROR,
    TUTOR_ORDER_REQUEST,
    TUTOR_ORDER_SUCCESS,
    TUTOR_SIGN_UP_FAILURE,
    TUTOR_SIGN_UP_REQUEST,
    TUTOR_SIGN_UP_SUCCESS
} from "./../actions/tutorActions";

export default (
    state = {
        isTutorSigningUp: false,
        isTutorSignedUp: false,
        isTutorSignUpError: false,
        isOrdering: false,
        isOrdered: false,
        isError: false,
        error: {}
    },
    action
) => {
    switch (action.type) {
        case TUTOR_SIGN_UP_REQUEST:
            return {
                ...state,
                isTutorSigningUp: true,
                isTutorSignedUp: false,
                isTutorSignUpError: false,
            };
        case TUTOR_SIGN_UP_SUCCESS:
            return {
                ...state,
                isTutorSigningUp: false,
                isTutorSignedUp: true,
                isTutorSignUpError: false,
            };
        case TUTOR_SIGN_UP_FAILURE:
            return {
                ...state,
                isTutorSigningUp: false,
                isTutorSignedUp: false,
                isTutorSignUpError: true,
            };
        case TUTOR_ORDER_REQUEST:
            return {
                isOrdering: true,
                isOrdered: false,
                isError: false,
            };
        case TUTOR_ORDER_SUCCESS:
            return {
                isOrdering: false,
                isOrdered: true,
                isError: false,
            };
        case TUTOR_ORDER_ERROR:
            return {
                isOrdering: false,
                isOrdered: false,
                isError: true,
            };
        default:
            return state;
    }
};