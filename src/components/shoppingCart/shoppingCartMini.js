import React from "react";
import {Link} from "react-router-dom";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MiniCartItem from "./miniCartItem";

const ShoppingCartMini = props => {
    return (
        <div className={`overflow-hidden shadow-lg cart-popup bg-white mini-cart ${!props.openCart && `d-none`}`}>
            <div className="w-100 cart-mini overflow-auto mini-cart">
                {/*{props.cartList.map(item => (*/}
                {/*    <MiniCartItem key={item.id} cartItem={item}/>*/}
                {/*))}*/}
                <MiniCartItem/>
                <MiniCartItem/>
            </div>
            <div className="text-left p-2 mini-cart">
                <p className="mb-0 font-14 mini-cart">3 items(s) selected</p>
                <p className="font-14 mb-0 mini-cart"><strong className="mini-cart">SUBTOTAL: $2345.0</strong></p>
            </div>
            <div className="btn-group w-100">
                <Link to="/cart" className="btn rounded-0 bg-dark-custom text-white">View Cart</Link>
                <Link to="/checkout" className="btn rounded-0 bg-red text-white">
                    Checkout <FontAwesomeIcon icon={faArrowCircleRight} color="#fff"/></Link>
            </div>
        </div>
    );
};

export default ShoppingCartMini;