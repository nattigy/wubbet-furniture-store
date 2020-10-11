import React, {Fragment} from "react";
import {Link} from "react-router-dom";

import {faEnvelope, faMapMarker, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {CopyRight} from "./copy-right.component";
import {Subscription} from "./subscription.component";

import "./footer.style.sass"
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import Button from "@material-ui/core/Button";

const Footer = () => {
    return (
        <Fragment>
            <Subscription/>
            <footer id="footer" className="mx-0 px-0">
                <div className="bg-light-custom pt-5 mx-0 px-0">
                    <div className="container-xl px-3">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer">
                                    <h3 className="title font-18 mb-3">ABOUT US</h3>
                                    <div>
                                        <p className="footer-links" id="about">
                                            We aim to create the larges database of furniture, finishing materials and
                                            decorations in Ethiopia to allow our customers to find products, compare
                                            prices, and get the product that suit their style.
                                            <p>

                                                <Link to="/about-us">
                                                    <Button className="bg-transparent">
                                                        LEARN MORE
                                                    </Button>
                                                </Link>
                                            </p>
                                        </p>
                                        <ul className="footer-links navbar-nav">
                                            <li>
                                                <a href="#">
                                                    <FontAwesomeIcon
                                                        icon={faMapMarker}
                                                        size="sm"
                                                        color="#ff8c00"
                                                    /> Addis Ababa, Ethiopia
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <FontAwesomeIcon
                                                        icon={faPhone}
                                                        size="sm"
                                                        color="#ff8c00"
                                                    /> +251-924-61-81-31
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <FontAwesomeIcon
                                                        icon={faEnvelope}
                                                        size="sm"
                                                        color="#ff8c00"
                                                    /> info@wubbet.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer">
                                    <h3 className="title font-18">CATEGORIES</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="#">Hot deals</Link></li>
                                        <li><Link to="/new_items">New Items</Link></li>
                                        <li><Link to="/cat/HOME_FURNITURE">Home Furniture</Link></li>
                                        <li><Link to="/cat/COMMERCIAL_FURNITURE">Commercial Furniture</Link></li>
                                        <li><Link to="/cat/FINISHING_MATERIALS">Finishing Materials</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="clearfix visible-xs"/>

                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer">
                                    <h3 className="title font-18">INFORMATION</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="/about-us">About Us</Link></li>
                                        <li><Link to="#about">Contact Us</Link></li>
                                        <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                                        <li><Link to="/return_policy">Orders and Returns</Link></li>
                                        <li><Link to="/terms_and_conditions">Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer">
                                    <h3 className="title font-18">SERVICE</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="/my-account">My Account</Link></li>
                                        <li><Link to="/cart">View Cart</Link></li>
                                        <li><Link to="/whishlist">Wish List</Link></li>
                                        {/*<li><Link to="/">Help</Link></li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex px-0">
                            <div className="rounded-circle p-3 mx-1 border-light-custom">
                                <Link to="">
                                    <FontAwesomeIcon icon={faFacebook} size="3x" color="#3b5998"/>
                                </Link>
                            </div>
                            <div className="rounded-circle p-3 mx-1 border-light-custom">
                                <Link to="">
                                    <FontAwesomeIcon icon={faTelegram} size="3x" color="#0088cc"/>
                                </Link>
                            </div>
                            <div className="rounded-circle p-3 mx-1 border-light-custom">
                                <Link to="">
                                    <FontAwesomeIcon icon={faInstagram} size="3x" color="#F56040"/>
                                </Link>
                            </div>
                            <div className="rounded-circle p-3 mx-1 border-light-custom">
                                <Link to="">
                                    <FontAwesomeIcon icon={faTwitter} size="3x" color="#00acee"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <CopyRight/>
            </footer>
        </Fragment>
    )
};

export default Footer;
