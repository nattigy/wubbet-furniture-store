import {combineReducers} from "redux";
import auth from "./authReducer";
import item from "./itemReducer";
import search from "./searchReducers";
import order from "./orderReducers";
import nav from "./navReducers";
import cart from "./cartReducer";
import {firestoreReducer as firestore} from "redux-firestore"
import {firebaseReducer as firebase} from "react-redux-firebase";

export default combineReducers({
    auth,
    item,
    search,
    order,
    nav,
    cart,
    firestore,
    firebase
});
