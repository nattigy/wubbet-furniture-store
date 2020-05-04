import React, {Fragment} from "react";
import Header from "../header/header";
import ExploreCards from "./exploreCards";
import {Footer} from "../footer/footer";
import {NewProducts} from "../newProducts/newProducts";

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <ExploreCards/>
            <NewProducts/>
            <Footer/>
        </Fragment>
    );
};

export default Home;