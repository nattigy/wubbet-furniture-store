import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {anonymousSignIn} from "./store/auth/auth.utils";
import PreLoaderComponent from "./components/pre-loader/pre-loader.component";
import HeaderComponent from "./components/header/header.component";
import FooterComponent from "./components/footer/footer.component";

const Home = lazy(() => import('./pages/homepage/homepage'));
const SignIn = lazy(() => import('./components/auth/sign-in'));
const SignUp = lazy(() => import('./components/auth/sign-up'));
const ShoppingCart = lazy(() => import('./pages/shopping-cart/shopping-cart.page'));
const WishList = lazy(() => import('./pages/wish-list/wish-list.page'));
const Checkout = lazy(() => import('./components/checkout/checkout'));
const ProductDetail = lazy(() => import('./pages/product-detail/product-detail.page'));
const Store = lazy(() => import('./pages/shopping-page/shopping.page'));
const AddItem = lazy(() => import('./pages/add-item/add-item.page'));
const PrivacyPolicy = lazy(() => import('./pages/privacy-policy-and-terms-of-conditions/privacy-policy'));
const TermsAndConditions = lazy(() => import('./pages/privacy-policy-and-terms-of-conditions/terms-and-conditions'));
const ReturnPolicy = lazy(() => import('./pages/privacy-policy-and-terms-of-conditions/return-policy'));
const Account = lazy(() => import('./components/account/account'));
const MyItems = lazy(() => import('./pages/my-items/my-items.page'));
const EditItem = lazy(() => import('./components/edit-item/edit-item'));

const renderLoader = () => (
    <div className="preloading-home overflow-hidden-y">
        <PreLoaderComponent/>
    </div>
);

const App = props => {
    if (props.isLoggedIn === undefined) {
        return <div className="preloading-home overflow-hidden-y">
            <PreLoaderComponent/>
        </div>
    } else {
        if (!props.isLoggedIn) {
            props.anonymousSignIn();
        }
        return (
            <Router>
                <HeaderComponent/>
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
                        <Route exact path="/account/myitems" component={MyItems}/>
                        <Route exact path="/account/myitem/:id" component={EditItem}/>
                        <Route exact path="/account/:uid" component={Account}/>
                        <Route render={() => <h4>Not Found</h4>}/>
                    </Switch>
                </Suspense>
                <FooterComponent/>
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