import React from "react";

import PathIndicator from "../../components/path-indicator/path-indicator.component";

import CategoryItem from "../../components/category-item/category-item.component";
import RecentView from "../../components/recent-view/recent-view";

import "./category-page.style.sass"
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Categories from "../../components/header/categories";

const CategoryPage = props => {

    return (
        <div>
            <Header/>
            <PathIndicator path={[
                {currentPath: false, pathName: "Home", pathLink: "/"},
                {currentPath: true, pathName: props.match.pathName, pathLink: props.match.url},
            ]}/>
            <div className="container-xl px-3">
                <section>
                    <h1 className="mt-5 font-weight-bold text-break cat-title">
                        WUBBET
                        {
                            Categories.map(cat => `/cat${cat.link}` === props.match.url && ` ${cat.name}`)
                        }
                    </h1>
                    <p className="my-5 p-max-width">
                        {
                            Categories.map(cat => `/cat${cat.link}` === props.match.url && cat.description)
                        }
                    </p>
                </section>
                <section>
                    <div className="row">
                        {
                            Categories.map(cat => `/cat${cat.link}` === props.match.url && (
                                cat.subCategory.map(sub => (
                                    <CategoryItem key={sub.id} item={sub}/>
                                ))
                            ))
                        }
                    </div>
                </section>
            </div>
            <RecentView/>
            <Footer/>
        </div>
    );
};

export default CategoryPage;