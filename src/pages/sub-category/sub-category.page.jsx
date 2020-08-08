import React from "react";

import PathIndicator from "../../components/path-indicator/path-indicator.component";
import SingleItem from "../../components/single-item/single-item.component";
import RecentView from "../../components/recent-view/recent-view";
import Filters from "../../components/filters/filters";
import CategoryGallery from "../../components/category-gallery/category-gallery";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";

const SubCategory = props => {
    return (
        <div>
            <Header/>
            <PathIndicator path={[
                {currentPath: false, pathName: "Home", pathLink: "/"},
                {currentPath: false, pathName: "Home Furniture", pathLink: "/cat/home"},
                {currentPath: true, pathName: "Living Room", pathLink: props.match.url},
            ]}/>
            <div className="container-xl px-3">
                <section>
                    <h1 className="mt-5 font-weight-bold text-break cat-title">Living Room</h1>
                </section>
                <Filters/>
                <section className="row">
                    <SingleItem/>
                    <SingleItem/>
                    <SingleItem/>
                    <SingleItem/>
                    <SingleItem/>
                    <SingleItem/>
                </section>
            </div>
            <CategoryGallery/>
            <RecentView/>
            <Footer/>
        </div>
    );
};

export default SubCategory;