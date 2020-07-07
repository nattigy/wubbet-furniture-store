import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import SingleItem from "./singleItem";
import PathIndicator from "../pathIndicator/pathIndicator";

const MyItems = props => {
    return (
        <div>
            <Header/>
            <PathIndicator path={[
                {currentPath: false, pathName: "HOME", pathLink: "/"},
                {currentPath: false, pathName: "ACCOUNT", pathLink: "/"},
                {currentPath: true, pathName: "MY ITEMS", pathLink: props.match.path},
            ]}/>
            <div className="container-lg">
                <SingleItem/>
                <SingleItem/>
            </div>
            <Footer/>
        </div>
    );
};

export default MyItems;