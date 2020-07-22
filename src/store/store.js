import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import {applyMiddleware, createStore} from "redux";
import {verifyAuth} from "./auth/auth.utils";

export default function configureStore() {
    const initialState = {};
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    store.dispatch(verifyAuth());
    return store;
}