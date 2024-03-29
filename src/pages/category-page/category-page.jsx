import React, {useEffect} from "react";
import {connect} from "react-redux";

import CategoryItem from "../../components/category-item/category-item.component";

import "./category-page.style.sass"
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Categories from "../../components/header/categories";
import PreLoader from "../../components/pre-loader/pre-loader.component";
import PathIndicator from "../../components/path-indicator/path-indicator.component";

import {searchCategory} from "../../store/search/search.utils";

const CategoryPage = props => {

    const {isSearchingCat, isSearchingCatDone, category, localization} = props;

    useEffect(() => {
        props.searchCategory({category: props.match.params.category});
    }, []);

    return (
        <div>
            <Header/>
            <PathIndicator path={[
                {currentPath: false, pathName: "Home", pathLink: "/"},
                {currentPath: false, pathName: "CATEGORY", pathLink: props.match.url},
                {
                    currentPath: true,
                    pathName: Categories.map(cat => cat.id === props.match.params.category && ` ${cat.name}`),
                    pathLink: props.match.url
                },
            ]}/>
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
                            category && category.description
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
                                category && category.subCategory.map(cat => <CategoryItem key={cat.id} item={cat}/>)
                            }
                        </div>
                    }
                </section>
            </div>
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isSearchingCat: state.search.isSearchingCat,
        isSearchingCatDone: state.search.isSearchingCatDone,
        isSearchError: state.search.isSearchError,
        category: state.search.category,
        localization: state.localization.chosenLanguage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchCategory: credentials => dispatch(searchCategory(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);