import React, {lazy, Suspense} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {connect} from "react-redux"

import {anonymousSignIn} from "./store/auth/auth.utils"

import PreLoader from "./components/pre-loader/pre-loader.component"
import CategoryPage from "./pages/category-page/category-page";
import SubCategory from "./pages/sub-category/sub-category.page";

const TermsAndConditions = lazy(() => import("./pages/privacy-policy-and-terms-of-conditions/terms-and-conditions"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy-and-terms-of-conditions/privacy-policy"));
const ReturnPolicy = lazy(() => import("./pages/privacy-policy-and-terms-of-conditions/return-policy"));
const ProductDetail = lazy(() => import("./pages/product-detail/product-detail.page"));
const ShoppingCart = lazy(() => import("./pages/shopping-cart/shopping-cart.page"));
const ShoppingPage = lazy(() => import("./pages/shopping-page/shopping.page"));
const AddItemPage = lazy(() => import("./pages/add-item/add-item.page"));
const WishList = lazy(() => import("./pages/wish-list/wish-list.page"));
const EditItem = lazy(() => import("./components/edit-item/edit-item"));
const Checkout = lazy(() => import("./pages/checkout/checkout"));
const MyItems = lazy(() => import("./pages/my-items/my-items.page"));
const Account = lazy(() => import("./components/account/account"));
const HomePage = lazy(() => import("./pages/homepage/homepage"));
const SignIn = lazy(() => import("./components/auth/sign-in"));
const SignUp = lazy(() => import("./components/auth/sign-up"));

const renderLoader = () => (
    <div className="preloading-home overflow-hidden-y">
        <PreLoader/>
    </div>
);

const App = props => {

    const {isLoggedIn, isVerified} = props;

    // if (isLoggedIn === undefined) {
    //     return (
    //         <div className="preloading-home overflow-hidden-y">
    //             <PreLoader/>
    //         </div>
    //     );
    // } else {
    //     if (isLoggedIn === false && isVerified === false) {
    //         props.anonymousSignIn();
    //     }
        return (
            <Router>
                <Suspense fallback={renderLoader()}>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/login" component={SignIn}/>
                        <Route exact path="/register" component={SignUp}/>
                        <Route exact path="/cart" component={ShoppingCart}/>
                        <Route exact path="/wishlist" component={WishList}/>
                        <Route exact path="/checkout" component={Checkout}/>
                        <Route exact path="/item/:id" component={ProductDetail}/>
                        <Route exact path="/cat/:category" component={CategoryPage}/>
                        <Route exact path="/cat/:category/:subCategory" component={SubCategory}/>
                        <Route exact path="/search/items/:item_name" component={ShoppingPage}/>
                        {/*<Route exact path="/items/:category/:name/:sub_category" component={ShoppingPage}/>*/}
                        {/*<Route exact path="/items/:category/_/:sub_category" component={ShoppingPage}/>*/}
                        {/*<Route exact path="/category/:category" component={ShoppingPage}/>*/}
                        <Route exact path="/privacy_policy" component={PrivacyPolicy}/>
                        <Route exact path="/terms_and_conditions" component={TermsAndConditions}/>
                        <Route exact path="/return_policy" component={ReturnPolicy}/>
                        <Route exact path="/additem" component={AddItemPage}/>
                        <Route exact path="/account/myitems" component={MyItems}/>
                        <Route exact path="/account/myitem/:id" component={EditItem}/>
                        <Route exact path="/account/:uid" component={Account}/>
                        <Route render={() => <h4>Not Found</h4>}/>
                    </Switch>
                </Suspense>
            </Router>
        );
    // }
};

const mapStateToProps = state => {
    return {
        isVerified: state.auth.isVerified,
        isLoggedIn: state.auth.isLoggedIn,
    }
};

const mapStateToDispatch = dispatch => {
    return {
        anonymousSignIn: () => dispatch(anonymousSignIn())
    }
};

export default connect(mapStateToProps, mapStateToDispatch)(App);