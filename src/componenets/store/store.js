import React, {Fragment, useEffect} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import Filter from "./filters";
import {searchAllItems, searchItems} from "../../store/actions/searchActions";
import SingleProduct from "../singleProductView/singleProduct"
import {connect} from "react-redux";
import {PreLoader} from "../preLoader/preLoader";

const Store = props => {

    const {name, category} = props.match.params;
    const {isSearching, searchItemsResult} = props;

    useEffect(() => {
        if(category === "all" && name === "all")
            props.searchAllItems();
        else if(category === "all" && name !== "all")
            props.searchItems({fieldPath: "name_array", opStr: "array-contains", value: name});
        else if(category !== "all" && name === "all")
            props.searchItems({fieldPath: "category", opStr: "==", value: category});
        else
            props.searchItems({fieldPath: "cat_name_combo", opStr: "array-contains", value: name + "_" + category});
    }, []);

    return (
        <Fragment>
            <Header/>
            <div className="section py-4">
                <div className="container-lg">
                    <div className="row">
                        <Filter/>
                        <div id="store" className="col-lg-9">
                            <div className="store-filter clearfix my-3">
                                <div className="store-sort">
                                    <label>
                                        Sort By:
                                        <select className="custom-select">
                                            <option value="0">Popular</option>
                                            <option value="1">Position</option>
                                        </select>
                                    </label>

                                    <label>
                                        Show:
                                        <select className="custom-select">
                                            <option value="0">20</option>
                                            <option value="1">50</option>
                                        </select>
                                    </label>
                                </div>
                            </div>

                            <div className="row text-center">
                                {isSearching ?
                                    <div className="preloading-store">
                                        <div className="text-center">
                                            <PreLoader/>
                                        </div>
                                    </div> :
                                    <Fragment>
                                        {searchItemsResult ?
                                            <Fragment>
                                                {searchItemsResult.map(item =>
                                                    <SingleProduct key={item.id} margin="mx-auto" item={item}/>)}
                                            </Fragment> :
                                            <div>
                                                <h6>no items</h6>
                                            </div>
                                        }
                                    </Fragment>
                                }
                            </div>

                            <div className="store-filter clearfix">
                                <span className="store-qty">Showing 20-100 products</span>
                                <ul className="store-pagination">
                                    <li className="active">1</li>
                                    <li><a href="/">2</a></li>
                                    <li><a href="/">3</a></li>
                                    <li><a href="/">4</a></li>
                                    <li><a href="/"><i className="fa fa-angle-right"/></a></li>
                                </ul>
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
        searchItemsResult: state.search.searchItems
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchItems: (credentials) => dispatch(searchItems(credentials)),
        searchAllItems: () => dispatch(searchAllItems()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);