import fbConfig from "../../firebase/firebase";

import {sendOrderError, sendOrderRequest, sendOrderSuccess} from "./order.actions";

export const orderFurniture = ({
                                   formData, user_id, fullName, address, city, telephone,
                                   order_notes, total_price, ordered_items, payment_method
                               }) => dispatch => {
    dispatch(sendOrderRequest());

    const scriptURL = `https://script.google.com/macros/s/AKfycbxip7EY32Y_lms7t0fI3tC6IqmY2PEjxdxLJD3ruMZSh8NjGco/exec?${formData}`;

    fetch(scriptURL, {mode: 'no-cors'})
        .then(() => {
                fbConfig.firestore().collection("orders")
                    .add({
                        user_id, fullName, address, city, telephone,
                        order_notes, total_price, ordered_items, payment_method
                    })
                    .then(snapshot => dispatch(sendOrderSuccess(snapshot.id))
                    )
                    .catch(error => console.log(error))
            }
        )
        .catch(error => dispatch(sendOrderError(error)))
};