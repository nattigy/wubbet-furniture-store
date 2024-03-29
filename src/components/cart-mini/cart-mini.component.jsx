import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import CartItemMini from "../cart-item-mini/cart-item-mini.component";

import {deleteFromCart, fetchFromCart} from "../../store/cartList/cart-list.utils";

import "./cart-mini.style.sass"

const CartMini = props => {

    const {cartItems, user,totalPrice, localization} = props;

    const delEvent = (e, index) => {
        props.deleteFromCart(e);
        cartItems.splice(index, 1);
    };

    return (
        <div className="overflow-hidden shadow-lg cart-popup bg-white mini-cart">
            <div className="w-100 cart-mini mini-cart">
                {
                    cartItems.length === 0 &&
                    <div className="text-center py-5">
                        <h5 className="font-12">{localization.no_items_bag}</h5>
                    </div>
                }
                {
                    cartItems.map((item, index) =>
                        <CartItemMini
                            key={item.id}
                            cartItem={item}
                            user={user}
                            deleteFromCart={(e) => delEvent(e, index)}
                        />
                    )
                }
            </div>
            <div className="text-left p-2 mini-cart">
                <p className="my-1 font-14 mini-cart">{cartItems.length} item(s) selected</p>
                <p className="font-14 mb-0 mini-cart">
                    <strong className="mini-cart">SUBTOTAL: {totalPrice} ETB</strong>
                </p>
            </div>
            <div className="btn-group w-100">
                <Link to="/cart"
                      className="btn rounded-0 bg-red-custom text-white">{localization.my_shopping_bag}</Link>
                <Link to="/checkout" className="btn rounded-0 text-white bg-red">
                    {localization.checkout} <FontAwesomeIcon icon={faArrowCircleRight} color="#fff"/>
                </Link>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        cartItems: state.cartList.cartItems,
        isFetchingFromCart: state.cartList.isFetchingFromCart,
        isFetchingFromDone: state.cartList.isFetchingFromDone,
        isFetchingFromError: state.cartList.isFetchingFromError,
        removingFromCartDone: state.cartList.removingFromCartDone,
        totalPrice: state.cartList.totalPrice,
        localization: state.localization.chosenLanguage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromCart: credentials => dispatch(fetchFromCart(credentials)),
        deleteFromCart: credentials => dispatch(deleteFromCart(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartMini);