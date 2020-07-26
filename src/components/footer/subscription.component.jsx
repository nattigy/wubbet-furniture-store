import React from "react";

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Subscription = () => {
    return (
        <div id="newsletter" className="subscribe-section py-4 my-0">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="newsletter text-center">
                            <p className="text-center">Sign Up for the <strong
                                className="font-weight-bolder">NEWSLETTER</strong></p>
                            <form>
                                <input className="search-input subscription-input"
                                       type="email"
                                       placeholder="Enter Your Email"
                                />
                                <button className="btn bg-red btn-danger subscribe-btn">
                                    <FontAwesomeIcon icon={faEnvelope} size="sm" color="#fff"/> Subscribe
                                </button>
                            </form>
                            <ul className="newsletter-follow navbar-nav">
                                <li>
                                    <a target="_blank" href="/"><i className="fa fa-facebook"/></a>
                                </li>
                                <li>
                                    <a target="_blank" href="/"><i className="fa fa-twitter"/></a>
                                </li>
                                <li>
                                    <a target="_blank" href="/"><i className="fa fa-instagram"/></a>
                                </li>
                                <li>
                                    <a target="_blank" href="/"><i className="fa fa-pinterest"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};