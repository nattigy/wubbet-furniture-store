import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {Provider} from 'react-redux';
import firebase from "./firebase/firebase";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import configureStore from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/main.css"
import "./assets/css/headerStyle.css"
import "./assets/css/exploreCard.css"
import "./assets/css/footerStyle.css"
import "./assets/css/productStyle.css"
import "./assets/css/signInAndSignUpStyle.css"
import "./assets/css/cartStyle.css"
import "./assets/css/checkoutStyle.css"
import "./assets/css/productDetailStyle.css"
import "./assets/css/homeStyle.css"
import "./assets/css/storeStyle.css"
import "./assets/css/text.css"
import "./assets/css/addItemStyle.css"

const store = configureStore();
const rrfConfig = {
    useFirestoreForProfile: false,
    attachAuthIsReady: true
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
};

// function AuthIsLoaded({children}) {
//     const auth = useSelector(state => state.firebase.auth);
//     if (!isLoaded(auth)) return <div className="preloading-explore-cards overflow-hidden-y">
//         <PreLoaderComponent/>
//     </div>;
//     return children
// }

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App/>
            {/*<AuthIsLoaded>*/}
            {/*</AuthIsLoaded>*/}
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);
