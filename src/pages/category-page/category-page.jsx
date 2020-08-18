import React, {useEffect} from "react";

import CategoryItem from "../../components/category-item/category-item.component";

import "./category-page.style.sass"
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Categories from "../../components/header/categories";
import {connect} from "react-redux";
import {searchCategory} from "../../store/search/search.utils";
import PreLoader from "../../components/pre-loader/pre-loader.component";

const CategoryPage = props => {

    const {isSearchingCat, isSearchingCatDone, category} = props;

    useEffect(() => {
        props.searchCategory({category: props.match.params.category});
    }, []);

    return (
        <div>
            <Header/>
            {/*<PathIndicator path={[*/}
            {/*    {currentPath: false, pathName: "Home", pathLink: "/"},*/}
            {/*    {currentPath: true, pathName: props.match.pathName, pathLink: props.match.url},*/}
            {/*]}/>*/}
            <div className="container-xl px-3">
                <section>
                    <h1 className="mt-5 font-weight-bold text-break cat-title">
                        WUBBET
                        {
                            Categories.map(cat => cat.id === props.match.params.category && ` ${cat.name}`)
                        }
                    </h1>
                    <p className="my-3 p-max-width">
                        {
                            isSearchingCatDone &&
                            category.description
                        }
                    </p>
                </section>
                <section>
                    {
                        isSearchingCat &&
                        <div className="preloading-cart text-center overflow-hidden-y">
                            <PreLoader/>
                        </div>
                    }
                    {
                        isSearchingCatDone &&
                        <div className="row">
                            {
                                category.subCategory.map(cat => <CategoryItem key={cat.id} item={cat}/>)
                            }
                        </div>
                    }
                </section>
            </div>
            {/*<RecentView/>*/}
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isSearchingCat: state.search.isSearchingCat,
        isSearchingCatDone: state.search.isSearchingCatDone,
        isSearchError: state.search.isSearchError,
        category: state.search.category
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchCategory: credentials => dispatch(searchCategory(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);