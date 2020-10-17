import React, {Fragment, useEffect, useRef} from "react";

import "./shop-by-category.style.sass"

import {Link} from "react-router-dom";
import {searchAllCategories} from "../../store/search/search.utils";
import {connect} from "react-redux";
import PreLoader from "../pre-loader/pre-loader.component";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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

    const {isSearchingAllCat, isSearchingAllCatDone, allCategories, localization} = props;

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {
        !allCategories && props.searchAllCategories()
    }, []);

    const scroll1 = (scrollOffset) => {
        ref1.current.scrollLeft += scrollOffset;
    };

    const scroll2 = (scrollOffset) => {
        ref2.current.scrollLeft += scrollOffset;
    };

    const scroll3 = (scrollOffset) => {
        ref3.current.scrollLeft += scrollOffset;
    };

    return (
        <div className="container-xl px-3 my-5">
            <h3 className="section-title">{localization.shop_by_category}</h3>
            <p className="p-max-width my-3">
                {localization.shop_by_text}
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
                        <div className="position-relative">
                            <div className="scroll-bt-cont d-flex position-absolute w-100">
                                <div className="flex-fill text-left position-relative">
                                    <button className="btn scroll-btn-left scroll-btn px-1"
                                            onClick={() => scroll1(-200)}
                                    >
                                        <FontAwesomeIcon icon={faArrowLeft} size="sm" color="#fff"/>
                                    </button>
                                </div>
                                <div className="flex-fill text-right position-relative">
                                    <button className="btn scroll-btn-right scroll-btn px-1"
                                            onClick={() => scroll1(200)}
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} size="sm" color="#fff"/>
                                    </button>
                                </div>
                            </div>

                            <div className="pt-3 d-flex overflow-auto p-0" ref={ref1}>
                                {
                                    allCategories && allCategories.map(cat => cat.subCategory && cat.subCategory.map(sub => (
                                        sub.link.split("/")[1] === 'HOME_FURNITURE' && <Item key={sub.id} item={sub}/>
                                    )))
                                }
                            </div>
                        </div>

                        <div className="position-relative">
                            <div className="scroll-bt-cont d-flex position-absolute w-100">
                                <div className="flex-fill text-left position-relative">
                                    <button className="btn scroll-btn-left scroll-btn px-1"
                                            onClick={() => scroll2(-200)}
                                    >
                                        <FontAwesomeIcon icon={faArrowLeft} size="sm" color="#fff"/>
                                    </button>
                                </div>
                                <div className="flex-fill text-right position-relative">
                                    <button className="btn scroll-btn-right scroll-btn px-1"
                                            onClick={() => scroll2(200)}
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} size="sm" color="#fff"/>
                                    </button>
                                </div>
                            </div>

                            <div className="pt-3 d-flex overflow-auto" ref={ref2}>
                                {
                                    allCategories && allCategories.map(cat => cat.subCategory && cat.subCategory.map(sub => (
                                        sub.link.split("/")[1] === 'COMMERCIAL_FURNITURE' &&
                                        <Item key={sub.id} item={sub}/>
                                    )))
                                }
                            </div>
                        </div>

                        <div className="position-relative">
                            <div className="scroll-bt-cont d-flex position-absolute w-100">
                                <div className="flex-fill text-left position-relative">
                                    <button className="btn scroll-btn-left scroll-btn px-1"
                                            onClick={() => scroll3(-200)}
                                    >
                                        <FontAwesomeIcon icon={faArrowLeft} size="sm" color="#fff"/>
                                    </button>
                                </div>
                                <div className="flex-fill text-right position-relative">
                                    <button className="btn scroll-btn-right scroll-btn px-1"
                                            onClick={() => scroll3(200)}
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} size="sm" color="#fff"/>
                                    </button>
                                </div>
                            </div>

                            <div className="pt-3 d-flex overflow-auto" ref={ref3}>
                                {
                                    allCategories && allCategories.map(cat => cat.subCategory && cat.subCategory.map(sub => (
                                        sub.link.split("/")[1] === 'FINISHING_AND_DECORATIONS' &&
                                        <Item key={sub.id} item={sub}/>
                                    )))
                                }
                            </div>
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
        allCategories: state.search.allCategories,
        localization: state.localization.chosenLanguage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchAllCategories: () => dispatch(searchAllCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopByCategory);