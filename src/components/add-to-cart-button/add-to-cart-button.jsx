import React, {Fragment} from "react";
import {connect} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faShoppingBasket} from "@fortawesome/free-solid-svg-icons";

import {addItemToCart} from "../../store/cartList/cart-list.utils";

import "./add-to-cart-button.style.sass";
import CircularProgress from "@material-ui/core/CircularProgress";
import CustomSnackbar from "../snack-bar/snack-bar";

const AddToCartButton = props => {

    const {isAddingToCart, userId, itemId, from, price} = props.credentials;
    const {
        isAddingToCartDone, isAddingToCartError, isAddingToWishList,
        isAddingToWishListDone, isAddingToWishListError
    } = props;

    const handleClick = () => {
        props.addToCart({userId, itemId, price});
    };

    return (
        <Fragment>
            {
                (isAddingToWishList || isAddingToCart) && <CustomSnackbar state="progress"/>
            }
            {
                isAddingToCartDone && <CustomSnackbar state="success" message="Added to Shopping Bag"/>
            }
            {
                isAddingToCartError && <CustomSnackbar state="error" message="Adding to Shopping Bag Failed"/>
            }
            {
                isAddingToWishListDone && <CustomSnackbar state="success" message="Added to Favorites"/>
            }
            {
                isAddingToWishListError && <CustomSnackbar state="error" message="Adding to Favorites Failed"/>
            }
            {
                from !== "new" ? (
                    <div className="add-to-cart">
                        <button className="add-to-cart-btn text-nowrap" onClick={handleClick}>
                            <FontAwesomeIcon icon={faShoppingBasket} size="1x" color="#fff"/>
                            {isAddingToCart && <CircularProgress size="1.5rem" color="secondary"/>}
                            add to cart
                        </button>
                    </div>
                ) : (
                    <button className="btn border-0 bg-red mx-2 shadow-sm-custom" onClick={handleClick}>
                        <FontAwesomeIcon className="shadow-lg" icon={faShoppingBasket} size="1x" color="#fff"/>
                        <span className="mx-1"/>
                        <FontAwesomeIcon className="shadow-lg" icon={faPlus} size="sm" color="#fff"/>
                    </button>
                )
            }
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        isAddingToCart: state.cartList.isAddingToCart,
        isAddingToCartDone: state.cartList.isAddingToCartDone,
        isAddingToCartError: state.cartList.isAddingToCartError,
        isAddingToWishList: state.wishList.isAddingToWishList,
        isAddingToWishListDone: state.wishList.isAddingToWishListDone,
        isAddingToWishListError: state.wishList.isAddingToWishListError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: credentials => dispatch(addItemToCart(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);