import React from "react";
import product4 from "./../../assets/img/product05.png"
import {faEye, faHeart, faShoppingCart, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addItemToCart, addItemToCartOffline} from "../../store/actions/itemActions";
import CircularProgress from '@material-ui/core/CircularProgress';

const SingleProduct = props => {

    const {item, user, isAddingToCart, isAddingToCartError, isLoggedIn, margin, isAddingToCartDone} = props;

    const handleClick = () => {
        isLoggedIn && props.addToCart({userId: user.uid, itemId: item.id, itemPrice: item.price})
    };


    return (
        <div className={`product d-inline-block ${margin}`}>
            <div className="product-img">
                <img src={product4} alt=""/>
                {/*<div className="product-label">*/}
                {/*    <span className="sale">-30%</span>*/}
                {/*    <span className="new">NEW</span>*/}
                {/*</div>*/}
            </div>
            <div className="product-body">
                <p className="product-category">{item.category}</p>
                <h3 className="product-name"><a className="text-dark"
                                                href="/">{item.name}</a></h3>
                <h4 className="product-price">{item.price} birr
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
                        <FontAwesomeIcon icon={faHeart} size="1x" color="#475161"/>
                        <span className="tooltipp">add to wishlist</span>
                    </Link>
                    {/*<Link to="" className="add-to-compare">*/}
                    {/*    <FontAwesomeIcon icon={faExchangeAlt} size="1x" color="#475161"/>*/}
                    {/*    <span className="tooltipp">add to compare</span>*/}
                    {/*</Link>*/}
                    <Link to={`/item/${item.id}`} className="quick-view">
                        <FontAwesomeIcon icon={faEye} size="1x" color="#475161"/>
                        <span className="tooltipp">quick view</span>
                    </Link>
                </div>
            </div>
            <div className="add-to-cart">
                <button className="add-to-cart-btn text-nowrap" onClick={handleClick}>
                    <FontAwesomeIcon icon={faShoppingCart} size="1x" color="#fff"/>
                    {isAddingToCart && <CircularProgress size="1.5rem" color="secondary"/>}
                    add to cart
                </button>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn,
        isAddingToCart: state.item.isAddingToCart,
        cartItemOffline: state.item.cartItemOffline,
        isAddingToCartDone: state.item.isAddingToCartDone,
        isAddingToCartError: state.search.isAddingToCartError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: credentials => dispatch(addItemToCart(credentials)),
        addItemToCartOffline: credentials => dispatch(addItemToCartOffline(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);