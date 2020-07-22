import React, {Fragment, useEffect, useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {applyFilter, searchAllItems, searchItems} from "../../store/search/search.utils";
import SingleProduct from "../singleProductView/singleProduct"
import {connect} from "react-redux";
import PreLoader from "../preLoader/preLoader";
import Filter from "./filters";
import PathIndicator from "../pathIndicator/pathIndicator";

const Store = props => {

    const [rerender, setRerender] = useState(undefined);
    const [filterList, setFilterList] = useState([]);

    const {name = "", category, sub_category = ""} = props.match.params;
    const {isSearching, searchItemsResult} = props;

    let counter = 0;

    useEffect(() => {
        if (rerender === undefined) {
            if (category === "all" && name === "all")
                props.searchAllItems();
            else if (category === "all" && name !== "all")
                props.searchItems({fieldPath: "name_array", opStr: "array-contains", value: name});
            else if (category !== "all" && name === "all")
                props.searchItems({fieldPath: "category", opStr: "==", value: category});
            else if (category !== "all" && name === "" || category !== "all" && name === "_")
                props.searchItems({fieldPath: "category", opStr: "==", value: category});
            else
                props.searchItems({fieldPath: "cat_name_combo", opStr: "array-contains", value: name + "_" + category});
        } else {
            props.applyFilter({filterList})
        }
    }, [rerender, filterList, props.match.url]);

    return (
        <Fragment>
            <Header/>
            <PathIndicator path={[
                {currentPath: false, pathName: "HOME", pathLink: "/"},
                {currentPath: false, pathName: "ALL CATEGORY", pathLink: "/items/all/all"},
                {currentPath: true, pathName: "ITEM NAME", pathLink: "/item/sdhfkjhsakjhdfkjkk"},
            ]}/>
            <div className="section py-4">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-2">
                            <Filter appplyFilter={newFilterList => {
                                setFilterList(newFilterList);
                                setRerender(!rerender)
                            }}/>
                        </div>
                        <div id="store" className="col-md-10">
                            <div className="row text-center">
                                {isSearching ?
                                    <div className="preloading-store">
                                        <div className="text-center">
                                            <PreLoader/>
                                        </div>
                                    </div> :
                                    <Fragment>
                                        {searchItemsResult &&
                                        <Fragment>
                                            {searchItemsResult.map((item, index) => {
                                                if (sub_category !== "") {
                                                    if (item.sub_category === sub_category) {
                                                        counter++;
                                                        return <SingleProduct key={item.id} margin="mx-auto"
                                                                              item={item}/>
                                                    }
                                                    if (index + 1 === searchItemsResult.length && counter === 0) {
                                                        return <div className="text-center w-100">
                                                            <h6>no items</h6>
                                                        </div>
                                                    }
                                                    if (index + 1 === searchItemsResult.length) {
                                                        counter = 0;
                                                    }
                                                } else {
                                                    return <SingleProduct key={item.id} margin="mx-auto"
                                                                          item={item}/>
                                                }
                                            })}
                                        </Fragment>
                                        }
                                    </Fragment>
                                }
                                {searchItemsResult && searchItemsResult.length === 0 &&
                                <div className="text-center w-100 py-5">
                                    <h6 className="my-5">no items</h6>
                                </div>}
                            </div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Store);