import OrderTypes from "./order.types";

export const sendOrderRequest = () => {
    return {
        type: OrderTypes.SEND_ORDER_REQUEST
    };
};

export const sendOrderSuccess = orderId => {
    return {
        type: OrderTypes.SEND_ORDER_SUCCESS,
        orderId
    }
};

export const sendOrderError = error => {
    return {
        type: OrderTypes.SEND_ORDER_FAILURE,
        error: error.message
    }
};

export const fetchOrderRequest = () => {
    return {
        type: OrderTypes.FETCH_ORDER_REQUEST
    };
};

export const fetchOrderSuccess = order => {
    return {
        type: OrderTypes.FETCH_ORDER_SUCCESS,
        order
    }
};

export const fetchOrderError = error => {
    return {
        type: OrderTypes.FETCH_ORDER_FAILURE,
        error: error.message
    }
};