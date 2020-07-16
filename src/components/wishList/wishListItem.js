import React from "react";
import {faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import AddToCartButton from "../addToCart/addToCart"

const WishListItem = props => {
    const {item, addToCart, user, credentials} = props;
    return (
        <div className="pt-4 border-bottom border-light-custom">
            <div className="d-flex">
                <div className="col-md-4 w-100 overflow-hidden" style={{height: "250px"}}>
                    <img className="w-100" style={{minWidth: "80px"}} src={item.picture0} alt=""/>
                </div>
                <div className="row col-md-8 flex-fill ml-1 border-left border-light-custom">
                    <div className="flex-fill">
                        <p className="">
                            <Link to="" className="text-dark font-18">{item.name}</Link></p>
                        <div className="my-4">
                            <span className="cart-item-btn">
                                <Link onClick={() => props.deleteFromCart({
                                    userId: user.uid, itemId: item.id, type: "WISH_LIST"
                                })}>
                                    <FontAwesomeIcon icon={faTrash} size="1x" color="#475161"/>
                                    <span className="tooltip-custom shadow-sm text-nowrap">REMOVE FROM WISHLIST</span>
                                </Link>
                            </span>
                            <span className="cart-item-btn">
                                <Link to={`item/${item.id}`}>
                                    <FontAwesomeIcon icon={faEye} size="1x" color="#475161"/>
                                    <span className="tooltip-custom shadow-sm text-nowrap">QUICK VIEW</span>
                                </Link>
                            </span>
                        </div>
                        <div>
                            <AddToCartButton credentials={credentials}/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="text-right text-danger font-weight-bold text-nowrap">{item.price} <span
                            className="small text-muted">ETB</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListItem;