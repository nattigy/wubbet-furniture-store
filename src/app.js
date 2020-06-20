import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./componenets/home/home";
import SignIn from "./componenets/auth/signIn";
import SignUp from "./componenets/auth/signUp";
import ShoppingCart from "./componenets/shoppingCart/shoppingCart";
import WishList from "./componenets/wishList/wishList";
import Checkout from "./componenets/checkout/checkout";
import ProductDetail from "./componenets/productDetail/productDetail";
import Store from "./componenets/store/store";
import AddItem from "./componenets/addItem/addItem";
import {PrivacyPolicy} from "./componenets/privacyPolicyAndTermsOfConditions/privacyPolicy";
import {TermsAndConditions} from "./componenets/privacyPolicyAndTermsOfConditions/TermsAndConditions";
import {ReturnPolicy} from "./componenets/privacyPolicyAndTermsOfConditions/ReturnPolicy";
import {connect} from "react-redux";
import {PreLoader} from "./componenets/preLoader/preLoader";
import {anonymousSignIn} from "./store/actions/authActions";

const App = props => {
    if (props.isLoggedIn === undefined) {
        return <div className="preloading-home overflow-hidden-y">
            <PreLoader/>
        </div>
    } else {
        if (!props.isLoggedIn) {
            props.anonymousSignIn()
        }
        return (
            <Fragment>
                <Router>
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
                        <Route exact path="/additem" component={AddItem}/>
                        <Route exact path="/privacy_policy" component={PrivacyPolicy}/>
                        <Route exact path="/terms_and_conditions" component={TermsAndConditions}/>
                        <Route exact path="/return_policy" component={ReturnPolicy}/>
                    </Switch>
                </Router>
            </Fragment>
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