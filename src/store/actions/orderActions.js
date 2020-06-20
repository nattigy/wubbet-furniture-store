export const SEND_ORDER_REQUEST = "SEND_ORDER_REQUEST";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILURE = "SEND_ORDER_FAILURE";

const sendOrderRequest = () => {
    return {
        type: SEND_ORDER_REQUEST
    };
};

const sendOrderSuccess = () => {
    return {
        type: SEND_ORDER_SUCCESS
    }
};

const sendOrderError = error => {
    return {
        type: SEND_ORDER_FAILURE,
        error: error.message
    }
};

export const orderFurniture = formData => dispatch => {
    dispatch(sendOrderRequest());
    const scriptURL = `https://script.google.com/macros/s/AKfycbxip7EY32Y_lms7t0fI3tC6IqmY2PEjxdxLJD3ruMZSh8NjGco/exec?${formData}`;
    fetch(scriptURL, {mode: 'no-cors'})
        .then(() => dispatch(sendOrderSuccess()))
        .catch(error => dispatch(sendOrderError(error)))
};