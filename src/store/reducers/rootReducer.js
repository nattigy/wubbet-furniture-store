import {combineReducers} from "redux";
import auth from "./authReducer";
import item from "./itemReducer";
import search from "./searchReducers";
import {firestoreReducer as firestore} from "redux-firestore"
import {firebaseReducer as firebase} from "react-redux-firebase";

export default combineReducers({
    auth,
    item,
    search,
    firestore,
    firebase
});
