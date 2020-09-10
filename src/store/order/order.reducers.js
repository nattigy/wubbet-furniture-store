import OrderTypes from "./order.types";

const orderReducers = (state = {}, action) => {
    switch (action.type) {
        case OrderTypes.SEND_ORDER_REQUEST:
            return {
                ...state,
                isSending: true,
                sendingSuccess: false,
                sendingError: false
            };
        case OrderTypes.SEND_ORDER_SUCCESS:
            return {
                ...state,
                isSending: false,
                sendingSuccess: true,
                sendingError: false,
                orderId: action.orderId
            };
        case OrderTypes.SEND_ORDER_FAILURE:
            return {
                ...state,
                isSending: false,
                sendingSuccess: false,
                sendingError: true,
                errorMessage: action.error
            };
        case OrderTypes.FETCH_ORDER_REQUEST:
            return {
                ...state,
                isFetching: true,
                fetchingSuccess: false,
                fetchingError: false
            };
        case OrderTypes.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fetchingSuccess: true,
                fetchingError: false,
                order: action.order
            };
        case OrderTypes.FETCH_ORDER_FAILURE:
            return {
                ...state,
                isFetching: false,
                fetchingSuccess: false,
                fetchingError: true,
                errorMessage: action.error
            };
        default:
            return state;
    }
};

export default orderReducers;