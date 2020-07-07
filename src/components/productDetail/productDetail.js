import React, {Fragment, useEffect} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import ProductDescription from "./productDescription";
import ProductImages from "./productImages";
import {connect} from "react-redux";
import {getItemDetail} from "../../store/actions/itemActions";
import PreLoader from "../preLoader/preLoader";

const ProductDetail = props => {
    const {
        isGettingItemDetail, gettingItemDetailError, gettingItemDetailDone,
        itemDetail, isAddingToCart, user, isLoggedIn
    } = props;

    useEffect(() => {
        props.getItemDetail({id: props.match.params.id})
    }, []);

    return (
        <Fragment>
            <Header/>
            <div className="container-lg py-3">
                <h4>Product Detail</h4>
            </div>
            <div className="">
                <div className="container-lg">
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
                                isLoggedIn,
                                userId: user.uid,
                                itemId: itemDetail.id,
                                itemPrice: parseInt(itemDetail.price)
                            }}/>
                            {/*<DescriptionAndDetails item={itemDetail}/>*/}
                        </Fragment>}
                        {gettingItemDetailError && <div className="w-100 text-center text-danger py-3 font-14">
                            Unknown error, Please try again!
                        </div>}
                    </div>
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
        isAddingToCart: state.item.isAddingToCart,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getItemDetail: credentials => dispatch(getItemDetail(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);