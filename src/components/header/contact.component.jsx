import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarker, faPhone, faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

import {logoutUser} from "../../store/auth/auth.utils";

const ContactSection = props => {

    const {isLoggedIn, user, isAnonymous} = props;

    return (
        <div className="container-fluid bg-blue-custom py-1 px-0 mx-0">
            <nav className="navbar navbar-expand-md px-0 mx-0 px-2">
                <div className="container-xl justify-content-between px-0">
                    <ul className="navbar-nav d-block px-0 mx-0">
                        <li className="contact-link nav-item nav-inline mr-2">
                            <FontAwesomeIcon icon={faPhone} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">+251924618131</a>
                        </li>
                        <li className="contact-link nav-item nav-inline mr-2">
                            <FontAwesomeIcon icon={faEnvelope} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">info@wubbet.com</a>
                        </li>
                        <li className="contact-link nav-item nav-inline mr-2">
                            <FontAwesomeIcon icon={faMapMarker} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">Addis Ababa, Ethiopia</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-block px-0 mx-0">
                        {
                            isLoggedIn ?
                                isAnonymous ?
                                    (
                                        <Fragment>
                                            <li className="contact-link nav-item nav-inline ml-2">
                                                <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                                                <Link className="text-decoration-none small ml-2" to="/login">
                                                    Sign In
                                                </Link>
                                            </li>
                                            <li className="contact-link nav-item nav-inline ml-2">
                                                <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                                                <Link className="text-decoration-none small ml-2" to="/register">
                                                    Sign Up
                                                </Link>
                                            </li>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            {/*<li className="contact-link nav-item nav-inline mx-2">*/}
                                            {/*    <FontAwesomeIcon icon={faUser} size="sm" color="#D10024"/>*/}
                                            {/*    <Link className="text-decoration-none small ml-2"*/}
                                            {/*          to={`/account/${user.uid}`}>*/}
                                            {/*        My Account</Link>*/}
                                            {/*</li>*/}
                                            <li className="contact-link nav-item nav-inline ml-2">
                                                <FontAwesomeIcon icon={faSignOutAlt} size="sm" color="#D10024"/>
                                                <span onClick={() => props.signOut()}
                                                      className="logout-span small ml-2">Logout</span>
                                            </li>
                                        </Fragment>
                                    ) : (
                                    <Fragment>
                                        <li className="contact-link nav-item nav-inline ml-2">
                                            <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                                            <Link className="text-decoration-none small ml-2" to="/login">Sign In</Link>
                                        </li>
                                        <li className="contact-link nav-item nav-inline ml-2">
                                            <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                                            <Link className="text-decoration-none small ml-2" to="/register">Sign Up</Link>
                                        </li>
                                    </Fragment>
                                )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isAnonymous: state.auth.isAnonymous,
        user: state.auth.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(logoutUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);