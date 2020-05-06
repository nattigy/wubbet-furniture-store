import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {logoutUser} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDollarSign,
    faEnvelope,
    faMapMarker,
    faPhone,
    faSignInAlt,
    faSignOutAlt,
    faUser
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = props => {

    const {isLoggedIn, user, newUser} = props;
    console.log(!isLoggedIn);

    return (
        <div className="container-fluid bg-blue-custom py-1">
            <nav className="navbar navbar-expand-md">
                <div className="container-lg justify-content-between">
                    <ul className="navbar-nav d-block">
                        <li className="nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faPhone} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">+9456468454</a>
                        </li>
                        <li className="nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faEnvelope} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">email@email.com</a>
                        </li>
                        <li className="nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faMapMarker} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">Ethiopia</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-block">
                        <li className="nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faDollarSign} size="sm" color="#D10024"/>
                            <Link className="text-decoration-none small ml-2" to="/">usd</Link>
                        </li>
                        {isLoggedIn ?
                            <Fragment>
                                <li className="nav-item nav-inline mx-2">
                                    <FontAwesomeIcon icon={faUser} size="sm" color="#D10024"/>
                                    <Link className="text-decoration-none small ml-2" to="/">My Account</Link>
                                </li>
                                <li className="nav-item nav-inline mx-2">
                                    <FontAwesomeIcon icon={faSignOutAlt} size="sm" color="#D10024"/>
                                    <span onClick={() => props.signOut()}
                                          className="logout-span small ml-2">Logout</span>
                                </li>
                            </Fragment> :
                            <Fragment>
                                <li className="nav-item nav-inline mx-2">
                                    <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                                    <Link className="text-decoration-none small ml-2" to="/login">Sign In</Link>
                                </li>
                                <li className="nav-item nav-inline mx-2">
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
    console.log(state);
    return {
        auth: state.firebase.auth,
        isLoggedIn: state.auth.isLoggedIn,
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