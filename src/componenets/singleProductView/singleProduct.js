import React from "react";
import product4 from "./../../assets/img/product05.png"
import {faShoppingCart, faHeart, faExchangeAlt, faEye, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SingleProduct = () => {
    return (
        <div className="product d-inline-block mx-3">
            <div className="product-img">
                <img src={product4} alt=""/>
                <div className="product-label">
                    <span className="sale">-30%</span>
                    <span className="new">NEW</span>
                </div>
            </div>
            <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name"><a className="text-dark" href="/">product name goes here</a></h3>
                <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                <div className="product-rating">
                    <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                </div>
                <div className="product-btns">
                    <button className="add-to-wishlist"><FontAwesomeIcon icon={faHeart} size="1x"
                                                                         color="#475161"/><span className="tooltipp">add to wishlist</span>
                    </button>
                    <button className="add-to-compare"><FontAwesomeIcon icon={faExchangeAlt} size="1x"
                                                                        color="#475161"/><span className="tooltipp">add to compare</span>
                    </button>
                    <button className="quick-view"><FontAwesomeIcon icon={faEye} size="1x"
                                                                    color="#475161"/><span
                        className="tooltipp">quick view</span></button>
                </div>
            </div>
            <div className="add-to-cart">
                <button className="add-to-cart-btn"><FontAwesomeIcon icon={faShoppingCart} size="1x" color="#fff"/> add
                    to cart
                </button>
            </div>
        </div>
    )
};

export default SingleProduct;