import React from "react";
import {connect} from "react-redux";

import PreLoader from "../pre-loader/pre-loader.component";
import SingleItem from "../single-item/single-item.component";
import {searchNewProducts} from "../../store/search/search.utils";

const TopSelling = props => {

    const {isSearchingNewProducts, items, localization} = props;

    return (
        <div className="container-xl overflow-hidden px-3">
            <h3 className="section-title">{localization.top_selling}</h3>
            <div className="d-flex overflow-auto mt-5">
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

export default connect(mapStateToProps, mapDispatchToProps)(TopSelling);