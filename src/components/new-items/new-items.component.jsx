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

    const {isSearchingNewProducts, items, localization} = props;

    useEffect(() => {
        props.searchItems({category: "HOME_FURNITURE"})
        // if (!items) {
        //     if (tab1) {
        //
        //     } else if (tab2) {
        //         props.searchItems({category: "COMMERCIAL_FURNITURE"})
        //     } else if (tab3) {
        //         props.searchItems({category: "FINISHING_MATERIALS"})
        //     }
        // }
    }, [tab1, tab2, tab3]);

    return (
        <div className="container-xl mt-5 px-3">
            <div className="mb-5">
                <h3 className="section-title d-inline-block">{localization.new_product}</h3>
                <div className="section-nav d-inline-block float-right">
                    <ul className="nav nav-tabs d-inline-block border-bottom-0 section-tab-nav"
                        role="tablist">
                        {/*<li className="d-inline-block mr-3 ">*/}
                        {/*    <a className="nav-link-custom text-dark active font-14" data-toggle="tab" href="#tab1"*/}
                        {/*       onClick={() => {*/}
                        {/*           setTab1(true);*/}
                        {/*           setTab2(false);*/}
                        {/*           setTab3(false);*/}
                        {/*       }}*/}
                        {/*       aria-controls="tab1" aria-selected="false"*/}
                        {/*    >Home</a>*/}
                        {/*</li>*/}
                        {/*<li className="d-inline-block mr-3">*/}
                        {/*    <a className="font-14 text-dark" data-toggle="tab" href="#tab2"*/}
                        {/*       onClick={() => {*/}
                        {/*           setTab1(false);*/}
                        {/*           setTab2(true);*/}
                        {/*           setTab3(false);*/}
                        {/*       }}*/}
                        {/*       aria-controls="tab2" aria-selected="false"*/}
                        {/*    >Commercial</a>*/}
                        {/*</li>*/}
                        {/*<li className="d-inline-block mr-3">*/}
                        {/*    <a className="font-14 text-dark" data-toggle="tab" href="#tab3"*/}
                        {/*       onClick={() => {*/}
                        {/*           setTab1(false);*/}
                        {/*           setTab2(false);*/}
                        {/*           setTab3(true);*/}
                        {/*       }}*/}
                        {/*       aria-controls="tab3" aria-selected="false"*/}
                        {/*    >Finishing Materials</a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tab1" role="tabpanel"
                     aria-labelledby="tab1-tab">
                    <div className="d-flex overflow-auto">
                        {
                            isSearchingNewProducts || isSearchingNewProducts === undefined ?
                                (
                                    <div className="position-relative text-center newProduct-progress">
                                        <PreLoader/>
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
    )
};

const mapStateToProps = state => {
    return {
        isSearchingNewProducts: state.search.isSearchingNewProducts,
        isSearchingNewProductsError: state.search.isSearchingNewProductsError,
        items: state.search.newProducts,
        errorMessage: state.search.errorMessage,
        localization: state.localization.chosenLanguage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchItems: credentials => dispatch(searchNewProducts(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);