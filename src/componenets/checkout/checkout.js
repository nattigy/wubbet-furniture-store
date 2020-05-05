import React, {Fragment} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";

const Checkout = () => {
    return (
        <Fragment>
            <Header/>
            <div>
                <div className="">
                    <div className="container-lg py-3">
                        <h4>Checkout</h4>
                    </div>
                </div>

                <div className="">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-md-7 p-4">
                                <div className="">
                                    <div className="mb-4">
                                        <h5 className="">Billing address</h5>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control w-100" type="text" name="first-name"
                                               placeholder="First Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control w-100" type="text" name="last-name"
                                               placeholder="Last Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control w-100" type="email" name="email"
                                               placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control w-100" type="text" name="address"
                                               placeholder="Address"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control w-100" type="text" name="city"
                                               placeholder="City"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control w-100" type="text" name="country"
                                               placeholder="Country"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control w-100" type="text" name="zip-code"
                                               placeholder="ZIP Code"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control w-100" type="tel" name="tel"
                                               placeholder="Telephone"/>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="my-4">
                                        <h5 className="title">Shiping address</h5>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <div className="form-group">
                                                <input className="form-control w-100" type="text" name="first-name"
                                                       placeholder="First Name"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control w-100" type="text" name="last-name"
                                                       placeholder="Last Name"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control w-100" type="email" name="email"
                                                       placeholder="Email"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control w-100" type="text" name="address"
                                                       placeholder="Address"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control w-100" type="text" name="city"
                                                       placeholder="City"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control w-100" type="text" name="country"
                                                       placeholder="Country"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control w-100" type="text" name="zip-code"
                                                       placeholder="ZIP Code"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control w-100" type="tel" name="tel"
                                                       placeholder="Telephone"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <textarea className="form-control w-100" placeholder="Order Notes"/>
                                </div>
                            </div>

                            <div className="col-md-5 border border-light p-4">
                                <div className="text-center mb-4">
                                    <h5 className="">Your Order</h5>
                                </div>
                                <div className="order-summary">
                                    <div className="d-table w-100 my-4">
                                        <div className="d-table-cell"><strong>PRODUCT</strong></div>
                                        <div className="d-table-cell text-right"><strong>TOTAL</strong></div>
                                    </div>
                                    <div className="order-products my-3">
                                        <div className="d-table w-100">
                                            <div className="d-table-cell text-muted">1x Product Name Goes Here</div>
                                            <div className="d-table-cell text-right text-muted">$980.00</div>
                                        </div>
                                        <div className="d-table w-100 my-3">
                                            <div className="d-table-cell text-muted">2x Product Name Goes Here</div>
                                            <div className="d-table-cell text-right text-muted">$980.00</div>
                                        </div>
                                    </div>
                                    <div className="d-table w-100 my-3">
                                        <div className="d-table-cell text-muted">Shiping</div>
                                        <div className="d-table-cell text-right"><strong>FREE</strong></div>
                                    </div>
                                    <div className="d-table w-100 my-3">
                                        <div className="d-table-cell"><strong>TOTAL</strong></div>
                                        <div className="d-table-cell text-right"><strong
                                            className="order-total text-danger font-weight-bolder">$2940.00</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="input-radio">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio1" name="customRadio"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio1">Direct Bank
                                                Transfer</label>
                                        </div>
                                        <div className="">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div className="input-radio">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio2">Cheque
                                                Payment</label>
                                        </div>
                                        <div className="">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div className="input-radio">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id="customRadio3" name="customRadio"
                                                   className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadio3">Paypal
                                                System</label>
                                        </div>
                                        <div className="">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                        <input type="checkbox" className="custom-control-input"
                                               id="customControlInline"/>
                                        <label className="custom-control-label" htmlFor="customControlInline">
                                            I've read and accept the <a className="text-muted" href="/">terms &
                                            conditions</a>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-danger bg-red w-100 my-3">Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
};

export default Checkout;