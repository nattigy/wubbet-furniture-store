import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faExchangeAlt, faHeart, faShoppingCart, faStar} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faGooglePlusG, faTwitter} from "@fortawesome/free-brands-svg-icons";

const ProductDescription = () => {
    return (
        <div className="col-md-5">
            <div>
                <h4>product name goes here</h4>
                <div className="my-3">
                    <div className="d-inline-block mr-3">
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                    </div>
                    <a className="text-dark" href="/">10 Review(s) | Add your review</a>
                </div>
                <div className="my-2">
                    <h4 className="text-danger mr-3 d-inline-block">$980.00 <del
                        className="small text-muted">$990.00</del></h4>
                    <span className="small text-danger font-weight-bold">IN STOCK</span>
                </div>
                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div className="mt-4">
                    <label className="small">
                        Size
                        <select className="custom-select mx-2">
                            <option value="0">X</option>
                        </select>
                    </label>
                    <label className="small">
                        Color
                        <select className="custom-select mx-2">
                            <option value="0">Red</option>
                        </select>
                    </label>
                </div>

                <div className="my-3">
                    <div className="qty-label small d-inline-block">
                        Qty
                        <div className="input-number position-relative d-inline-block mx-3">
                            <input type="number" className="form-control qty-input"/>
                            <span className="qty-up">+</span>
                            <span className="qty-down">-</span>
                        </div>
                    </div>
                    <button className="add-to-cart-btn">
                        <FontAwesomeIcon icon={faShoppingCart} size="1x" color="#fff"/>
                        add to cart
                    </button>
                </div>

                <ul className="list-unstyled">
                    <li className="d-inline-block mr-2">
                        <a href="/" className="text-dark">
                            <FontAwesomeIcon icon={faHeart} size="sm"
                                             color="rgb(30, 31, 41, 0.9)"/> add to wishlist</a></li>
                    <li className="d-inline-block ml-2">
                        <a href="/" className="text-dark">
                            <FontAwesomeIcon icon={faExchangeAlt} size="sm"
                                             color="rgb(30, 31, 41, 0.9)"/> add to compare</a></li>
                </ul>

                <ul className="list-unstyled">
                    <li className="d-inline-block mr-2">Category:</li>
                    <li className="d-inline-block mr-2">
                        <a className="text-dark" href="/">Headphones</a></li>
                    <li className="d-inline-block mr-2">
                        <a className="text-dark" href="/">Accessories</a></li>
                </ul>

                <ul className="list-unstyled">
                    <li className="d-inline-block mr-2">Share:</li>
                    <li className="d-inline-block mr-3">
                        <a className="text-dark" href="/">
                            <FontAwesomeIcon icon={faFacebookF} size="sm"
                                             color="rgb(30, 31, 41, 0.9)"/></a>
                    </li>
                    <li className="d-inline-block mr-3">
                        <a className="text-dark" href="/">
                            <FontAwesomeIcon icon={faTwitter} size="sm"
                                             color="rgb(30, 31, 41, 0.9)"/></a></li>
                    <li className="d-inline-block mr-3">
                        <a className="text-dark" href="/">
                            <FontAwesomeIcon icon={faGooglePlusG} size="sm"
                                             color="rgb(30, 31, 41, 0.9)"/></a></li>
                    <li className="d-inline-block mr-3">
                        <a className="text-dark" href="/">
                            <FontAwesomeIcon icon={faEnvelope} size="sm"
                                             color="rgb(30, 31, 41, 0.9)"/></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductDescription;