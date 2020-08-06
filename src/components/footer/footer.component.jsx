import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {faEnvelope, faMapMarker, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {CopyRight} from "./copy-right.component";
import {Subscription} from "./subscription.component";

import "./footer.style.sass"

const Footer = props => {
    return !props.isAuthPageOpen ? (
        <Fragment>
            <Subscription/>
            <footer id="footer">
                <div className="bg-dark-custom pt-5">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer"><h3 className="title font-18 mb-3 text-white">ABOUT US</h3>
                                    <p className="footer-links">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut.</p>
                                    <ul className="footer-links navbar-nav">
                                        <li>
                                            <a href="/" target="_blank">
                                                <FontAwesomeIcon
                                                    icon={faMapMarker}
                                                    size="sm"
                                                    color="#D10024"
                                                /> Addis Ababa, Ethiopia
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" target="_blank">
                                                <FontAwesomeIcon
                                                    icon={faPhone}
                                                    size="sm"
                                                    color="#D10024"
                                                /> +251-924-61-81-31
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" target="_blank">
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                    size="sm"
                                                    color="#D10024"
                                                /> info@wubbet.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer">
                                    <h3 className="title font-18 text-white">CATEGORIES</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="/">Hot deals</Link></li>
                                        <li><Link to="/new_items">New Items</Link></li>
                                        <li><Link to="/category/HOME_FURNITURE">Home Furniture</Link></li>
                                        <li><Link to="/category/COMMERCIAL_FURNITURE">Commercial Furniture</Link></li>
                                        <li><Link to="/category/FINISHING_MATERIALS">Finishing Materials</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="clearfix visible-xs"/>

                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer">
                                    <h3 className="title font-18 text-white">INFORMATION</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Contact Us</Link></li>
                                        <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                                        <li><Link to="/return_policy">Orders and Returns</Link></li>
                                        <li><Link to="/terms_and_conditions">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer">
                                    <h3 className="title font-18 text-white">SERVICE</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="/">My Account</Link></li>
                                        <li><Link to="/cart">View Cart</Link></li>
                                        <li><Link to="/whishlist">Wish List</Link></li>
                                        <li><Link to="/">Help</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CopyRight/>
            </footer>
        </Fragment>
    ) : <CopyRight/>
};

const mapStateToProps = state => {
    return {
        isAuthPageOpen: state.ui.isAuthPageOpen
    }
};

export default connect(mapStateToProps)(Footer);
