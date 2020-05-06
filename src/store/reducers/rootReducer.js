import {combineReducers} from "redux";
import auth from "./authReducer";
import tutor from "./tutorReducer";
import search from "./searchReducer";
import {firestoreReducer as firestore} from "redux-firestore"
import {firebaseReducer as firebase} from "react-redux-firebase";

export default combineReducers({
    auth,
    tutor,
    search,
    firestore,
    firebase
});
