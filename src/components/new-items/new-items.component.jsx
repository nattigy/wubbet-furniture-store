import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import PreLoader from "../pre-loader/pre-loader.component";

import {searchNewProducts} from "../../store/search/search.utils";

import "./new-items.style.sass"
import SingleItem from "../single-item/single-item.component";

const NewProducts = props => {

    const {isSearchingNewProducts, items, localization} = props;

    useEffect(() => {
        props.searchItems()
    }, []);

    return (
        <div className="container-xl mt-5 px-3">
            <div className="mb-5">
                <h3 className="section-title d-inline-block">{localization.new_product}</h3>
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
        searchItems: () => dispatch(searchNewProducts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);