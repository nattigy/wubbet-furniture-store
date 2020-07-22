import React, {Fragment, useEffect} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import ProductDescription from "./productDescription";
import ProductImages from "./productImages";
import {connect} from "react-redux";
import {getItemDetail} from "../../store/item/item.utils";
import PreLoader from "../preLoader/preLoader";
import PathIndicator from "../pathIndicator/pathIndicator";
import {addItemToWishList} from "../../store/wishList/wish-list.utils";

const ProductDetail = props => {
    const {
        isGettingItemDetail, gettingItemDetailError, gettingItemDetailDone,
        itemDetail, isAddingToCart, user, isLoggedIn, isAddingToWishList
    } = props;

    useEffect(() => {
        props.getItemDetail({id: props.match.params.id})
    }, []);

    return (
        <Fragment>
            <Header/>
            <PathIndicator path={[
                {currentPath: false, pathName: "HOME", pathLink: "/"},
                {currentPath: false, pathName: "ACCOUNT", pathLink: "/account"},
                {currentPath: false, pathName: "MY ITEMS", pathLink: "/account/my-items"},
                {currentPath: true, pathName: "ITEM NAME", pathLink: props.match.url},
            ]}/>
            <div className="container-lg my-5">
                <div className="row">
                    {isGettingItemDetail && <div className="preloading-store">
                        <div className="text-center">
                            <PreLoader/>
                        </div>
                    </div>}
                    {gettingItemDetailDone && <Fragment>
                        <ProductImages item={itemDetail}/>
                        <ProductDescription item={itemDetail} credentials={{
                            isAddingToCart,
                            isAddingToWishList,
                            isLoggedIn,
                            userId: user ? user.uid : "0",
                            itemId: itemDetail.id,
                            itemPrice: parseInt(itemDetail.price)
                        }} addToWishList={props.addItemToWishList}/>
                        {/*<DescriptionAndDetails item={itemDetail}/>*/}
                    </Fragment>}
                    {gettingItemDetailError && <div className="w-100 text-center text-danger py-3 font-14">
                        Unknown error, Please refresh the page!
                    </div>}
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn,
        isGettingItemDetail: state.item.isGettingItemDetail,
        gettingItemDetailDone: state.item.gettingItemDetailDone,
        gettingItemDetailError: state.item.gettingItemDetailError,
        itemDetail: state.item.itemDetail,
        isAddingToCart: state.cartList.isAddingToCart,
        isAddingToWishList: state.wishList.isAddingToWishList,
        isAddingToWishListDone: state.wishList.isAddingToWishListDone,
        isAddingToWishListError: state.wishList.isAddingToWishListError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getItemDetail: credentials => dispatch(getItemDetail(credentials)),
        addItemToWishList: credentials => dispatch(addItemToWishList(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);