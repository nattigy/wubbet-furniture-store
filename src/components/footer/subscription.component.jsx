import React from "react";

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";

const Subscription = ({localization}) => {
    return (
        <div id="newsletter" className="subscribe-section py-4 my-0">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="newsletter text-center">
                            <p className="text-center">{localization.sign_up_for_news_letter} <strong
                                className="font-weight-bolder">{localization.news_letter}</strong></p>
                            <form className="d-flex text-nowrap">
                                <input className="search-input subscription-input"
                                       type="email"
                                       placeholder={localization.enter_your_email}
                                />
                                <button className="btn bg-red text-white subscribe-btn">
                                    <FontAwesomeIcon icon={faEnvelope} size="sm" color="#fff"/> {localization.subscribe}
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

const mapStateToProps = state => {
    return {
        localization: state.localization.chosenLanguage
    }
}

export default connect(mapStateToProps)(Subscription);