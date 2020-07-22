import {sendOrderError, sendOrderRequest, sendOrderSuccess} from "./order.actions";

export const orderFurniture = formData => dispatch => {
    dispatch(sendOrderRequest());
    const scriptURL = `https://script.google.com/macros/s/AKfycbxip7EY32Y_lms7t0fI3tC6IqmY2PEjxdxLJD3ruMZSh8NjGco/exec?${formData}`;
    fetch(scriptURL, {mode: 'no-cors'})
        .then(() => dispatch(sendOrderSuccess()))
        .catch(error => dispatch(sendOrderError(error)))
};