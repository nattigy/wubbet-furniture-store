import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {faEye, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import AddToCartButton from "../add-to-cart-button/add-to-cart-button"

import {addItemToCart} from "../../store/cartList/cart-list.utils";
import {addItemToWishList} from "../../store/wishList/wish-list.utils";

const SingleProductComponent = props => {

    const {item, user, isAddingToCart, isLoggedIn, margin} = props;

    return (
        <div className={`product d-inline-block ${margin}`}>
            <div className="product-img overflow-hidden" style={{height: "300px"}}>
                <img src={item.picture0} alt=""/>
            </div>
            <div className="product-body">
                <p className="product-category">{item.category}</p>
                <h3 className="product-name"><a className="text-dark"
                                                href="/">{item.name}</a></h3>
                <h4 className="product-price">{item.price} ETB
                    <del className="product-old-price">{item.oldPrice && `${item.oldPrice} birr`}</del>
                </h4>
                <div className="product-rating">
                    <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                </div>
                <div className="product-btns">
                    <Link to="" className="add-to-wishlist">
                        <FontAwesomeIcon
                            onClick={() => props.addItemToWishList({
                                userId: user.uid,
                                itemId: item.id
                            })}
                            icon={faHeart} size="1x"
                            color="#475161"
                        />
                        <span className="tooltipp">add to wishlist</span>
                    </Link>
                    <Link to={`/item/${item.id}`} className="quick-view">
                        <FontAwesomeIcon icon={faEye} size="1x" color="#475161"/>
                        <span className="tooltipp">quick view</span>
                    </Link>
                </div>
            </div>
            <AddToCartButton
                credentials={{
                    isAddingToCart,
                    isLoggedIn,
                    userId: user ? user.uid : "0",
                    itemId: item.id
                }}
            />
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductComponent);