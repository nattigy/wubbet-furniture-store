import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import PreLoader from "../pre-loader/pre-loader.component";

import {searchNewProducts} from "../../store/search/search.utils";

import "./new-items.style.sass"
import SingleItem from "../single-item/single-item.component";

const NewProducts = props => {

    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);

    const {isSearchingNewProducts, items} = props;

    useEffect(() => {
        if (tab1) {
            props.searchItems({category: "HOME_FURNITURE"})
        } else if (tab2) {
            props.searchItems({category: "COMMERCIAL_FURNITURE"})
        } else if (tab3) {
            props.searchItems({category: "FINISHING_MATERIALS"})
        }
    }, [tab1, tab2, tab3]);

    return (
        <div className="section px-0 mx-0">
            <div className="container-xl overflow-hidden px-2">
                <div className="row px-0 mx-0">
                    <div className="col-md-12 px-0 mx-0">
                        <div className="section-title mb-3 px-0 mx-0">
                            <h3 className="title d-inline-block">NEW PRODUCTS</h3>
                            <div className="section-nav d-inline-block float-right">
                                <ul className="nav nav-tabs d-inline-block border-bottom-0 section-tab-nav"
                                    role="tablist">
                                    <li className="d-inline-block mr-3 ">
                                        <a className="nav-link-custom active font-14" data-toggle="tab" href="#tab1"
                                           onClick={() => {
                                               setTab1(true);
                                               setTab2(false);
                                               setTab3(false);
                                           }}
                                           aria-controls="tab1" aria-selected="false"
                                        >Home</a>
                                    </li>
                                    <li className="d-inline-block mr-3">
                                        <a className="font-14" data-toggle="tab" href="#tab2"
                                           onClick={() => {
                                               setTab1(false);
                                               setTab2(true);
                                               setTab3(false);
                                           }}
                                           aria-controls="tab2" aria-selected="false"
                                        >Commercial</a>
                                    </li>
                                    <li className="d-inline-block mr-3">
                                        <a className="font-14" data-toggle="tab" href="#tab3"
                                           onClick={() => {
                                               setTab1(false);
                                               setTab2(false);
                                               setTab3(true);
                                           }}
                                           aria-controls="tab3" aria-selected="false"
                                        >Finishing Materials</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mt-4 px-0 mx-0">
                        <div className="row">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab1" role="tabpanel"
                                     aria-labelledby="tab1-tab">
                                    <div className="d-flex overflow-auto">
                                        {
                                            isSearchingNewProducts || isSearchingNewProducts === undefined ?
                                                (
                                                    <div className="position-relative newProduct-progress">
                                                        <div className="preloading-newProduct">
                                                            <PreLoader/>
                                                        </div>
                                                    </div>
                                                ) :
                                                items && items.length !== 0 ? items.map(item =>
                                                        <SingleItem key={item.id} item={item}/>
                                                    // <SingleProduct key={item.id} margin="mx-3" item={item}/>
                                                ) : (
                                                    <div className="text-center my-5">
                                                        <h6>No Items To Display</h6>
                                                    </div>
                                                )
                                        }
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab2" role="tabpanel"
                                     aria-labelledby="tab2-tab">
                                    <div className="d-flex overflow-auto">
                                        {
                                            isSearchingNewProducts || isSearchingNewProducts === undefined ?
                                                (
                                                    <div className="position-relative newProduct-progress">
                                                        <div className="preloading-newProduct">
                                                            <PreLoader/>
                                                        </div>
                                                    </div>
                                                ) :
                                                items && items.length !== 0 ? items.map(item =>
                                                        <SingleItem key={item.id} item={item}/>
                                                    // <SingleProduct key={item.id} margin="mx-3" item={item}/>
                                                ) : (
                                                    <div className="text-center my-5">
                                                        <h6>No Items To Display</h6>
                                                    </div>
                                                )
                                        }
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab3" role="tabpanel"
                                     aria-labelledby="tab3-tab">
                                    <div className="d-flex overflow-auto">
                                        {
                                            isSearchingNewProducts || isSearchingNewProducts === undefined ? (
                                                <div className="position-relative newProduct-progress">
                                                    <div className="preloading-newProduct">
                                                        <PreLoader/>
                                                    </div>
                                                </div>
                                            ) : items && items.length !== 0 ? items.map(item =>
                                                    <SingleItem key={item.id} item={item}/>
                                                // <SingleProduct key={item.id} margin="mx-3" item={item}/>
                                            ) : (
                                                <div className="text-center my-5">
                                                    <h6>No Items To Display</h6>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isSearchingNewProducts: state.search.isSearchingNewProducts,
        isSearchingNewProductsError: state.search.isSearchingNewProductsError,
        items: state.search.newProducts,
        errorMessage: state.search.errorMessage,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchItems: credentials => dispatch(searchNewProducts(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);