import React, {Fragment, useEffect, useState} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import SingleProduct from "../singleProductView/singleProduct";
import Filter from "./filters";
import {searchItem} from "../../store/actions/searchActions";
import {connect} from "react-redux";
import {PreLoader} from "../preLoader/preLoader";

const Store = props => {

    const {name, category} = props.match.params;
    const {isSearching} = props;

    useEffect(() => {
        props.searchItem({category, name});
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

                            <div className="row">
                                {true ?
                                <div className="position-relative preloader-cont">
                                    <div className="preloading-store overflow-hidden-y">
                                        <PreLoader/>
                                    </div>
                                </div> :
                                    <div className="col-sm-4 px-0">
                                        <h1>here</h1>ere
                                        {/*<SingleProduct/>*/}
                                    </div>
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
        searchItems: state.search.searchItems
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchItem: (credentials) => dispatch(searchItem(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);