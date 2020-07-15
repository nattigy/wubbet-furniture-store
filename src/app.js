import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {anonymousSignIn} from "./store/actions/authActions";
import PreLoader from "./components/preLoader/preLoader";
import EditItem from "./components/editItem/editItem";

const Home = lazy(() => import('./components/home/home'));
const SignIn = lazy(() => import('./components/auth/signIn'));
const SignUp = lazy(() => import('./components/auth/signUp'));
const ShoppingCart = lazy(() => import('./components/shoppingCart/shoppingCart'));
const WishList = lazy(() => import('./components/wishList/wishList'));
const Checkout = lazy(() => import('./components/checkout/checkout'));
const ProductDetail = lazy(() => import('./components/productDetail/productDetail'));
const Store = lazy(() => import('./components/store/store'));
const AddItem = lazy(() => import('./components/addItem/addItem'));
const PrivacyPolicy = lazy(() => import('./components/privacyPolicyAndTermsOfConditions/privacyPolicy'));
const TermsAndConditions = lazy(() => import('./components/privacyPolicyAndTermsOfConditions/TermsAndConditions'));
const ReturnPolicy = lazy(() => import('./components/privacyPolicyAndTermsOfConditions/ReturnPolicy'));
const Account = lazy(() => import('./components/account/account'));
const MyItems = lazy(() => import('./components/myItems/myItems'));

const renderLoader = () => (
    <div className="preloading-home overflow-hidden-y">
        <PreLoader/>
    </div>
);

const App = props => {
    if (props.isLoggedIn === undefined) {
        return <div className="preloading-home overflow-hidden-y">
            <PreLoader/>
        </div>
    } else {
        if (!props.isLoggedIn) {
            props.anonymousSignIn();
        }
        return (
            <Router>
                <Suspense fallback={renderLoader()}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={SignIn}/>
                        <Route exact path="/register" component={SignUp}/>
                        <Route exact path="/cart" component={ShoppingCart}/>
                        <Route exact path="/wishlist" component={WishList}/>
                        <Route exact path="/checkout" component={Checkout}/>
                        <Route exact path="/item/:id" component={ProductDetail}/>
                        <Route exact path="/items/:category/:name" component={Store}/>
                        <Route exact path="/items/:category/:name/:sub_category" component={Store}/>
                        <Route exact path="/items/:category/_/:sub_category" component={Store}/>
                        <Route exact path="/category/:category" component={Store}/>
                        <Route exact path="/privacy_policy" component={PrivacyPolicy}/>
                        <Route exact path="/terms_and_conditions" component={TermsAndConditions}/>
                        <Route exact path="/return_policy" component={ReturnPolicy}/>
                        <Route exact path="/additem" component={AddItem}/>
                        <Route exact path="/account/my-items" component={MyItems}/>
                        <Route exact path="/account/myitem/:id" component={EditItem}/>
                        <Route exact path="/account/:uid" component={Account}/>
                    </Switch>
                </Suspense>
            </Router>
        );
    }
};

const mapStateToProps = state => {
    return {
        isVerified: state.auth.isVerified,
        isLoggedIn: state.auth.isLoggedIn
    }
};

const mapStateToDispatch = dispatch => {
    return {
        anonymousSignIn: () => dispatch(anonymousSignIn())
    }
};

export default connect(mapStateToProps, mapStateToDispatch)(App);