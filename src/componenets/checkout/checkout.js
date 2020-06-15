import React, {Fragment, useEffect} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import {Link} from "react-router-dom";
import {fetchFromCart} from "../../store/actions/itemActions";
import {connect} from "react-redux";
import {PreLoader} from "../preLoader/preLoader";
import {Redirect} from "react-router";
import {orderFurniture} from "../../store/actions/orderActions";
import { Form, Text } from 'informed';
import { gapi } from 'gapi-script';

const Checkout = props => {
    const {isFetchingFromError, cartItems, isAuthenticated, newUser, user, isFetchingFromCart, isFetchingFromDone} = props;

    const SPREADSHEET_ID = '1zXjPzZzuSK6tHmbMWcKYn4DSpW6y2OjNKDfq3WNk2Bw'; //from the URL of your blank Google Sheet
    const CLIENT_ID = '436815509266-fpkuqlmdmbj6ar7aei63eibh2n11ddqe.apps.googleusercontent.com'; //from https://console.developers.google.com/apis/credentials
    const API_KEY = 'AIzaSyD3Z2869e3hQFppfwCgU1L4GQe001rHxrk'; //https://console.developers.google.com/apis/credentials
    const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

    useEffect(() => {
        props.fetchFromCart({uid: user.uid});
        gapi.load('client:auth2', initClient);
    }, []);

    const submitCheckout = e => {

        props.orderFurniture(document.forms["order-furniture"]);
    };

    const initClient =()=> { //provide the authentication credentials you set up in the Google developer console
        gapi.client.init({
            'apiKey': API_KEY,
            'clientId': CLIENT_ID,
            'scope': SCOPE,
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        }).then(()=> {
            gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
            this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    };

    const onFormSubmit = submissionValues => {

        const params = {
            // The ID of the spreadsheet to update.
            spreadsheetId: SPREADSHEET_ID,
            // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
            range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
            // How the input data should be interpreted.
            valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
            // How the input data should be inserted.
            insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
        };

        const valueRangeBody = {
            'majorDimension': 'ROWS', //log each entry as a new row (vs column)
            'values': [submissionValues] //convert the object's values to an array
        };

        let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
        request.then(function (response) {
            // TODO: Insert desired response behaviour on submission
            console.log(response.result);
        }, function (reason) {
            console.error('error: ' + reason.result.error.message);
        });
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
                <Header/>
                <div>
                    <div className="">
                        <div className="container-lg py-3">
                            <h4 className="ml-3">Checkout</h4>
                        </div>
                    </div>

                    <div className="">
                        <div className="container-lg">
                            <form onSubmit={onFormSubmit} name="order-furniture">
                                <div className="row">
                                    <div className="col-md-7 p-4">
                                        <div className="">
                                            <div className="mb-4">
                                                <h5 className="">Address</h5>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control w-100" type="text" name="full-name"
                                                       placeholder="Full Name"/>
                                                <input type="hidden" name="user-id" value={user.uid}/>
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
                                                <input className="form-control w-100" type="tel" name="tel"
                                                       placeholder="(+251)9********"/>
                                            </div>
                                        </div>

                                        {/*<div className="">*/}
                                        {/*    <div className="my-4">*/}
                                        {/*        <h5 className="title">Shiping address</h5>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="">*/}
                                        {/*        <div className="">*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <input className="form-control w-100" type="text" name="first-name"*/}
                                        {/*                       placeholder="First Name"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <input className="form-control w-100" type="text" name="last-name"*/}
                                        {/*                       placeholder="Last Name"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <input className="form-control w-100" type="email" name="email"*/}
                                        {/*                       placeholder="Email"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <input className="form-control w-100" type="text" name="address"*/}
                                        {/*                       placeholder="Address"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <input className="form-control w-100" type="text" name="city"*/}
                                        {/*                       placeholder="City"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <input className="form-control w-100" type="text" name="country"*/}
                                        {/*                       placeholder="Country"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <input className="form-control w-100" type="text" name="zip-code"*/}
                                        {/*                       placeholder="ZIP Code"/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="form-group">*/}
                                        {/*                <input className="form-control w-100" type="tel" name="tel"*/}
                                        {/*                       placeholder="Telephone"/>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

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
                                                {cartItems.map(item => <div className="d-table w-100">
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
                                                    {newUser.totalPriceOfCart.toString()} birr</strong>
                                                    <input type="hidden" name="total-price"
                                                           value={newUser.totalPriceOfCart}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="input-radio">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id="customRadio1" name="customRadio"
                                                           className="custom-control-input"/>
                                                    <label className="custom-control-label" htmlFor="customRadio1">Direct
                                                        Bank
                                                        Transfer</label>
                                                </div>
                                                <div className="">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod
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
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                            {/*<div className="input-radio">*/}
                                            {/*    <div className="custom-control custom-radio">*/}
                                            {/*        <input type="radio" id="customRadio3" name="customRadio"*/}
                                            {/*               className="custom-control-input"/>*/}
                                            {/*        <label className="custom-control-label" htmlFor="customRadio3">Paypal*/}
                                            {/*            System</label>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="">*/}
                                            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod*/}
                                            {/*            tempor incididunt ut labore et dolore magna aliqua.</p>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="">
                                            <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="customControlInline"/>
                                                <label className="custom-control-label" htmlFor="customControlInline">
                                                    I've read and accept the
                                                    <Link className="text-muted" to="/terms_and_conditions">terms &
                                                        conditions</Link>
                                                </label>
                                            </div>
                                        </div>
                                        <button className="btn btn-danger bg-red w-100 my-3">Place order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromCart: credentials => dispatch(fetchFromCart(credentials)),
        orderFurniture: credentials => dispatch(orderFurniture(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);