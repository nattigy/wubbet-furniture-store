import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import {applyMiddleware, createStore} from "redux";
import {verifyAuth} from "./store/actions/authActions";

export default function configureStore() {
    const initialState = {};
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    store.dispatch(verifyAuth());
    return store;
}