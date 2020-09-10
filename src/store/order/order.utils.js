import fbConfig from "../../firebase/firebase";

import {
    fetchOrderError,
    fetchOrderRequest,
    fetchOrderSuccess,
    sendOrderError,
    sendOrderRequest,
    sendOrderSuccess
} from "./order.actions";

export const orderFurniture = ({
                                   formData, user_id, fullName, address, city, sub_city, woreda, house_no, telephone,
                                   order_notes, total_price, ordered_items, payment_method
                               }) => dispatch => {
    dispatch(sendOrderRequest());

    const scriptURL = `https://script.google.com/macros/s/AKfycbxip7EY32Y_lms7t0fI3tC6IqmY2PEjxdxLJD3ruMZSh8NjGco/exec?${formData}`;

    fbConfig.firestore().collection("orders")
        .add({
            user_id, fullName, address, city, sub_city, woreda, house_no, telephone,
            order_notes, total_price, ordered_items, payment_method,
            order_date: new Date()
        })
        .then(snapshot => {
            fetch(`${scriptURL}&order_id=${snapshot.id}`, {mode: 'no-cors'})
                .then(() => dispatch(sendOrderSuccess(snapshot.id)))
                .catch(error => dispatch(sendOrderError(error)))
        })
        .catch(error => console.log(error))
};

export const fetchOrders = ({user_id}) => dispatch => {
    dispatch(fetchOrderRequest());
    let items = [];
    fbConfig.firestore().collection('orders')
        .where("user_id", "==", user_id)
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let data = doc.data();
                data.id = doc.id;
                items.push(data)
            });
            dispatch(fetchOrderSuccess(items))
        })
        .catch(error => dispatch(fetchOrderError(error.message)))
};
