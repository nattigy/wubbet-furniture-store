import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faExchangeAlt, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faGooglePlusG, faTwitter} from "@fortawesome/free-brands-svg-icons";
import AddToCartButton from "../addToCart/addToCart";

const ProductDescription = props => {
    const {name, price, old_price, description, category, sub_category} = props.item;
    const {credentials} = props;
    return (
        <div className="col-md-5">
            <div>
                <h4>{name}</h4>
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
                    <h4 className="text-danger mr-3 d-inline-block">{price} birr <del
                        className="small text-muted">$990.00</del></h4>
                    <span className="small text-danger font-weight-bold">IN STOCK</span>
                </div>
                <p className="mb-3">{description}</p>

                <AddToCartButton credentials={credentials}/>

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
                        <a className="text-dark" href={`/items/${category}`}>{category} </a></li>
                    <li className="d-inline-block mr-2">
                        <a className="text-dark" href={`/items/${category}/${sub_category}`}> {sub_category}</a></li>
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