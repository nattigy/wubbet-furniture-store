import React, {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import PreLoader from "../../components/pre-loader/pre-loader.component";

import {applyFilter, searchAllItems, searchItems} from "../../store/search/search.utils";

import "./store-style.sass"
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import SingleItem from "../../components/single-item/single-item.component";
import Filters from "../../components/filters/filters";

const ShoppingPage = props => {

    // const {item_name = "", category, sub_category = ""} = props.match.params;
    const {item_name = ""} = props.match.params;
    const {isSearching, searchItemsResult} = props;

    useEffect(() => {
        // if (rerender === undefined) {
        if (item_name === "all")
            props.searchAllItems();
        else
            props.searchItems({fieldPath: "name_array", opStr: "array-contains", value: item_name});
        // else if (category !== "all" && name === "all")
        //     props.searchItems({fieldPath: "category", opStr: "==", value: category});
        // else if (category !== "all" && name === "" || category !== "all" && name === "_")
        //     props.searchItems({fieldPath: "category", opStr: "==", value: category});
        // else
        //     props.searchItems({fieldPath: "cat_name_combo", opStr: "array-contains", value: name + "_" + category});
        // } else {
        //     props.applyFilter({filterList})
        // }
    }, [props.match.params.item_name]);

    return (
        <Fragment>
            <Header/>
            {/*<PathIndicator path={[*/}
            {/*    {currentPath: false, pathName: "HOME", pathLink: "/"},*/}
            {/*    {currentPath: false, pathName: "ALL CATEGORY", pathLink: "/items/all/all"},*/}
            {/*    {currentPath: true, pathName: "ITEM NAME", pathLink: "/item/sdhfkjhsakjhdfkjkk"},*/}
            {/*]}/>*/}
            <div className="section py-4 px-0 mx-0">
                <div className="container-xl px-3">
                    <h1 className="section-title">
                        "{item_name && item_name}"
                    </h1>
                </div>
                <Filters/>
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
                    <div className="px-0 mx-0">
                        {/*<div className="col-md-2">*/}
                        {/*    <FilterOld*/}
                        {/*        appplyFilter={newFilterList => {*/}
                        {/*            setFilterList(newFilterList);*/}
                        {/*            setRerender(!rerender)*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</div>*/}

                        {/*<div id="store" className="">*/}
                        {/*    <div className="row text-center">*/}
                        {/*{*/}
                        {/*    isSearching ? (*/}
                        {/*        <div className="preloading-store">*/}
                        {/*            <div className="text-center">*/}
                        {/*                <PreLoader/>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    ) : (*/}
                        {/*        <Fragment>*/}
                        {/*            {*/}
                        {/*                searchItemsResult &&*/}
                        {/*                <Fragment>*/}
                        {/*                    {*/}
                        {/*                        searchItemsResult.map((item, index) => {*/}
                        {/*                            if (sub_category !== "") {*/}
                        {/*                                if (item.sub_category === sub_category) {*/}
                        {/*                                    counter++;*/}
                        {/*                                    return (*/}
                        {/*                                        <SingleProduct*/}
                        {/*                                            key={item.id}*/}
                        {/*                                            margin="mx-auto"*/}
                        {/*                                            item={item}/>*/}
                        {/*                                    )*/}
                        {/*                                }*/}
                        {/*                                if (index + 1 === searchItemsResult.length && counter === 0) {*/}
                        {/*                                    return (*/}
                        {/*                                        <div className="text-center w-100">*/}
                        {/*                                            <h6>no items</h6>*/}
                        {/*                                        </div>*/}
                        {/*                                    )*/}
                        {/*                                }*/}
                        {/*                                if (index + 1 === searchItemsResult.length) {*/}
                        {/*                                    counter = 0;*/}
                        {/*                                }*/}
                        {/*                            } else {*/}
                        {/*                                return (*/}
                        {/*                                    <SingleProduct*/}
                        {/*                                        key={item.id}*/}
                        {/*                                        margin="mx-auto"*/}
                        {/*                                        item={item}/>*/}
                        {/*                                )*/}
                        {/*                            }*/}
                        {/*                        })*/}
                        {/*                    }*/}
                        {/*                </Fragment>*/}
                        {/*            }*/}
                        {/*        </Fragment>*/}
                        {/*    )*/}
                        {/*}*/}
                        {/*{*/}
                        {/*    searchItemsResult && searchItemsResult.length === 0 &&*/}
                        {/*    <div className="text-center w-100 py-5">*/}
                        {/*        <h6 className="my-5">no items</h6>*/}
                        {/*    </div>*/}
                        {/*}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
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