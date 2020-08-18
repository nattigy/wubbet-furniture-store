import React, {Fragment} from "react";

import ExploreCards from "../../components/explore-cards/explore-cards.component";
import NewProducts from "../../components/new-items/new-items.component";
import TopSelling from "../../components/top-selling/top-selling";

import "./home.style.sass"
import HotDeals from "../../components/hot-deals/hot-deals.component";
import ShopByCategory from "../../components/shop-by-category/shop-by-category";
import Header from "../../components/header/header.component"
import Footer from "../../components/footer/footer.component"

const HomePage = () => {
    return (
        <Fragment>
            <Header/>
            <ExploreCards/>
            <ShopByCategory/>
            <NewProducts/>
            <HotDeals/>
            <TopSelling/>
            {/*<RecentView/>*/}
            <Footer/>
        </Fragment>
    );
};

export default HomePage;