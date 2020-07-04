import React, {useEffect} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import CartItem from "./cartItem";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PreLoader from "../preLoader/preLoader";
import {fetchFromCart} from "../../store/actions/itemActions";

const ShoppingCart = props => {
    const {isFetchingFromError, cartItems, isAuthenticated, newUser, user, isFetchingFromCart} = props;

    useEffect(() => {
        props.fetchFromCart({uid: user.uid, type: "CART_LIST"})
    }, []);

    if (isAuthenticated === undefined) {
        return <div className="preloading-home overflow-hidden-y">
            <PreLoader/>
        </div>;
    } else if (isAuthenticated === false) {
        return <Redirect to="/login"/>;
    } else {
        return (
            <div>
                <Header/>
                <div className="container-lg">
                    <div className="my-3 mx-3 border-bottom border-light">
                        <div className="row">
                            <h4 className="col-sm-6 text-nowrap">Shopping Cart</h4>
                            <div className="col-sm-6 text-right">
                                <Link className="checkout-btn btn-danger btn bg-red" to="/checkout">
                                    Proceed to Checkout
                                </Link>
                            </div>
                        </div>
                        <div className="text-muted text-right mr-5 mt-3">Price</div>
                    </div>
                    <div className="py-3">
                        {isFetchingFromCart ? <div className="preloading-cart overflow-hidden-y">
                                <PreLoader/>
                            </div> :
                            cartItems.length === 0 &&
                            <div className="text-center py-5">
                                <h5>No Items In Your Cart!</h5>
                            </div>
                        }
                        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
                        {isFetchingFromError &&
                        <div className="text-center py-5">
                            <h5>No Items In Your Cartt!</h5>
                        </div>
                        }
                    </div>
                    <div className="py-3">
                        <p className="text-right mr-5">Subtotal ({cartItems.length} items):
                            <span className="text-danger font-weight-bold"> {newUser.totalPriceOfCart &&
                            newUser.totalPriceOfCart.toString()} birr</span>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromCart: credentials => dispatch(fetchFromCart(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);