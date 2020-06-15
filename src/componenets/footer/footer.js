import React, {Fragment} from "react";
import {CopyRight} from "./copyRight";
import {Subscribe} from "./subscription";
import {faEnvelope, faMapMarker, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <Fragment>
            <Subscribe/>
            <footer id="footer">
                <div className="bg-dark-custom py-5">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer"><h3 className="footer-title text-white">About Us</h3>
                                    <p className="text-muted footer-links">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut.</p>
                                    <ul className="footer-links navbar-nav">
                                        <li><a href="/" target="_blank"><FontAwesomeIcon icon={faMapMarker} size="sm"
                                                                                         color="#D10024"/> 1734
                                            Stonecoal Road</a></li>
                                        <li><a href="/" target="_blank"><FontAwesomeIcon icon={faPhone} size="sm"
                                                                                         color="#D10024"/> +021-95-51-84</a>
                                        </li>
                                        <li><a href="/" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="sm"
                                                                                         color="#D10024"/> email@email.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="footer">
                                    <h3 className="footer-title text-white">Categories</h3>
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

                            <div className="col-md-3 col-sm-6">
                                <div className="footer">
                                    <h3 className="footer-title text-white">Information</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Contact Us</Link></li>
                                        <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                                        <li><Link to="/return_policy">Orders and Returns</Link></li>
                                        <li><Link to="/terms_and_conditions">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="footer">
                                    <h3 className="footer-title text-white">Service</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="/">My Account</Link></li>
                                        <li><Link to="/cart">View Cart</Link></li>
                                        <li><Link to="/whishlist">Wishlist</Link></li>
                                        <li><Link to="/">Track My Order</Link></li>
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
    )
};
