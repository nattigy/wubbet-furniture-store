import React from "react";
import {connect} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import {addItemToCart} from "../../store/cartList/cart-list.utils";

import "./add-to-cart-button.style.sass";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddToCartButton = props => {

    const {isAddingToCart, userId, itemId, from} = props.credentials;

    const handleClick = () => {
        props.addToCart({userId, itemId});
    };

    return (
        from !== "new" ? (
            <div className="add-to-cart">
                <button className="add-to-cart-btn text-nowrap" onClick={handleClick}>
                    <FontAwesomeIcon icon={faShoppingCart} size="1x" color="#fff"/>
                    {isAddingToCart && <CircularProgress size="1.5rem" color="secondary"/>}
                    add to cart
                </button>
            </div>
        ) : (
            <button className="add-btn border-0 bg-red mx-2 shadow-sm-custom" onClick={handleClick}>
                <FontAwesomeIcon className="shadow-lg" icon={faCartPlus} size="1x" color="#fff"/>
            </button>
        )
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: credentials => dispatch(addItemToCart(credentials)),
    };
};

export default connect(null, mapDispatchToProps)(AddToCartButton);