import {combineReducers} from "redux";

import authReducers from "./auth/auth.reducers";
import itemReducers from "./item/item.reducers";
import searchReducers from "./search/search.reducers";
import orderReducers from "./order/order.reducers";
import cartListReducers from "./cartList/cart-list.reducers";
import wishListReducers from "./wishList/wish-list.reducers";
import pageReducers from "./ui/hide-header-and-footer";

import {firestoreReducer} from "redux-firestore"
import {firebaseReducer} from "react-redux-firebase";

export default combineReducers({
    auth: authReducers,
    item: itemReducers,
    search: searchReducers,
    order: orderReducers,
    cartList: cartListReducers,
    wishList: wishListReducers,
    ui: pageReducers,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
