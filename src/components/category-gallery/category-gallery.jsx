import React, {useEffect} from "react";

import "./category-gallery.style.sass"
import {connect} from "react-redux";
import {searchCategory} from "../../store/search/search.utils";
import PreLoader from "../pre-loader/pre-loader.component";

const CategoryGallery = props => {

    const {isSearchingCat, isSearchingCatDone, newCategory, name} = props;

    useEffect(() => {
        props.searchCategory({category: props.category});
    }, []);

    return (
        <div className="container-xl my-3 px-3">
            <h3 className="section-title mb-3">Some {name} inspirations for you</h3>
            {
                isSearchingCat &&
                <div className="preloading-cart text-center overflow-hidden-y">
                    <PreLoader/>
                </div>
            }
            {
                isSearchingCatDone &&
                newCategory &&
                newCategory.subCategory.map(sub => sub.link.split("/")[2] === name && <div className="row">
                    <div className="col-12 col-md-6 mb-3 px-2 mb-md-0 overflow-hidden">
                        <div className="overflow-hidden w-100 cat-gallery-img-cont cat-gallery-img-cont1">
                            <img className="cat-gallery-img" src={sub.images[0]} alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 px-0">
                        <div className="col-12 d-flex px-0">
                            <div className="col-6 px-2">
                                <div className="mb-3">
                                    <div className="overflow-hidden w-100 cat-gallery-img-cont cat-gallery-img-cont2">
                                        <img className="cat-gallery-img" src={sub.images[1]} alt=""/>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="overflow-hidden w-100 cat-gallery-img-cont cat-gallery-img-cont3">
                                        <img className="cat-gallery-img" src={sub.images[2]} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 px-2">
                                {
                                    sub.images[3] &&
                                    <div className="mb-3">
                                        <div
                                            className="overflow-hidden w-100 cat-gallery-img-cont cat-gallery-img-cont4">
                                            <img className="cat-gallery-img" src={sub.images[3]} alt=""/>
                                        </div>
                                    </div>
                                }
                                {
                                    sub.images[4] &&
                                    <div className="">
                                        <div
                                            className="overflow-hidden w-100 cat-gallery-img-cont cat-gallery-img-cont5">
                                            <img className="cat-gallery-img" src={sub.images[4]} alt=""/>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isSearchingCat: state.search.isSearchingCat,
        isSearchingCatDone: state.search.isSearchingCatDone,
        isSearchError: state.search.isSearchError,
        newCategory: state.search.category
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchCategory: credentials => dispatch(searchCategory(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryGallery);