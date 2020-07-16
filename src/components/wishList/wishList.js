import React, {useEffect} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PreLoader from "../preLoader/preLoader";
import {deleteFromCart, fetchFromCart} from "../../store/actions/itemActions";
import WishListItem from "./wishListItem";
import PathIndicator from "../pathIndicator/pathIndicator";

const WishList = props => {

    const {
        wishListItem, isAuthenticated, newUser, user, isLoggedIn, isAddingToCart,
        isFetchingItemFromWishList, fetchingItemFromWishListError, removingFromWishListDone
    } = props;

    useEffect(() => {
        isAuthenticated && props.fetchFromCart({uid: user ? user.uid : "0", type: "WISH_LIST"})
    }, []);

    const delEvent = (e, index) => {
        props.deleteFromCart(e);
        if (removingFromWishListDone) {
            wishListItem.splice(index, 1)
        }
    };

    if (isAuthenticated === undefined) {
        return <div className="preloading-home overflow-hidden-y">
            <PreLoader/>
        </div>;
    } else if (!isLoggedIn) {
        return <Redirect to="/login"/>;
    } else {
        return (
            <div>
                <Header/>
                <PathIndicator path={[
                    {currentPath: false, pathName: "HOME", pathLink: "/"},
                    {currentPath: true, pathName: "WISHLIST", pathLink: props.match.url},
                ]}/>
                <div className="container-lg">
                    <div className="py-3">
                        {isFetchingItemFromWishList ? <div className="preloading-cart overflow-hidden-y">
                                <PreLoader/>
                            </div> :
                            wishListItem.length === 0 &&
                            <div className="text-center py-5">
                                <h5 className="font-14">No Items In Your Wishlist!</h5>
                            </div>
                        }
                        {wishListItem.map((item, index) =>
                            <WishListItem
                                key={item.id}
                                item={item}
                                user={user}
                                addToCart={props.addToCart}
                                deleteFromCart={(e) => delEvent(e, index)}
                                credentials={{
                                    isAddingToCart,
                                    isLoggedIn,
                                    userId: user ? user.uid : "0",
                                    itemId: item.id,
                                    itemPrice: parseInt(item.price)
                                }}
                            />)}
                        {fetchingItemFromWishListError &&
                        <div className="text-center py-5">
                            <h5 className="font-14">No Items In Your Cart!</h5>
                        </div>
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isAuthenticated: state.auth.isAuthenticated,
        newUser: state.auth.newUser,
        user: state.auth.user,
        wishListItem: state.item.wishListItem,
        isAddingToCart: state.item.isAddingToCart,
        isAddingToCartDone: state.item.isAddingToCartDone,
        isAddingToCartError: state.search.isAddingToCartError,
        isFetchingItemFromWishList: state.item.isFetchingItemFromWishList,
        fetchingItemFromWishListDone: state.item.fetchingItemFromWishListDone,
        fetchingItemFromWishListError: state.item.fetchingItemFromWishListError,
        isRemovingFromWishList: state.item.isRemovingFromWishList,
        removingFromWishListDone: state.item.removingFromWishListDone,
        removingFromWishListError: state.item.removingFromWishListError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromCart: credentials => dispatch(fetchFromCart(credentials)),
        deleteFromCart: credentials => dispatch(deleteFromCart(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);