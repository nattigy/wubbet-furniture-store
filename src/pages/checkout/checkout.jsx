import React, {Fragment, useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import Dialog from "@material-ui/core/Dialog/Dialog";

import PreLoader from "../../components/pre-loader/pre-loader.component";

import {orderFurniture} from "../../store/order/order.utils";
import {fetchFromCart} from "../../store/cartList/cart-list.utils";

import "./checkout.style.sass"
import {updateUser} from "../../store/auth/auth.utils";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const Checkout = props => {

    const {
        isFetchingFromError, cartItems, newUser, isLoggedIn, isAnonymous,
        user, isFetchingFromCart, totalPrice, isSending, sendingSuccess
    } = props;

    const [fullName, setFullName] = useState(newUser.name);
    const [user_id] = useState(user ? user.uid : 0);
    const [address, setAddress] = useState(newUser.address && newUser.address);
    const [city, setCity] = useState(newUser.city && newUser.city);
    const [sub_city, setSub_city] = useState(newUser.sub_city ? newUser.sub_city : "");
    const [woreda, setWoreda] = useState(newUser.woreda && newUser.woreda);
    const [house_no, setHouse_no] = useState(newUser.house_no ? newUser.house_no : "");
    const [telephone, setTelephone] = useState(newUser.telephone && newUser.telephone);
    const [order_notes, setOrder_notes] = useState("");
    const [payment_method, setPayment_method] = useState("Direct Bank Transfer");
    const [orderSentConfirmation, setOrderSentConfirmation] = useState(true);
    const [direct_bank, setDirect_bank] = useState(true);
    const [amole, setAmole] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    useEffect(() => {
        props.fetchFromCart({uid: user ? user.uid : "0"});
    }, []);

    const submitCheckout = e => {
        e.preventDefault();

        const formData = `?&fullName=${fullName}&user_id=${user_id}&address=${address}&city=${city}&sub_city=${sub_city}&woreda=${woreda}&house_no=${house_no}&telephone=${telephone}&order_notes=${order_notes}&total_price=${totalPrice}&ordered_items=${newUser.cartList}&payment_method=${payment_method}`;

        props.orderFurniture({
            formData, user_id, fullName, address, city, sub_city, woreda, house_no, telephone,
            order_notes, total_price: totalPrice, ordered_items: cartItems, payment_method
        });

        props.updateUser({uid: user.uid, address, city, sub_city, woreda, house_no, telephone})
    };

    if (isLoggedIn === false) {
        return <Redirect to="/register"/>;
    } else if (isAnonymous) {
        return <Redirect to="/register"/>;
    } else {
        return (
            <Fragment>
                <Header/>
                {
                    isSending &&
                    <Dialog open={true}>
                        <div className="w-100 px-5 py-3 text-center overflow-hidden" color="red">
                            <PreLoader/>
                        </div>
                    </Dialog>
                }
                {
                    sendingSuccess &&
                    <Dialog open={orderSentConfirmation}>
                        <div className="w-100 px-5 py-3 text-center text-success" color="red">
                            Your order is sent!
                        </div>
                        <div className="text-center px-3 pb-2">
                            <button className="btn" onClick={() => setOrderSentConfirmation(false)}>ok</button>
                        </div>
                    </Dialog>
                }
                <div>
                    {/*<PathIndicator path={[*/}
                    {/*    {currentPath: false, pathName: "HOME", pathLink: "/"},*/}
                    {/*    {currentPath: true, pathName: "CHECKOUT", pathLink: props.match.url},*/}
                    {/*]}/>*/}
                    <div className="container-lg">
                        <form onSubmit={submitCheckout} id="order_furniture" name="order_furniture">
                            <div className="row">
                                <div className="col-md-7 mb-5">
                                    <div className="py-4">
                                        <div className="mb-5">
                                            <h3 className="title">ADDRESS</h3>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" id="fullname"
                                                   name="fullname"
                                                   onChange={e => setFullName(e.target.value)}
                                                   defaultValue={newUser.name}
                                                   placeholder="Full Name"
                                                   required
                                            />
                                            <input type="hidden" name="user_id" id="user_id" value={user.uid}/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="address"
                                                   id="address"
                                                   onChange={e => setAddress(e.target.value)}
                                                   defaultValue={newUser.address && newUser.address}
                                                   placeholder="Address (Local name)"
                                                   required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="city" id="city"
                                                   onChange={e => setCity(e.target.value)}
                                                   defaultValue={newUser.city && newUser.city}
                                                   placeholder="Region/City"
                                                   required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="city" id="city"
                                                   onChange={e => setSub_city(e.target.value)}
                                                   defaultValue={newUser.sub_city && newUser.sub_city}
                                                   placeholder="Sub-City(optional)"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="city" id="city"
                                                   onChange={e => setWoreda(e.target.value)}
                                                   defaultValue={newUser.woreda && newUser.woreda}
                                                   placeholder="Woreda"
                                                   required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="city" id="city"
                                                   onChange={e => setHouse_no(e.target.value)}
                                                   defaultValue={newUser.house_no && newUser.house_no}
                                                   placeholder="House-Number(optional)"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="tel" name="telephone"
                                                   id="telephone"
                                                   onChange={e => setTelephone(e.target.value)}
                                                   defaultValue={newUser.telephone && newUser.telephone}
                                                   placeholder="(+251)9********"
                                                   required
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <textarea
                                            className="form-control w-100" name="order_notes" id="order_notes"
                                            onChange={e => setOrder_notes(e.target.value)}
                                            placeholder="Order Notes"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-5 mb-5 border-light-custom p-4">
                                    <div className="text-center mb-5">
                                        <h5 className="title">YOUR ORDER</h5>
                                    </div>
                                    <div className="order-summary">
                                        <div className="d-table w-100 my-4">
                                            <div className="d-table-cell font-14"><strong>PRODUCT</strong></div>
                                            <div className="d-table-cell font-14 text-right"><strong>TOTAL</strong>
                                            </div>
                                        </div>
                                        {
                                            isFetchingFromCart ?
                                                (
                                                    <div className="preloading-home overflow-hidden-y">
                                                        <PreLoader/>
                                                    </div>
                                                ) : (
                                                    cartItems.length === 0 &&
                                                    <div className="text-center py-5">
                                                        <h5 className="font-14">No Items In Your Cart!</h5>
                                                    </div>
                                                )
                                        }
                                        {
                                            isFetchingFromError &&
                                            <div className="text-center py-5">
                                                <h5 className="font-14">No Items In Your Cart!</h5>
                                            </div>
                                        }
                                        <div className="order-products my-3">
                                            {
                                                cartItems.map(item =>
                                                    <div className="d-table w-100" key={item.id}>
                                                        <div className="d-table-cell text-muted">{item.name}</div>
                                                        <input type="hidden" name={`product-${item.id}`}
                                                               value={item.id}
                                                        />
                                                        <div className="d-table-cell text-right text-muted">
                                                            {item.price} ETB
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        {
                                            cartItems.length !== 0 &&
                                            <Fragment>
                                                <div className="d-table w-100 my-3">
                                                    <div className="d-table-cell text-muted font-14">Shiping</div>
                                                    <div className="d-table-cell text-right font-14">
                                                        <strong>FREE</strong>
                                                    </div>
                                                </div>
                                                <div className="d-table w-100 my-3">
                                                    <div className="d-table-cell font-14"><strong>TOTAL</strong></div>
                                                    <div className="d-table-cell text-right">
                                                        <strong
                                                            className="order-total font-24 text-dark font-weight-bolder">
                                                            {totalPrice}
                                                        </strong>
                                                        <span className="text-dark font-weight-bolder"> ETB</span>
                                                        <input type="hidden" name="total_price" id="total_price"
                                                               value={totalPrice}
                                                        />
                                                    </div>
                                                </div>
                                            </Fragment>
                                        }
                                    </div>
                                    {
                                        cartItems.length !== 0 &&
                                        <Fragment>
                                            <div className="">
                                                <div className="input-radio py-2">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio1" name="customRadio"
                                                               value="Direct Bank Transfer"
                                                               className="custom-control-input"
                                                               checked={direct_bank}
                                                               onChange={e => {
                                                                   setPayment_method(e.target.value);
                                                                   setDirect_bank(!direct_bank);
                                                                   setAmole(!amole);
                                                               }}
                                                        />
                                                        <label className="custom-control-label font-14"
                                                               htmlFor="customRadio1">
                                                            Direct Bank Transfer</label>
                                                    </div>
                                                    <div className={`pl-4 my-2 ${direct_bank ? `d-block` : `d-none`}`}>
                                                        <p className="font-14">Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                            et dolore magna aliqua.</p>
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
                                                        <label className="custom-control-label font-14"
                                                               htmlFor="customRadio2">
                                                            Cheque Payment</label>
                                                    </div>
                                                    <div className={`pl-4 my-2 ${amole ? `d-block` : `d-none`}`}>
                                                        <p className="font-14">Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                            et dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-2">
                                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="customControlInline"
                                                           onChange={() => setAgreeToTerms(!agreeToTerms)}
                                                    />
                                                    <label className="custom-control-label font-14"
                                                           htmlFor="customControlInline">
                                                        I've read and accept the
                                                        <Link className="text-muted" to="/terms_and_conditions"> terms &
                                                            conditions</Link>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="position-relative">
                                                {
                                                    !agreeToTerms &&
                                                    <div className="block-submit text-center text-nowrap py-2">
                                                        <p>Agree to terms and conditions</p>
                                                    </div>
                                                }
                                                <button className="btn bg-red text-white w-100 my-3">Place order
                                                </button>
                                            </div>
                                        </Fragment>
                                    }
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
        isAnonymous: state.auth.isAnonymous,
        newUser: state.auth.newUser,
        user: state.auth.user,
        cartItems: state.cartList.cartItems,
        isFetchingFromCart: state.cartList.isFetchingFromCart,
        isFetchingFromDone: state.cartList.isFetchingFromDone,
        isFetchingFromError: state.cartList.isFetchingFromError,
        totalPrice: state.cartList.totalPrice,
        isSending: state.order.isSending,
        sendingSuccess: state.order.sendingSuccess,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromCart: credentials => dispatch(fetchFromCart(credentials)),
        orderFurniture: credentials => dispatch(orderFurniture(credentials)),
        updateUser: credentials => dispatch(updateUser(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);