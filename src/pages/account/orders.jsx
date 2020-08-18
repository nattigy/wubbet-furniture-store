import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import image from "../../assets/img/living.webp";
import {Link} from "react-router-dom";

const Item = () => (
    <div className="col-6 col-md-4 col-lg-3">
        <div className="overflow-hidden h-auto">
            <img className="w-100 cat-image" src={image} alt=""/>
        </div>
        <div className="my-3 w-100 text-truncate">
            <Link className="text-dark">Decorative Modern Wallpapers</Link>
            <p>More info</p>
        </div>
    </div>
);

const Orders = () => {
    return (
        <div>
            <Header/>
            <div className="container-sm px-3 px-lg-5">
                <div className="px-lg-5 py-5">
                    <div>
                        <h1 className="section-title">Your Orders</h1>
                    </div>
                    <div className="row py-5">
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Orders;