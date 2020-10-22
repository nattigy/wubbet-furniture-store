import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

import ethiopia from "./../../assets/img/eth-rec.png"
import british from "./../../assets/img/united-kingdom (1).svg"

import {logoutUser} from "../../store/auth/auth.utils";
import {changeToAmharic, changeToEnglish} from "../../store/language/localization";

const ContactSection = props => {

    const {isLoggedIn, user, isAnonymous} = props;

    return (
        <div className="container-fluid border-light-custom border-bottom bg-blue-custom py-1 px-0 mx-0">
            <nav className="navbar navbar-expand-md mx-0 px-0">
                <div className="container-xl justify-content-between px-3">
                    <ul className="navbar-nav d-block px-0 mx-0">
                        {
                            isLoggedIn ?
                                isAnonymous ?
                                    (
                                        <Fragment>
                                            <li className="contact-link nav-item nav-inline ml-2">
                                                <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#000"/>
                                                <Link className="text-dark text-decoration-none small ml-2" to="/login">
                                                    Sign In
                                                </Link>
                                            </li>
                                            <li className="contact-link nav-item nav-inline ml-2">
                                                <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#000"/>
                                                <Link className="text-dark text-decoration-none small ml-2"
                                                      to="/register">
                                                    Sign Up
                                                </Link>
                                            </li>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <li className="contact-link nav-item nav-inline ml-2">
                                                <FontAwesomeIcon icon={faSignOutAlt} size="sm" color="#000"/>
                                                <span onClick={() => props.signOut()}
                                                      className="text-dark logout-span small ml-2">Logout</span>
                                            </li>
                                        </Fragment>
                                    ) : (
                                    <Fragment>
                                        <li className="contact-link nav-item nav-inline ml-2">
                                            <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#000"/>
                                            <Link className="text-dark text-decoration-none small ml-2" to="/login">Sign
                                                In</Link>
                                        </li>
                                        <li className="contact-link nav-item nav-inline ml-2">
                                            <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#000"/>
                                            <Link className="text-dark text-decoration-none small ml-2" to="/register">Sign
                                                Up</Link>
                                        </li>
                                    </Fragment>
                                )
                        }
                    </ul>
                    <ul className="navbar-nav d-block px-0 mx-0">
                        <li className="contact-link nav-item nav-inline mr-2">
                            <img src={ethiopia} style={{width: "25px"}} alt=""/>
                            <button className="btn px-0 mx-0 text-dark text-decoration-none small ml-2"
                                    onClick={() => props.changeToAmharic()}
                            >አማርኛ
                            </button>
                        </li>
                        <span className="mr-1">|</span>
                        <li className="contact-link nav-item nav-inline mr-2">
                            <img src={british} style={{width: "20px"}} alt=""/>
                            <button className="btn px-0 mx-0 text-dark text-decoration-none small ml-2"
                                    onClick={() => props.changeToEnglish()}
                            >English
                            </button>
                        </li>
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
        signOut: () => dispatch(logoutUser()),
        changeToAmharic: () => dispatch(changeToAmharic()),
        changeToEnglish: () => dispatch(changeToEnglish()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);