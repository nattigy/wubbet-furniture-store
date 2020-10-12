import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import "./cart-item.style.sass"
import {connect} from "react-redux";
import {addItemToCart} from "../../store/cartList/cart-list.utils";
import CustomSnackbar from "../snack-bar/snack-bar";

const CartItem = props => {

    const {
        item, addItemToWishList, user, isAddingToCart, isRemovingFromCart,
        isAddingToWishList, isAddingToWishListDone, isAddingToWishListError
    } = props;

    return (
        <Fragment>
            {
                isAddingToWishList && <CustomSnackbar state="progress"/>
            }
            {
                isAddingToWishListDone && <CustomSnackbar state="success" message="Added to Favorites"/>
            }
            {
                isAddingToWishListError && <CustomSnackbar state="error" message="Adding to Favorites Failed"/>
            }
            <div className="row mb-4 mx-0">
                <div className="col-4 col-md-3 px-0">
                    <div className="w-100 overflow-hidden cart-item-img-cont">
                        <img className="cart-item-img" src={item.images[0]} alt=""/>
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
                            <div>
                                <div>
                                    <div className="d-flex text-nowrap position-relative">
                                        {
                                            (isAddingToCart || isRemovingFromCart) &&
                                            <div className="position-absolute w-100 h-100"
                                                 style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}/>
                                        }
                                        <button
                                            onClick={() =>
                                                props.deleteFromCart({
                                                        userId: user.uid,
                                                        itemId: item.id,
                                                        isDecrease: true,
                                                        price: item.price
                                                    }
                                                )}
                                            className="">-
                                        </button>
                                        <input value={item.quantity} style={{width: "50px"}} type="number"/>
                                        <button onClick={() => {
                                            props.addToCart({itemId: item.id, userId: user.uid, price: item.price})
                                        }} className="">+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 text-md-right text-nowrap small-font">
                            <span className="font-weight-bold">{item.price} </span>
                            <span className="small text-muted">ETB</span>
                        </div>
                    </div>
                    <div className="col-12 row py-3 justify-content-between order-5 px-0 px-md-2">
                        <div className="col-6">
                            <button
                                className="btn small px-3 text-info text-nowrap"
                                onClick={() => addItemToWishList({userId: user.uid, itemId: item.id,})}
                            >Add to Favorite
                            </button>
                        </div>
                        <button
                            className="text-right small col-6 text-nowrap btn border-0 font-14"
                            onClick={() => props.deleteFromCart({userId: user.uid, itemId: item.id})}
                        >
                            <FontAwesomeIcon icon={faTrash} size="sm" color="#475161"/> Remove
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        isAddingToCart: state.cartList.isAddingToCart,
        isRemovingFromCart: state.cartList.isRemovingFromCart,
        isAddingToWishList: state.wishList.isAddingToWishList,
        isAddingToWishListDone: state.wishList.isAddingToWishListDone,
        isAddingToWishListError: state.wishList.isAddingToWishListError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: credentials => dispatch(addItemToCart(credentials)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
