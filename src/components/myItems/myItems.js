import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import SingleItem from "./singleItem";

const MyItems = props => {
    return (
        <div>
            <Header/>
            <div className="container-lg">
                <h3>My Items</h3>
                <SingleItem/>
                <SingleItem/>
            </div>
            <Footer/>
        </div>
    );
};

export default MyItems;