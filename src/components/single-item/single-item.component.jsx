import React from "react";

import {faEye, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import AddToCartButton from "../add-to-cart-button/add-to-cart-button"

import "./single-item.style.sass"
import {addItemToCart} from "../../store/cartList/cart-list.utils";
import {addItemToWishList} from "../../store/wishList/wish-list.utils";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const SingleItem = (props) => {

    const {item, user, isAddingToCart, isLoggedIn} = props;

    return (
        <div className="col-6 col-md-4 col-lg-3 mb-4 item-cont">
            <div className="overflow-hidden w-100 single-item-img-cont">
                <button
                    className="border-0 text-center py-2 shadow-sm-custom add-to-wishlist m-2"
                    onClick={() => props.addItemToWishList({
                        userId: user.uid,
                        itemId: item.id
                    })}
                >
                    <FontAwesomeIcon icon={faHeart} size="1x" color="#111"/>
                </button>
                <Link
                    className="border-0 text-center py-2 shadow-sm-custom quick-view m-2"
                    to={`/item/${item.id}`}
                >
                    <FontAwesomeIcon icon={faEye} size="1x" color="#111"/>
                </Link>
                <Link to={`/item/${item.id}`}>
                    <img className="single-item-img" src={item.images[0]} alt=""/>
                </Link>
            </div>
            <div className="mt-3 w-100">
                <Link className="mb-2 text-dark font-weight-bold" to={`/item/${item.id}`}>
                    {item.name}
                </Link>
                <p className="mb-2 small text-muted">
                    size
                </p>
                <p className="mb-2 font-weight-bold small">
                    <span className="font-18">{item.price}</span><sup>.99</sup> ETB
                </p>
                <div className="mb-2 d-flex w-100 flex-nowrap">
                    <div className="text-nowrap">
                        <FontAwesomeIcon icon={faStar} size="xs" color="#111"/>
                        <FontAwesomeIcon icon={faStar} size="xs" color="#111"/>
                        <FontAwesomeIcon icon={faStar} size="xs" color="#111"/>
                        <FontAwesomeIcon icon={faStar} size="xs" color="#111"/>
                        <FontAwesomeIcon icon={faStar} size="xs" color="#111"/>
                    </div>
                    <div className="flex-grow-1 text-right item-btns">
                        <AddToCartButton
                            credentials={{
                                isAddingToCart,
                                isLoggedIn,
                                userId: user ? user.uid : "0",
                                itemId: item.id,
                                from: "new"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn,
        isAddingToCart: state.cartList.isAddingToCart,
        isAddingToCartDone: state.cartList.isAddingToCartDone,
        isAddingToCartError: state.cartList.isAddingToCartError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: credentials => dispatch(addItemToCart(credentials)),
        addItemToWishList: credentials => dispatch(addItemToWishList(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);