import React, {useEffect} from "react";
import SingleItem from "../../components/single-item/single-item.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import {connect} from "react-redux";
import {searchItems} from "../../store/search/search.utils";
import PreLoader from "../../components/pre-loader/pre-loader.component";
import CategoryGallery from "../../components/category-gallery/category-gallery";

const SubCategory = props => {

    const {isSearching, isSearchingDone, searchedItems} = props;

    useEffect(() => {
        props.searchItems({fieldPath: "sub_category", opStr: "array-contains", value: props.match.params.subCategory})
    }, []);

    return (
        <div>
            <Header/>
            {/*<PathIndicator path={[*/}
            {/*    {currentPath: false, pathName: "Home", pathLink: "/"},*/}
            {/*    {currentPath: false, pathName: "Home Furniture", pathLink: "/cat/home"},*/}
            {/*    {currentPath: true, pathName: "Living Room", pathLink: props.match.url},*/}
            {/*]}/>*/}
            <div className="container-xl px-3">
                <section>
                    <h1 className="mt-5 font-weight-bold text-break cat-title">
                        {
                            props.match.params.subCategory
                        }
                    </h1>
                </section>
                {/*<Filters/>*/}
                {
                    isSearching &&
                    <div className="preloading-cart text-center overflow-hidden-y">
                        <PreLoader/>
                    </div>
                }
                {
                    isSearchingDone &&
                    <section className="row my-5">
                        {
                            searchedItems.map(item => <SingleItem key={item.id} item={item}/>)
                        }
                    </section>
                }
            </div>
            <CategoryGallery category={props.match.params.category} name={props.match.params.subCategory}/>
            {/*<RecentView/>*/}
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isSearching: state.search.isSearching,
        isSearchingDone: state.search.isSearchingDone,
        isSearchError: state.search.isSearchError,
        searchedItems: state.search.searchItems
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchItems: credentials => dispatch(searchItems(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategory);