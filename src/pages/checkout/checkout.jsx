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
import PathIndicator from "../../components/path-indicator/path-indicator.component";

const Checkout = props => {

    const {
        isFetchingFromError, cartItems, newUser, isLoggedIn, isAnonymous,
        user, isFetchingFromCart, totalPrice, isSending, sendingSuccess, localization
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
    const [orderSentConfirmation, setOrderSentConfirmation] = useState(true);
    const [direct_bank, setDirect_bank] = useState(true);
    const [method, setMethod] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    useEffect(() => {
        props.fetchFromCart({uid: user ? user.uid : "0"});
    }, []);

    const submitCheckout = e => {
        e.preventDefault();

        const formData = `?&fullName=${fullName}&user_id=${user_id}&address=${address}&city=${city}&sub_city=${sub_city}&woreda=${woreda}&house_no=${house_no}&telephone=${telephone}&order_notes=${order_notes}&total_price=${totalPrice}&ordered_items=${newUser.cartList}&payment_method=${method}`;

        props.orderFurniture({
            formData, user_id, fullName, address, city, sub_city, woreda, house_no, telephone,
            order_notes, total_price: totalPrice, ordered_items: cartItems, method
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
                    <PathIndicator path={[
                        {currentPath: false, pathName: "HOME", pathLink: "/"},
                        {currentPath: true, pathName: "CHECKOUT", pathLink: props.match.url},
                    ]}/>
                    <div className="container-lg">
                        <form onSubmit={submitCheckout} id="order_furniture" name="order_furniture">
                            <div className="row">
                                <div className="col-md-7 mb-5">
                                    <div className="py-4">
                                        <div className="mb-5">
                                            <h3 className="title">{localization.user_address}</h3>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" id="fullname"
                                                   name="fullname"
                                                   onChange={e => setFullName(e.target.value)}
                                                   defaultValue={newUser.name}
                                                   placeholder={localization.your_name}
                                                   required
                                            />
                                            <input type="hidden" name="user_id" id="user_id" value={user.uid}/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="address"
                                                   id="address"
                                                   onChange={e => setAddress(e.target.value)}
                                                   defaultValue={newUser.address && newUser.address}
                                                   placeholder={localization.address_local_name}
                                                   required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="city" id="city"
                                                   onChange={e => setCity(e.target.value)}
                                                   defaultValue={newUser.city && newUser.city}
                                                   placeholder={localization.region}
                                                   required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="city" id="city"
                                                   onChange={e => setSub_city(e.target.value)}
                                                   defaultValue={newUser.sub_city && newUser.sub_city}
                                                   placeholder={localization.sub_city}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="city" id="city"
                                                   onChange={e => setWoreda(e.target.value)}
                                                   defaultValue={newUser.woreda && newUser.woreda}
                                                   placeholder={localization.woreda}
                                                   required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control w-100" type="text" name="city" id="city"
                                                   onChange={e => setHouse_no(e.target.value)}
                                                   defaultValue={newUser.house_no && newUser.house_no}
                                                   placeholder={localization.house_number}
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
                                            placeholder={localization.order_notes}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-5 mb-5 border-light-custom p-4">
                                    <div className="text-center mb-5">
                                        <h5 className="title">{localization.your_order}</h5>
                                    </div>
                                    <div className="order-summary">
                                        <div className="d-table w-100 my-4">
                                            <div className="d-table-cell font-14">
                                                <strong>{localization.ordered_product}</strong>
                                            </div>
                                            <div className="d-table-cell font-14 text-right">
                                                <strong>{localization.total}</strong>
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
                                                        <h5 className="font-14">{localization.no_items_bag}</h5>
                                                    </div>
                                                )
                                        }
                                        {
                                            isFetchingFromError &&
                                            <div className="text-center py-5">
                                                <h5 className="font-14">{localization.no_items_bag}</h5>
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
                                                    <div className="d-table-cell font-14">
                                                        <strong>{localization.total}</strong></div>
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
                                                               onChange={() => setDirect_bank(!direct_bank)}
                                                        />
                                                        <label className="custom-control-label font-14"
                                                               htmlFor="customRadio1">
                                                            Direct Bank Transfer
                                                        </label>
                                                    </div>
                                                    <div className={`pl-4 my-2 ${direct_bank ? `d-block` : `d-none`}`}>
                                                        <div>
                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <input className="mr-2" type="radio"
                                                                           id="Commercial_Bank_of_Ethiopia"
                                                                           name="payment_method"
                                                                           value="Commercial Bank of Ethiopia"
                                                                           onChange={e => {
                                                                               setMethod(e.target.value);
                                                                           }}
                                                                    />
                                                                    <label htmlFor="Commercial_Bank_of_Ethiopia">
                                                                        Commercial Bank of Ethiopia
                                                                    </label>
                                                                    <div className={`pl-4 my-2 ${
                                                                        method === "Commercial Bank of Ethiopia" ? `d-block` : `d-none`
                                                                    }`}>
                                                                        <p className="font-14">
                                                                            Transfer
                                                                            <span
                                                                                className="font-18 font-weight-bolder"> {totalPrice} ETB </span>
                                                                            to CBE bank account 1000229957019, Beiment
                                                                            Zebene.
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <input className="mr-2" type="radio"
                                                                           id="Dashen_Bank"
                                                                           name="payment_method"
                                                                           value="Dashen Bank"
                                                                           onChange={e => {
                                                                               setMethod(e.target.value)
                                                                           }}
                                                                    />
                                                                    <label htmlFor="Dashen_Bank">Dashen Bank</label>
                                                                    <div className={`pl-4 my-2 ${
                                                                        method === "Dashen Bank" ? `d-block` : `d-none`
                                                                    }`}>
                                                                        <p className="font-14">
                                                                            Transfer
                                                                            <span
                                                                                className="font-18 font-weight-bolder"> {totalPrice} ETB </span>
                                                                            to Dashen Bank, bank account 5084197055011,
                                                                            Beiment Zebene.
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <input className="mr-2" type="radio"
                                                                           id="Bank_of_Abyssinia"
                                                                           name="payment_method"
                                                                           value="Bank of Abyssinia"
                                                                           onChange={e => {
                                                                               setMethod(e.target.value)
                                                                           }}
                                                                    />
                                                                    <label htmlFor="Bank_of_Abyssinia">Bank of
                                                                        Abyssinia</label>
                                                                    <div className={`pl-4 my-2 ${
                                                                        method === "Bank of Abyssinia" ? `d-block` : `d-none`
                                                                    }`}>
                                                                        <p className="font-14">
                                                                            Transfer
                                                                            <span
                                                                                className="font-18 font-weight-bolder"> {totalPrice} ETB </span>
                                                                            to Bank of Abyssinia, bank account 19598462,
                                                                            Beiment Zebene.
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <input className="mr-2" type="radio"
                                                                           id="Awash_Bank"
                                                                           name="payment_method"
                                                                           value="Awash Bank"
                                                                           onChange={e => {
                                                                               setMethod(e.target.value)
                                                                           }}
                                                                    />
                                                                    <label htmlFor="Awash_Bank">Awash Bank</label>
                                                                    <div className={`pl-4 my-2 ${
                                                                        method === "Awash Bank" ? `d-block` : `d-none`
                                                                    }`}>
                                                                        <p className="font-14">
                                                                            Transfer
                                                                            <span
                                                                                className="font-18 font-weight-bolder"> {totalPrice} ETB </span>
                                                                            to Awash Bank, bank account 01320152672700,
                                                                            Beiment Zebene.
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <input className="mr-2" type="radio"
                                                                           id="United_Bank"
                                                                           name="payment_method"
                                                                           value="United Bank"
                                                                           onChange={e => {
                                                                               setMethod(e.target.value)
                                                                           }}
                                                                    />
                                                                    <label htmlFor="United_Bank">United Bank</label>
                                                                    <div className={`pl-4 my-2 ${
                                                                        method === "United Bank" ? `d-block` : `d-none`
                                                                    }`}>
                                                                        <p className="font-14">
                                                                            Transfer
                                                                            <span
                                                                                className="font-18 font-weight-bolder"> {totalPrice} ETB </span>
                                                                            to United Bank, bank account
                                                                            1560411349655012, Beiment Zebene.
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <input className="mr-2" type="radio"
                                                                           id="Wegagen_Bank"
                                                                           name="payment_method"
                                                                           value="Wegagen Bank"
                                                                           onChange={e => {
                                                                               setMethod(e.target.value)
                                                                           }}
                                                                    />
                                                                    <label htmlFor="Wegagen_Bank">Wegagen Bank</label>
                                                                    <div className={`pl-4 my-2 ${
                                                                        method === "Wegagen Bank" ? `d-block` : `d-none`
                                                                    }`}>
                                                                        <p className="font-14">
                                                                            Transfer
                                                                            <span
                                                                                className="font-18 font-weight-bolder"> {totalPrice} ETB </span>
                                                                            to Wegagen Bank, bank account
                                                                            08443405-30101, Beiment Zebene.
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-radio py-2">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="customRadio"
                                                               value="Cheque Payment"
                                                               className="custom-control-input"
                                                               onChange={() => setDirect_bank(!direct_bank)}
                                                        />
                                                        <label className="custom-control-label font-14"
                                                               htmlFor="customRadio2">
                                                            Mobile Payments
                                                        </label>
                                                    </div>
                                                    <div className={`pl-4 my-2 ${!direct_bank ? `d-block` : `d-none`}`}>
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <input className="mr-2" type="radio"
                                                                       id="Amole"
                                                                       name="payment_method"
                                                                       value="Amole"
                                                                       onChange={e => {
                                                                           setMethod(e.target.value)
                                                                       }}
                                                                />
                                                                <label htmlFor="Amole">Amole</label>
                                                                <div className={`pl-4 my-2 ${
                                                                    method === "Amole" ? `d-block` : `d-none`
                                                                }`}>
                                                                    <p className="font-14">
                                                                        Go to Transfer within Dashen and transfer amount
                                                                        <span
                                                                            className="font-18 font-weight-bolder"> {totalPrice} ETB </span>
                                                                        to account no 5084197055011, Beiment Zebene.
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            {/*<li>*/}
                                                            {/*    <input className="mr-2" type="radio"*/}
                                                            {/*           id="Yene_Pay"*/}
                                                            {/*           name="payment_method"*/}
                                                            {/*           value="Yene Pay"*/}
                                                            {/*           onChange={e => {*/}
                                                            {/*               setMethod(e.target.value)*/}
                                                            {/*           }}*/}
                                                            {/*    />*/}
                                                            {/*    <label htmlFor="Yene_Pay">Yene Pay</label>*/}
                                                            {/*    <div className={`pl-4 my-2 ${*/}
                                                            {/*        method === "Yene Pay" ? `d-block` : `d-none`*/}
                                                            {/*    }`}>*/}
                                                            {/*        <p className="font-14">*/}
                                                            {/*            Lorem ipsum dolor sit amet, consectetur*/}
                                                            {/*            adipisicing elit, sed do eiusmod tempor*/}
                                                            {/*            incididunt ut labore*/}
                                                            {/*        </p>*/}
                                                            {/*    </div>*/}
                                                            {/*</li>*/}
                                                            <li>
                                                                <input className="mr-2" type="radio"
                                                                       id="CBE_birr"
                                                                       name="payment_method"
                                                                       value="CBE birr"
                                                                       onChange={e => {
                                                                           setMethod(e.target.value)
                                                                       }}
                                                                />
                                                                <label htmlFor="CBE_birr">CBE birr</label>
                                                                <div className={`pl-4 my-2 ${
                                                                    method === "CBE birr" ? `d-block` : `d-none`
                                                                }`}>
                                                                    <p className="font-14">
                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                        adipisicing elit, sed do eiusmod tempor
                                                                        incididunt ut labore
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </ul>
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
                                                        {localization.ive_read_and_accept}
                                                        <Link className="text-muted ml-1" to="/terms_and_conditions">
                                                            {localization.terms_and_conditions}
                                                        </Link>
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
                                                <button
                                                    className="btn bg-red text-white w-100 my-3">{localization.place_order}</button>
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
        localization: state.localization.chosenLanguage
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