import React, {Fragment} from "react";
import ExploreCardsComponent from "../../components/explore-cards/explore-cards.component";
import NewProducts from "../../components/new-products/new-products.component";

const HomePage = () => {
    return (
        <Fragment>
            <ExploreCardsComponent/>
            <NewProducts/>
        </Fragment>
    );
};

export default HomePage;