import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";

import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import CartItem from "../../components/cart-item/cart-item.component";
import PreLoader from "../../components/pre-loader/pre-loader.component";
import PathIndicator from "../../components/path-indicator/path-indicator.component";
import {deleteFromCart, fetchFromCart} from "../../store/cartList/cart-list.utils";
import {addItemToWishList} from "../../store/wishList/wish-list.utils";

const ShoppingCart = props => {

    const {
        cartItems, totalPrice, user, isFetchingFromCart,
        removingFromCartDone, isFetchingFromDone, localization
    } = props;

    useEffect(() => {
        props.fetchFromCart({uid: user ? user.uid : "0"})
    }, []);

    const delEvent = (e, index) => {
        props.deleteFromCart(e);
        if (!e.isDecrease) {
            if (removingFromCartDone) {
                cartItems.splice(index, 1)
            }
        }
    };

    return (
        <div>
            <Header/>
            <PathIndicator path={[
                {currentPath: false, pathName: "HOME", pathLink: "/"},
                {currentPath: true, pathName: "CART", pathLink: props.match.url},
            ]}/>
            <div className="container-sm px-3">
                <div className="sticky-top bg-white p-2">
                    <Link className="checkout-btn btn bg-red text-nowrap" to="/checkout">
                        {localization.proceed_to_checkout}
                    </Link>
                </div>
                <div className="mt-3">
                    {
                        isFetchingFromCart &&
                        <div className="preloading-cart text-center overflow-hidden-y">
                            <PreLoader/>
                        </div>
                    }
                    {
                        isFetchingFromDone &&
                        cartItems.length === 0 &&
                        <div className="text-center py-5">
                            <h5 className="font-14 my-3">No Items In Your Wishlist!</h5>
                            <Link to="/search/items/all" className="btn bg-red text-white">
                                Go to shop <FontAwesomeIcon icon={faArrowRight} color="#fff"/>
                            </Link>
                        </div>
                    }
                    {
                        cartItems.map((item, index) =>
                            <CartItem
                                key={item.id}
                                item={item}
                                user={user}
                                addItemToWishList={props.addItemToWishList}
                                deleteFromCart={(e) => delEvent(e, index)}
                            />)
                    }
                </div>
                <div className="py-3">
                    <p className="text-right mr-5 font-16">Subtotal ({cartItems.length} items):
                        <span className="text-danger font-weight-bold font-16"> {totalPrice} ETB</span>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        newUser: state.auth.newUser,
        user: state.auth.user,
        cartItems: state.cartList.cartItems,
        isFetchingFromCart: state.cartList.isFetchingFromCart,
        isFetchingFromDone: state.cartList.isFetchingFromDone,
        isFetchingFromError: state.cartList.isFetchingFromError,
        removingFromCartDone: state.cartList.removingFromCartDone,
        totalPrice: state.cartList.totalPrice,
        localization: state.localization.chosenLanguage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromCart: credentials => dispatch(fetchFromCart(credentials)),
        addItemToWishList: credentials => dispatch(addItemToWishList(credentials)),
        deleteFromCart: credentials => dispatch(deleteFromCart(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);