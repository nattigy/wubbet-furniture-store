import React, {useEffect} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PreLoader from "../preLoader/preLoader";
import {fetchFromCart} from "../../store/actions/itemActions";
import WishListItem from "./wishListItem";
import PathIndicator from "../pathIndicator/pathIndicator";

const WishList = props => {
    const {isFetchingFromError, cartItems, isAuthenticated, newUser, user, isLoggedIn} = props;

    useEffect(() => {
        isAuthenticated && props.fetchFromCart({uid: user ? user.uid : "0", type: "WISH_LIST"})
    }, []);

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
                    {/*<div className="my-3 mx-3 border-bottom border-light">*/}
                    {/*    <div className="row">*/}
                    {/*        <h4 className="col-sm-6 text-nowrap">Wish List</h4>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="py-3">
                        {/*{cartItems.map(item => <WishListItem key={item.id} item={item}/>)}*/}
                        <WishListItem/>
                        <WishListItem/>
                        <WishListItem/>
                        <WishListItem/>
                        <WishListItem/>
                        {isFetchingFromError || newUser.wishList.length === 0 &&
                        <div className="text-center py-5">
                            <h5>No Items In Your Wish List!</h5>
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
        cartItems: state.item.cartItems,
        isFetchingFromError: state.item.isFetchingFromError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFromCart: credentials => dispatch(fetchFromCart(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);