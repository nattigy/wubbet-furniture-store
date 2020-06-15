import React, {useEffect} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {PreLoader} from "../preLoader/preLoader";
import {fetchFromCart} from "../../store/actions/itemActions";
import WishListItem from "./wishListItem";

const WishList = props => {
    const {isFetchingFromError, cartItems, isAuthenticated, newUser} = props;

    useEffect(() => {
        isAuthenticated && props.fetchFromCart({itemsId: newUser.wishList})
    }, []);

    if (isAuthenticated === undefined) {
        return <div className="preloading-home overflow-hidden-y">
            <PreLoader/>
        </div>;
    } else if (isAuthenticated === false) {
        return <Redirect to="/login"/>;
    } else {
        return (
            <div>
                <Header/>
                <div className="container-lg">
                    <div className="my-3 mx-3 border-bottom border-light">
                        <div className="row">
                            <h4 className="col-sm-6 text-nowrap">Wish List</h4>
                        </div>
                        <div className="text-muted text-right mr-5 mt-3">Price</div>
                    </div>
                    <div className="py-3">
                        {cartItems.map(item => <WishListItem key={item.id} item={item}/>)}
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