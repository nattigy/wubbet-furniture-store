import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStar} from "@fortawesome/free-solid-svg-icons";

import AddToCartButton from "../add-to-cart-button/add-to-cart-button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const ProductDescription = props => {

    const {name, price, old_price, description, category, sub_category} = props.item;
    const {credentials, addToWishList} = props;

    return (
        <div className="col-md-5">
            <div>
                <h3 className="title">{name}</h3>
                <div className="my-3">
                    <div className="d-inline-block mr-3">
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                    </div>
                    {/*<a className="text-dark" href="/">10 Review(s) | Add your review</a>*/}
                </div>
                <div className="my-2">
                    <h4 className="mr-3 d-inline-block">
                        <span className="font-weight-bold">{price}</span> ETB
                        {
                            old_price && <del className="small text-muted"> {old_price} ETB</del>
                        }
                    </h4>
                    <span className="small text-danger font-weight-bold font-14">IN STOCK</span>
                </div>

                <div className="my-3">
                    <span className="text-nowrap">
                        <span className="qty-span btn bg-white text-dark font-14 text-white">Qty</span>
                        <select className="qty-select btn bg-white font-14 px-0"
                                style={{width: "50px"}} name="" id=""
                        >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number =>
                                    <option key={number} value={number}>{number}</option>
                                )}
                        </select>
                    </span>
                </div>

                <p className="mb-3 font-14">{description}</p>

                <div className="my-4 d-flex flex-row flex-nowrap">
                    <div className="my-1">
                        <AddToCartButton credentials={credentials}/>
                    </div>
                    <div className="mx-3">
                        <button
                            className="btn btn-lg btn-light rounded-circle"
                            onClick={() => addToWishList({
                                userId: credentials.userId,
                                itemId: credentials.itemId,
                                itemPrice: credentials.itemPrice
                            })}
                        >
                            {credentials.isAddingToWishList && <CircularProgress size="1.5rem" color="secondary"/>}
                            <FontAwesomeIcon icon={faHeart} size="sm" color="rgb(30, 31, 41, 0.9)"/>
                        </button>
                    </div>
                </div>

                {/*<ul className="list-unstyled my-4">*/}
                {/*    <li className="d-inline-block">*/}
                {/*        <Link className="text-dark">Home Furniture</Link>*/}
                {/*    </li>*/}
                {/*    <li className="d-inline-block mx-3"> ></li>*/}
                {/*    <li className="d-inline-block">*/}
                {/*        <Link className="text-dark">Living Room</Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </div>
    );
};

export default ProductDescription;
