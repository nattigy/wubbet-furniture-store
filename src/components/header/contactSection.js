import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {logoutUser} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarker, faPhone, faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

const ContactSection = props => {

    const {isLoggedIn, user, newUser, isAnonymous} = props;

    return (
        <div className="container-fluid bg-blue-custom py-1">
            <nav className="navbar navbar-expand-md">
                <div className="container-lg justify-content-between">
                    <ul className="navbar-nav d-block">
                        <li className="contact-link nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faPhone} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">+251946526451</a>
                        </li>
                        <li className="contact-link nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faEnvelope} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">info@wubbet.com</a>
                        </li>
                        <li className="contact-link nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faMapMarker} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">Ethiopia</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-block">
                        {/*<li className="nav-item nav-inline mx-2">*/}
                        {/*    <FontAwesomeIcon icon={faDollarSign} size="sm" color="#D10024"/>*/}
                        {/*    <Link className="text-decoration-none small ml-2" to="/">usd</Link>*/}
                        {/*</li>*/}
                        {isLoggedIn ?
                            isAnonymous ?
                                <Fragment>
                                    <li className="contact-link nav-item nav-inline mx-2">
                                        <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                                        <Link className="text-decoration-none small ml-2" to="/login">Sign In</Link>
                                    </li>
                                    <li className="contact-link nav-item nav-inline mx-2">
                                        <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                                        <Link className="text-decoration-none small ml-2" to="/register">Sign Up</Link>
                                    </li>
                                </Fragment> :
                                <Fragment>
                                    {/*<li className="contact-link nav-item nav-inline mx-2">*/}
                                    {/*    <FontAwesomeIcon icon={faUser} size="sm" color="#D10024"/>*/}
                                    {/*    <Link className="text-decoration-none small ml-2"*/}
                                    {/*          to={`/account/${user.uid}`}>*/}
                                    {/*        My Account</Link>*/}
                                    {/*</li>*/}
                                    <li className="contact-link nav-item nav-inline mx-2">
                                        <FontAwesomeIcon icon={faSignOutAlt} size="sm" color="#D10024"/>
                                        <span onClick={() => props.signOut()}
                                              className="logout-span small ml-2">Logout</span>
                                    </li>
                                </Fragment> :
                            <Fragment>
                                <li className="contact-link nav-item nav-inline mx-2">
                                    <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                                    <Link className="text-decoration-none small ml-2" to="/login">Sign In</Link>
                                </li>
                                <li className="contact-link nav-item nav-inline mx-2">
                                    <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                                    <Link className="text-decoration-none small ml-2" to="/register">Sign Up</Link>
                                </li>
                            </Fragment>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        isLoggedIn: state.auth.isLoggedIn,
        isAnonymous: state.auth.isAnonymous,
        newUser: state.auth.newUser,
        user: state.auth.user,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(logoutUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);