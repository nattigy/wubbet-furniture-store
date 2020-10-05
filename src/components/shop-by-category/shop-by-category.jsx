import React, {Fragment, useEffect} from "react";

import "./shop-by-category.style.sass"

import {Link} from "react-router-dom";
import {searchAllCategories} from "../../store/search/search.utils";
import {connect} from "react-redux";
import PreLoader from "../pre-loader/pre-loader.component";

const Item = ({item}) => (
    <Link to={`/cat${item.link}`} className="col-5 col-md-4 col-lg-3 px-0 pr-3 mb-3">
        <div className="overflow-hidden w-100 shop-by-cat-img-cont rounded-lg shadow-sm">
            <img className="shop-by-cat-img" src={item.images[0]} alt=""/>
            <div className="w-100 item-overlay position-absolute"/>
            <div
                className="w-100 position-absolute py-3 text-center text-white text-nowrap overflow-hidden item-name-overlay">
                {item.name}
            </div>
        </div>
    </Link>
);

const ShopByCategory = props => {

    const {isSearchingAllCat, isSearchingAllCatDone, allCategories} = props;

    useEffect(() => {
        !allCategories && props.searchAllCategories()
    }, []);

    return (
        <div className="container-xl px-3 my-5">
            <h3 className="section-title">SHOP BY CATEGORY</h3>
            <p className="p-max-width my-3">
                Make your house a home, give life to your building and create an inviting environment for your property
                by shopping with us. We have incredible collection waiting just for you. Find goods, compare prices and
                choose your perfect offer. Spend less and buy more with Wubbet. Choose a category you want to browse
                right here.
            </p>
            {
                isSearchingAllCat &&
                <div className="preloading-cart text-center overflow-hidden-y">
                    <PreLoader/>
                </div>
            }
            {
                isSearchingAllCatDone && (
                    <Fragment>
                        <div className="pt-3 d-flex overflow-auto">
                            {
                                allCategories && allCategories.map(cat => cat.subCategory && cat.subCategory.map(sub => (
                                    sub.link.split("/")[1] === 'HOME_FURNITURE' && <Item key={sub.id} item={sub}/>
                                )))
                            }
                        </div>
                        <div className="pt-3 d-flex overflow-auto">
                            {
                                allCategories && allCategories.map(cat => cat.subCategory && cat.subCategory.map(sub => (
                                    sub.link.split("/")[1] === 'COMMERCIAL_FURNITURE' && <Item key={sub.id} item={sub}/>
                                )))
                            }
                        </div>
                        <div className="pt-3 d-flex overflow-auto">
                            {
                                allCategories && allCategories.map(cat => cat.subCategory && cat.subCategory.map(sub => (
                                    sub.link.split("/")[1] === 'FINISHING_AND_DECORATIONS' &&
                                    <Item key={sub.id} item={sub}/>
                                )))
                            }
                        </div>
                    </Fragment>
                )
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isSearchingAllCat: state.search.isSearchingAllCat,
        isSearchingAllCatDone: state.search.isSearchingAllCatDone,
        isSearchError: state.search.isSearchError,
        allCategories: state.search.allCategories
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchAllCategories: () => dispatch(searchAllCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopByCategory);