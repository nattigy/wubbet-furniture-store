import React, {Fragment, useEffect} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import {searchAllItems, searchItems} from "../../store/actions/searchActions";
import SingleProduct from "../singleProductView/singleProduct"
import {connect} from "react-redux";
import {PreLoader} from "../preLoader/preLoader";

const Store = props => {

    const {name = "", category, sub_category = ""} = props.match.params;
    const {isSearching, searchItemsResult} = props;

    let counter = 0;

    useEffect(() => {
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
    }, []);

    return (
        <Fragment>
            <Header/>
            <div className="section py-4">
                <div className="container-lg">
                    <div className="">
                        {/*<Filter/>*/}
                        <div id="store" className="">
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
                                <div className="text-center w-100">
                                    <h6>no items</h6>
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
        sub_category_nav: state.nav.sub_category_nav,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchItems: (credentials) => dispatch(searchItems(credentials)),
        searchAllItems: () => dispatch(searchAllItems()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);