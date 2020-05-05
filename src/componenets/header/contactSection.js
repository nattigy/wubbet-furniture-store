import React from "react";
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
import {Link} from "react-router-dom";

const ContactSection = () => {
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
                            <a className="text-decoration-none small ml-2" href="/">usd</a>
                        </li>
                        <li className="nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faUser} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">My Account</a>
                        </li>
                        <li className="nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                            <Link className="text-decoration-none small ml-2" to="/login">Sign In</Link>
                        </li>
                        <li className="nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faSignInAlt} size="sm" color="#D10024"/>
                            <Link className="text-decoration-none small ml-2" to="/register">Sign Up</Link>
                        </li>
                        <li className="nav-item nav-inline mx-2">
                            <FontAwesomeIcon icon={faSignOutAlt} size="sm" color="#D10024"/>
                            <a className="text-decoration-none small ml-2" href="/">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default ContactSection;