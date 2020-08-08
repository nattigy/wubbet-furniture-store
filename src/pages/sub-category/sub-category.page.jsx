import React from "react";

import PathIndicator from "../../components/path-indicator/path-indicator.component";
import SingleItem from "../../components/single-item/single-item.component";
import RecentView from "../../components/recent-view/recent-view";

const SubCategory = props => {
    return (
        <div>
            <PathIndicator path={[
                {currentPath: false, pathName: "Home", pathLink: "/"},
                {currentPath: false, pathName: "Home Furniture", pathLink: "/cat/home"},
                {currentPath: true, pathName: "Living Room", pathLink: props.match.url},
            ]}/>
            <div className="container-xl px-2">
                <section>
                    <h1 className="my-5 font-weight-bold text-break cat-title">Living Room</h1>
                </section>
                <section className="row">
                    <SingleItem/>
                    <SingleItem/>
                    <SingleItem/>
                    <SingleItem/>
                    <SingleItem/>
                    <SingleItem/>
                </section>
            </div>
            <RecentView/>
        </div>
    );
};

export default SubCategory;