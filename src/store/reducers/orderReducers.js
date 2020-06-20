import {SEND_ORDER_FAILURE, SEND_ORDER_REQUEST, SEND_ORDER_SUCCESS,} from "./../actions/orderActions";

export default (state = {}, action) => {
    switch (action.type) {
        case SEND_ORDER_REQUEST:
            return {
                ...state,
                isSending: true,
                sendingSuccess: false,
                sendingError: false
            };
        case SEND_ORDER_SUCCESS:
            return {
                ...state,
                isSending: false,
                sendingSuccess: true,
                sendingError: false
            };
        case SEND_ORDER_FAILURE:
            return {
                ...state,
                isSending: false,
                sendingSuccess: false,
                sendingError: true,
                errorMessage: action.error
            };
        default:
            return state;
    }
};