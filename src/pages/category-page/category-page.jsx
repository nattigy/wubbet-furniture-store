import React from "react";

import PathIndicator from "../../components/path-indicator/path-indicator.component";

import CategoryItem from "../../components/category-item/category-item.component";
import RecentView from "../../components/recent-view/recent-view";

import "./category-page.style.sass"

const CategoryPage = props => {
    return (
        <div>
            <PathIndicator path={[
                {currentPath: false, pathName: "Home", pathLink: "/"},
                {currentPath: true, pathName: "Home Furniture", pathLink: props.match.url},
            ]}/>
            <div className="container-xl px-2">
                <section>
                    <h1 className="mt-5 font-weight-bold text-break cat-title">WUBBET Home Furniture</h1>
                    <p className="my-5 p-max-width">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut delectus illo inventore
                        laborum
                        laudantium possimus qui repudiandae sed velit.
                    </p>
                </section>
                <section>
                    <div className="row">
                        <CategoryItem/>
                        <CategoryItem/>
                        <CategoryItem/>
                        <CategoryItem/>
                    </div>
                </section>
            </div>
            <RecentView/>
        </div>
    );
};

export default CategoryPage;