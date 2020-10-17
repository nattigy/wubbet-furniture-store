import React, {Fragment} from "react";
import {Link} from "react-router-dom";

import {faEnvelope, faMapMarker, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {CopyRight} from "./copy-right.component";
import Subscription from "./subscription.component";

import "./footer.style.sass"
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";

const Footer = ({localization}) => {
    return (
        <Fragment>
            <Subscription/>
            <footer id="footer" className="mx-0 px-0">
                <div className="bg-light-custom pt-5 mx-0 px-0">
                    <div className="container-xl px-3">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer">
                                    <h3 className="title font-18 mb-3 text-uppercase">{localization.about_us}</h3>
                                    <div>
                                        <p className="footer-links" id="about">
                                            {localization.about_text}
                                            <p>
                                                <Link to="/about-us">
                                                    <Button className="bg-transparent">
                                                        {localization.learn_more}
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
                                                    /> {localization.address}
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
                                                        icon={faPhone}
                                                        size="sm"
                                                        color="#ff8c00"
                                                    /> +251-946-62-52-64
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
                                    <h3 className="title font-18">{localization.categories_footer}</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="#">{localization.hot_deals}</Link></li>
                                        <li><Link to="/new_items">{localization.new_product}</Link></li>
                                        <li><Link to="/cat/HOME_FURNITURE">{localization.home_furniture}</Link></li>
                                        <li><Link
                                            to="/cat/COMMERCIAL_FURNITURE">{localization.commercial_furniture}</Link>
                                        </li>
                                        <li><Link
                                            to="/cat/FINISHING_MATERIALS">{localization.decoration_and_finishing}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="clearfix visible-xs"/>

                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer">
                                    <h3 className="title font-18 text-uppercase">{localization.information}</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="/about-us">{localization.about_us}</Link></li>
                                        <li><Link to="#about">{localization.contact_us}</Link></li>
                                        <li><Link to="/privacy_policy">{localization.privacy_policy}</Link></li>
                                        <li><Link to="/return_policy">{localization.orders_and_returns}</Link></li>
                                        <li><Link to="/terms_and_conditions">{localization.terms_and_conditions}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-5">
                                <div className="footer">
                                    <h3 className="title font-18 text-uppercase">{localization.service}</h3>
                                    <ul className="footer-links navbar-nav">
                                        <li><Link to="/my-account">{localization.my_account}</Link></li>
                                        <li><Link to="/cart">{localization.view_bag}</Link></li>
                                        <li><Link to="/whishlist">{localization.favourites}</Link></li>
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

const mapStateToProps = state => {
    return {
        localization: state.localization.chosenLanguage
    }
}

export default connect(mapStateToProps)(Footer);
