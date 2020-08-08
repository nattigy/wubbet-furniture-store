import React, {Fragment} from "react";

import ExploreCards from "../../components/explore-cards/explore-cards.component";
import NewProducts from "../../components/new-items/new-items.component";
import TopSelling from "../../components/top-selling/top-selling";

import "./home.style.sass"
import HotDeals from "../../components/hot-deals/hot-deals.component";
import RecentView from "../../components/recent-view/recent-view";
import ShopByCategory from "../../components/shop-by-category/shop-by-category";

const HomePage = () => {
    return (
        <Fragment>
            <ExploreCards/>
            <ShopByCategory/>
            <NewProducts/>
            <HotDeals/>
            <TopSelling/>
            <RecentView/>
        </Fragment>
    );
};

export default HomePage;