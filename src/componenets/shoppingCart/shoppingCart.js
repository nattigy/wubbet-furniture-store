import React, {Fragment} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import CartItem from "./cartItem";
import {Link} from "react-router-dom";

const ShoppingCart = () => {
    return (
        <Fragment>
            <Header/>
            <div className="container-lg">
                <div className="my-3 mx-3 border-bottom border-light">
                    <div className="row">
                        <h4 className="col-sm-6 text-nowrap">Shopping Cart</h4>
                        <div className="col-sm-6 text-right">
                            <Link className="checkout-btn btn-danger btn bg-red" to="/checkout">Proceed to
                                Checkout</Link>
                        </div>
                    </div>
                    <div className="text-muted text-right mr-5 mt-3">Price</div>
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