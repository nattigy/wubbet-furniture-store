import React, {Fragment} from "react";
import {CopyRight} from "./copyRight";
import {Subscribe} from "./subscription";
import {faMapMarker, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGooglePlusG} from "@fortawesome/free-brands-svg-icons";

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
                                        <li><a href="/"><FontAwesomeIcon icon={faMapMarker} size="sm" color="#D10024"/> 1734
                                            Stonecoal Road</a></li>
                                        <li><a href="/"><FontAwesomeIcon icon={faPhone} size="sm" color="#D10024"/> +021-95-51-84</a>
                                        </li>
                                        <li><a href="/"><FontAwesomeIcon icon={faGooglePlusG} size="sm"
                                                                         color="#D10024"/> email@email.com</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="footer">
                                    <h3 className="footer-title text-white">Categories</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><a href="/">Hot deals</a></li>
                                        <li><a href="/">Laptops</a></li>
                                        <li><a href="/">Smartphones</a></li>
                                        <li><a href="/">Cameras</a></li>
                                        <li><a href="/">Accessories</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="clearfix visible-xs"/>

                            <div className="col-md-3 col-sm-6">
                                <div className="footer">
                                    <h3 className="footer-title text-white">Information</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="/">Contact Us</a></li>
                                        <li><a href="/">Privacy Policy</a></li>
                                        <li><a href="/">Orders and Returns</a></li>
                                        <li><a href="/">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="footer">
                                    <h3 className="footer-title text-white">Service</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><a href="/">My Account</a></li>
                                        <li><a href="/">View Cart</a></li>
                                        <li><a href="/">Wishlist</a></li>
                                        <li><a href="/">Track My Order</a></li>
                                        <li><a href="/">Help</a></li>
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
