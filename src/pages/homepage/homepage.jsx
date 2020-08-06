import React, {Fragment} from "react";

import ExploreCards from "../../components/explore-cards/explore-cards.component";
import NewProducts from "../../components/new-products/new-products.component";

import "./home.style.sass"

const HomePage = () => {
    return (
        <Fragment>
            <ExploreCards/>
            <NewProducts/>
        </Fragment>
    );
};

export default HomePage;