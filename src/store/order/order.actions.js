import OrderTypes from "./order.types";

export const sendOrderRequest = () => {
    return {
        type: OrderTypes.SEND_ORDER_REQUEST
    };
};

export const sendOrderSuccess = () => {
    return {
        type: OrderTypes.SEND_ORDER_SUCCESS
    }
};

export const sendOrderError = error => {
    return {
        type: OrderTypes.SEND_ORDER_FAILURE,
        error: error.message
    }
};