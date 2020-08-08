import React, {useEffect} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import PreLoader from "../../components/pre-loader/pre-loader.component";
import WishListItem from "../../components/wish-list-item/wish-list-item.component";
import PathIndicator from "../../components/path-indicator/path-indicator.component";

import {deleteFromWishList, fetchFromWishList} from "../../store/wishList/wish-list.utils";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const WishList = props => {

    const {
        wishListItems, isAuthenticated, user, isLoggedIn, isAddingToCart,
        isFetchingItemFromWishList, fetchingItemFromWishListError, removingFromWishListDone
    } = props;

    useEffect(() => {
        isAuthenticated && props.fetchFromWishList({uid: user ? user.uid : "0"})
    }, []);

    const delEvent = (e, index) => {
        props.deleteFromWishList(e);
        if (removingFromWishListDone) {
            wishListItems.splice(index, 1)
        }
    };

    if (!isLoggedIn) {
        return <Redirect to="/login"/>;
    } else {
        return (
            <div>
                <Header/>
                <PathIndicator path={[
                    {currentPath: false, pathName: "HOME", pathLink: "/"},
                    {currentPath: true, pathName: "WISH LIST", pathLink: props.match.url},
                ]}/>
                <div className="container-lg">
                    <div className="py-3">
                        {
                            isFetchingItemFromWishList ?
                                <div className="preloading-cart overflow-hidden-y">
                                    <PreLoader/>
                                </div> :
                                wishListItems.length === 0 &&
                                <div className="text-center py-5">
                                    <h5 className="font-14">No Items In Your Wishlist!</h5>
                                </div>
                        }
                        {
                            wishListItems.map((item, index) =>
                                <WishListItem
                                    key={item.id}
                                    item={item}
                                    user={user}
                                    addToCart={props.addToCart}
                                    deleteFromWishList={(e) => delEvent(e, index)}
                                    credentials={{
                                        isAddingToCart,
                                        isLoggedIn,
                                        userId: user ? user.uid : "0",
                                        itemId: item.id
                                    }}
                                />
                            )
                        }
                        {
                            fetchingItemFromWishListError &&
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
        user: state.auth.user,
        wishListItems: state.wishList.wishListItems,
        isAddingToCart: state.cartList.isAddingToCart,
        isAddingToCartDone: state.cartList.isAddingToCartDone,
        isAddingToCartError: state.cartList.isAddingToCartError,
        isFetchingItemFromWishList: state.wishList.isFetchingItemFromWishList,
        fetchingItemFromWishListDone: state.wishList.fetchingItemFromWishListDone,
        fetchingItemFromWishListError: state.wishList.fetchingItemFromWishListError,
        isRemovingFromWishList: state.wishList.isRemovingFromWishList,
        removingFromWishListDone: state.wishList.removingFromWishListDone,
        removingFromWishListError: state.wishList.removingFromWishListError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromWishList: credentials => dispatch(fetchFromWishList(credentials)),
        deleteFromWishList: credentials => dispatch(deleteFromWishList(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);