import React, {Fragment} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import CartItem from "./cartItem";

const ShoppingCart = () => {
    return (
        <Fragment>
            <Header/>
            <div className="container-lg">
                <div className="my-3 mx-3 border-bottom border-light">
                    <h4>Shopping Cart</h4>
                    <div className="text-muted text-right mr-5">Price</div>
                </div>
                <div className="py-3">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className="py-3">
                    <p className="text-right mr-5">Subtotal (2 items):
                        <span className="text-danger font-weight-bold"> $243.00</span></p>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
};

export default ShoppingCart;