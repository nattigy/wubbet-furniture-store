import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MiniCartItem from "./miniCartItem";
import {deleteFromCart, fetchFromCart} from "../../store/actions/cartActions";
import {connect} from "react-redux";
import PreLoader from "../preLoader/preLoader";

const ShoppingCartMini = props => {

    const {
        isFetchingFromError, cartItems, isAuthenticated, newUser,
        user, isFetchingFromCart, isLoggedIn, removingFromCartDone, totalPrice
    } = props;

    useEffect(() => {
        props.fetchFromCart({uid: props.user ? props.user.uid : "0", type: "CART_LIST"})
    }, []);

    const delEvent = (e, index) => {
        props.deleteFromCart(e);
        if (removingFromCartDone) {
            cartItems.splice(index, 1)
        }
    };

    return (
        <div className={`overflow-hidden shadow-lg cart-popup bg-white mini-cart ${!props.openCart && `d-`}`}>
            <div className="w-100 cart-mini mini-cart">
                {isFetchingFromCart ? <PreLoader/> :
                    cartItems.length === 0 &&
                    <div className="text-center">
                        <h5 className="font-12">No Items In Your Cart!</h5>
                    </div>
                }
                {cartItems.map((item, index) =>
                    <MiniCartItem
                        key={item.id}
                        cartItem={item}
                        user={user}
                        deleteFromCart={(e) => delEvent(e, index)}/>
                )}
                {isFetchingFromError &&
                <div className="text-center py-5">
                    <h5 className="font-14">No Items In Your Cart!</h5>
                </div>
                }
            </div>
            <div className="text-left p-2 mini-cart">
                <p className="my-1 font-14 mini-cart">{cartItems.length} items(s) selected</p>
                <p className="font-14 mb-0 mini-cart">
                    <strong className="mini-cart">SUBTOTAL: {totalPrice} ETB</strong></p>
            </div>
            <div className="btn-group w-100">
                <Link to="/cart" className="btn rounded-0 bg-dark-custom text-white">View Cart</Link>
                <Link to="/checkout" className="btn rounded-0 bg-red text-white">
                    Checkout <FontAwesomeIcon icon={faArrowCircleRight} color="#fff"/></Link>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isAuthenticated: state.auth.isAuthenticated,
        newUser: state.auth.newUser,
        user: state.auth.user,
        cartItems: state.cart.cartItems,
        isFetchingFromCart: state.cart.isFetchingFromCart,
        isFetchingFromDone: state.cart.isFetchingFromDone,
        isFetchingFromError: state.cart.isFetchingFromError,
        removingFromCartDone: state.cart.removingFromCartDone,
        totalPrice: state.cart.totalPrice,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromCart: credentials => dispatch(fetchFromCart(credentials)),
        deleteFromCart: credentials => dispatch(deleteFromCart(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartMini);