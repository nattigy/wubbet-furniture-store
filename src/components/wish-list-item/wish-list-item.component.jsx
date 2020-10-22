import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addItemToCart} from "../../store/cartList/cart-list.utils";
import AddToCartButton from "../add-to-cart-button/add-to-cart-button";

import "./wish-list.style.sass";

const WishListItem = props => {

    const {item, deleteFromWishList, user, isAddingToCart, isLoggedIn} = props;

    return (
        <div className="row mb-4 mx-0">
            <div className="col-4 col-md-3 px-0">
                <div className="w-100 overflow-hidden wish-list-item-img-cont">
                    <img className="wish-list-img" src={item.images[0]} alt=""/>
                </div>
            </div>
            <div className="col-8 col-md-9 row px-2">
                <div className="col-12 row">
                    <div className="col-12 col-md-9">
                        <Link to={`item/${item.id}`}>
                            <h1 className="item-name text-uppercase text-truncate">{item.name}</h1>
                        </Link>
                        <p className="w-100 text-truncate">
                            {item.description}
                        </p>
                    </div>
                    <div className="col-12 col-md-3 text-md-right text-nowrap small-font">
                        <span className="font-weight-bold">{item.price} </span>
                        <span className="small text-muted">ETB</span>
                    </div>
                </div>
                <div className="col-12 row py-3 order-5">
                    <div className="col-6">
                        <AddToCartButton
                            credentials={{
                                isAddingToCart,
                                isLoggedIn,
                                userId: user ? user.uid : "0",
                                itemId: item.id,
                                from: "old"
                            }}
                        />
                    </div>
                    <button className="text-right small col-6 text-nowrap btn border-0 font-14"
                            onClick={() => deleteFromWishList({
                                userId: user.uid, itemId: item.id
                            })}
                    >
                        <FontAwesomeIcon icon={faTrash} size="sm" color="#475161"/> Remove
                    </button>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WishListItem);