import React, {Fragment, useEffect, useState} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import {Link} from "react-router-dom";
import {fetchFromCart} from "../../store/actions/itemActions";
import {connect} from "react-redux";
import {PreLoader} from "../preLoader/preLoader";
import {Redirect} from "react-router";
import {orderFurniture} from "../../store/actions/orderActions";
import Dialog from "@material-ui/core/Dialog/Dialog";

const Checkout = props => {
    const {
        isFetchingFromError, cartItems, isAuthenticated,
        newUser, user, isFetchingFromCart,
        isSending, sendingSuccess
    } = props;

    const [fullName, setFullName] = useState("");
    const [user_id] = useState(user.uid);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [telephone, setTelephone] = useState("");
    const [order_notes, setOrder_notes] = useState("");
    const [total_price] = useState(newUser.totalPriceOfCart);
    const [ordered_items] = useState(newUser.cartList);
    const [payment_method, setPayment_method] = useState("Direct Bank Transfer");
    const [orderSentConfirmation, setOrderSentConfirmation] = useState(true);
    const [direct_bank, setDirect_bank] = useState(true);
    const [amole, setAmole] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    useEffect(() => {
        props.fetchFromCart({uid: user.uid});
    }, []);

    const submitCheckout = e => {
        e.preventDefault();
        props.orderFurniture(`?&fullName=${fullName}&user_id=${user_id}&address=${address}&city=${city}&telephone=${telephone}&order_notes=${order_notes}&total_price=${total_price}&ordered_items=${ordered_items}&payment_method=${payment_method}`);
    };

    if (isAuthenticated === undefined) {
        return <div className="preloading-home overflow-hidden-y">
            <PreLoader/>
        </div>;
    } else if (isAuthenticated === false) {
        return <Redirect to="/login"/>;
    } else {
        return (
            <Fragment>
                {isSending &&
                <Dialog open={true}>
                    <div className="w-100 px-5 py-3 text-center overflow-hidden" color="red">
                        <PreLoader/>
                    </div>
                </Dialog>
                }
                {sendingSuccess &&
                <Dialog open={orderSentConfirmation}>
                    <div className="w-100 px-5 py-3 text-center text-success" color="red">
                        Your order is sent!
                    </div>
                    <div className="text-right px-3 pb-2">
                        <button className="btn" onClick={() => setOrderSentConfirmation(false)}>ok</button>
                    </div>
                </Dialog>
                }
                <Header/>
                <div>
                    <div className="container-lg py-3">
                        <h4>Checkout</h4>
                    </div>

                    <div className="container-lg">
                        <form onSubmit={submitCheckout} id="order_furniture" name="order_furniture">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="">
                                        <div className="mb-4">
                                            <h5 className="">Address</h5>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" id="fullname"
                                                   name="fullname"
                                                   onChange={e => setFullName(e.target.value)}
                                                   placeholder="Full Name"/>
                                            <input type="hidden" name="user_id" id="user_id" value={user.uid}/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="address"
                                                   id="address"
                                                   onChange={e => setAddress(e.target.value)}
                                                   placeholder="Address"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="city" id="city"
                                                   onChange={e => setCity(e.target.value)}
                                                   placeholder="City"/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="tel" name="telephone"
                                                   id="telephone"
                                                   onChange={e => setTelephone(e.target.value)}
                                                   placeholder="(+251)9********"/>
                                        </div>
                                    </div>
                                    <div className="">
                                            <textarea className="form-control w-100" name="order_notes" id="order_notes"
                                                      onChange={e => setOrder_notes(e.target.value)}
                                                      placeholder="Order Notes"/>
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
                                        {isFetchingFromCart ? <div className="preloading-home overflow-hidden-y">
                                                <PreLoader/>
                                            </div> :
                                            cartItems.length === 0 &&
                                            <div className="text-center py-5">
                                                <h5>No Items In Your Cart!</h5>
                                            </div>
                                        }
                                        {isFetchingFromError &&
                                        <div className="text-center py-5">
                                            <h5>No Items In Your Cart!</h5>
                                        </div>
                                        }
                                        <div className="order-products my-3">
                                            {cartItems.map(item => <div className="d-table w-100" key={item.id}>
                                                <div className="d-table-cell text-muted">{item.name}</div>
                                                <input type="hidden" name={`product-${item.id}`} value={item.id}/>
                                                <div
                                                    className="d-table-cell text-right text-muted">{item.price} birr
                                                </div>
                                            </div>)}
                                        </div>
                                        <div className="d-table w-100 my-3">
                                            <div className="d-table-cell text-muted">Shiping</div>
                                            <div className="d-table-cell text-right"><strong>FREE</strong></div>
                                        </div>
                                        <div className="d-table w-100 my-3">
                                            <div className="d-table-cell"><strong>TOTAL</strong></div>
                                            <div className="d-table-cell text-right"><strong
                                                className="order-total text-danger font-weight-bolder">
                                                {newUser.totalPriceOfCart && newUser.totalPriceOfCart.toString()} birr</strong>
                                                <input type="hidden" name="total_price" id="total_price"
                                                       value={newUser.totalPriceOfCart}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="input-radio py-2">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio1" name="customRadio"
                                                       value="Direct Bank Transfer" className="custom-control-input"
                                                       checked={direct_bank}
                                                       onChange={e => {
                                                           setPayment_method(e.target.value);
                                                           setDirect_bank(!direct_bank);
                                                           setAmole(!amole);
                                                       }}
                                                />
                                                <label className="custom-control-label" htmlFor="customRadio1">
                                                    Direct Bank Transfer</label>
                                            </div>
                                            <div className={`pl-4 my-2 ${direct_bank ? `d-block` : `d-none`}`}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                        <div className="input-radio py-2">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="customRadio2" name="customRadio"
                                                       value="Cheque Payment"
                                                       className="custom-control-input"
                                                       onChange={e => {
                                                           setPayment_method(e.target.value);
                                                           setAmole(!amole);
                                                           setDirect_bank(!direct_bank);
                                                       }}
                                                />
                                                <label className="custom-control-label" htmlFor="customRadio2">
                                                    Cheque Payment</label>
                                            </div>
                                            <div className={`pl-4 my-2 ${amole ? `d-block` : `d-none`}`}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="customControlInline"
                                                   onChange={() => setAgreeToTerms(!agreeToTerms)}
                                            />
                                            <label className="custom-control-label" htmlFor="customControlInline">
                                                I've read and accept the
                                                <Link className="text-muted" to="/terms_and_conditions"> terms &
                                                    conditions</Link>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="position-relative">
                                        {!agreeToTerms && <div className="block-submit text-center text-nowrap py-2">
                                            <p>Agree to terms and conditions</p>
                                        </div>}
                                        <button className="btn btn-danger bg-red w-100 my-3">Place order</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        );
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
        isSending: state.order.isSending,
        sendingSuccess: state.order.sendingSuccess,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromCart: credentials => dispatch(fetchFromCart(credentials)),
        orderFurniture: credentials => dispatch(orderFurniture(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);