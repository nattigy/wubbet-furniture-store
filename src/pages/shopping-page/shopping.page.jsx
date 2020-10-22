import React, {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import PreLoader from "../../components/pre-loader/pre-loader.component";

import {applyFilter, searchAllItems, searchItems} from "../../store/search/search.utils";

import "./store-style.sass"
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import SingleItem from "../../components/single-item/single-item.component";
import PathIndicator from "../../components/path-indicator/path-indicator.component";

const ShoppingPage = props => {

    const {item_name = ""} = props.match.params;
    const {isSearching, searchItemsResult} = props;

    useEffect(() => {
        if (item_name === "all")
            props.searchAllItems();
        else
            props.searchItems({fieldPath: "name_array", opStr: "array-contains", value: item_name});
    }, [props.match.params.item_name]);

    return (
        <Fragment>
            <Header/>
            <PathIndicator path={[
                {currentPath: false, pathName: "HOME", pathLink: "/"},
                {currentPath: false, pathName: "ALL CATEGORY", pathLink: "/search/items/all"},
                {currentPath: true, pathName: `${item_name ? item_name : ""}`, pathLink: "#"},
            ]}/>
            <div className="section py-4 px-0 mx-0">
                <div className="container-xl px-3">
                    <h1 className="section-title">
                        "{item_name && item_name}"
                    </h1>
                </div>
                <div className="container-xl px-3">
                    <section className="row my-5">
                        {
                            isSearching ? (
                                <div className="preloading-store">
                                    <div className="text-center">
                                        <PreLoader/>
                                    </div>
                                </div>
                            ) : (
                                <Fragment>
                                    {
                                        searchItemsResult &&
                                        <Fragment>
                                            {
                                                searchItemsResult.map(item => <SingleItem item={item}/>)
                                            }
                                        </Fragment>
                                    }
                                </Fragment>
                            )
                        }
                        {
                            searchItemsResult && searchItemsResult.length === 0 &&
                            <div className="text-center w-100 py-5">
                                <h6 className="my-5">no items</h6>
                            </div>
                        }
                    </section>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        isSearching: state.search.isSearching,
        isSearchError: state.search.isSearchError,
        searchItemsResult: state.search.searchItems,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchItems: (credentials) => dispatch(searchItems(credentials)),
        applyFilter: (credentials) => dispatch(applyFilter(credentials)),
        searchAllItems: () => dispatch(searchAllItems()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage);