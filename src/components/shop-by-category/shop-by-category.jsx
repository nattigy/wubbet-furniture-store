import React, {useEffect} from "react";

import "./shop-by-category.style.sass"

import shopcat from "../../assets/img/shopcat.webp"
import {Link} from "react-router-dom";
import {searchAllCategories} from "../../store/search/search.utils";
import {connect} from "react-redux";
import PreLoader from "../pre-loader/pre-loader.component";

const Item = props => (
    <div className="col-6 col-md-4 col-lg-3 px-0 pr-3 mb-3">
        <div className="position-relative overflow-hidden">
            <img className="w-100" src={shopcat} alt=""/>
            <div className="shop-cat-btn w-100 px-2 text-center">
                <Link
                    to={`/cat${props.item.link}`}
                    className="small btn btn-danger w-100 py-0 py-md-2 px-2 rounded-pill text-truncate text-nowrap shadow-sm-custom">
                    {props.item.name}
                </Link>
            </div>
        </div>
    </div>
);

const ShopByCategory = props => {

    const {isSearchingAllCat, isSearchingAllCatDone, allCategories} = props;

    useEffect(() => {
        !allCategories && props.searchAllCategories()
    }, []);

    return (
        <div className="container-xl px-3 my-5">
            <h1 className="section-title">SHOP BY CATEGORY</h1>
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
                isSearchingAllCatDone &&
                <div className="pt-3 d-flex overflow-auto">
                    {
                        allCategories.map(cat => cat.subCategory.map(sub => (
                            <Item key={sub.id} item={sub}/>
                        )))
                    }
                </div>
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