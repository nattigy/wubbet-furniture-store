import React, {useEffect} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import CartItem from "./cartItem";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PreLoader from "../preLoader/preLoader";
import {addItemToCart, deleteFromCart, fetchFromCart} from "../../store/actions/itemActions";
import PathIndicator from "../pathIndicator/pathIndicator";

const ShoppingCart = props => {

    const {
        isFetchingFromError, cartItems, isAuthenticated,
        newUser, user, isFetchingFromCart, isLoggedIn, removingFromCartDone
    } = props;

    useEffect(() => {
        props.fetchFromCart({uid: user ? user.uid : "0", type: "CART_LIST"})
    }, []);

    const delEvent = (e, index) => {
        props.deleteFromCart(e);
        if (removingFromCartDone) {
            cartItems.splice(index, 1)
        }
    };

    if (isAuthenticated === undefined) {
        return <div className="preloading-home overflow-hidden-y">
            <PreLoader/>
        </div>;
    } else if (!isLoggedIn) {
        return <Redirect to="/login"/>;
    } else {
        return (
            <div>
                <Header/>
                <PathIndicator path={[
                    {currentPath: false, pathName: "HOME", pathLink: "/"},
                    {currentPath: true, pathName: "CART", pathLink: props.match.url},
                ]}/>
                <div className="container-lg">
                    <div className="border-bottom border-light d-flex pb-3">
                        <Link className="checkout-btn btn bg-red text-nowrap" to="/checkout">
                            Proceed to Checkout
                        </Link>
                        <div className="text-muted price-tag text-right font-14 w-100 pt-3 pr-5">Price</div>
                    </div>
                    <div className="">
                        {isFetchingFromCart ? <div className="preloading-cart overflow-hidden-y">
                                <PreLoader/>
                            </div> :
                            cartItems.length === 0 &&
                            <div className="text-center py-5">
                                <h5 className="font-14">No Items In Your Cart!</h5>
                            </div>
                        }
                        {cartItems.map((item, index) =>
                            <CartItem
                                key={item.id}
                                item={item}
                                user={user}
                                addToCart={props.addToCart}
                                deleteFromCart={(e) => delEvent(e, index)}
                            />)}
                        {isFetchingFromError &&
                        <div className="text-center py-5">
                            <h5 className="font-14">No Items In Your Cart!</h5>
                        </div>
                        }
                    </div>
                    <div className="py-3">
                        <p className="text-right mr-5 font-16">Subtotal ({cartItems.length} items):
                            <span className="text-danger font-weight-bold font-16"> {newUser.totalPriceOfCart &&
                            newUser.totalPriceOfCart.toString()} ETB</span>
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isAuthenticated: state.auth.isAuthenticated,
        newUser: state.auth.newUser,
        user: state.auth.user,
        cartItems: state.item.cartItems,
        isFetchingFromCart: state.item.isFetchingFromCart,
        isFetchingFromDone: state.item.isFetchingFromDone,
        isFetchingFromError: state.item.isFetchingFromError,
        removingFromCartDone: state.item.removingFromCartDone,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromCart: credentials => dispatch(fetchFromCart(credentials)),
        addToCart: credentials => dispatch(addItemToCart(credentials)),
        deleteFromCart: credentials => dispatch(deleteFromCart(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);