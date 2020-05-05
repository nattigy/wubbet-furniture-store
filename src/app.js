import React, {Fragment} from "react";
import {BrowserRouter as Router} from "react-router-dom"
import {Route, Switch} from "react-router";
import Home from "./componenets/home/home";
import SignIn from "./componenets/auth/signIn";
import SignUp from "./componenets/auth/signUp";
import ShoppingCart from "./componenets/shoppingCart/shoppingCart";
import WishList from "./componenets/wishList/wishList";

const App = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={SignIn}/>
                    <Route exact path="/register" component={SignUp}/>
                    <Route exact path="/cart" component={ShoppingCart}/>
                    <Route exact path="/wishlist" component={WishList}/>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;