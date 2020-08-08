import React from "react";

import "./shop-by-category.style.sass"

import shopcat from "../../assets/img/shopcat.webp"

const Item = () => (
    <div className="col-6 col-md-4 col-lg-3 px-0 pr-3 mb-3">
        <div className="position-relative overflow-hidden">
            <img className="w-100" src={shopcat} alt=""/>
            <div className="shop-cat-btn w-100 text-center">
                <button className="btn btn-danger rounded-pill px-3 py-2 shadow-sm-custom">Living Room</button>
            </div>
        </div>
    </div>
);

const ShopByCategory = () => {
    return (
        <div className="container-xl px-3 my-5">
            <h1 className="section-title">SHOP BY CATEGORY</h1>
            <p className="p-max-width my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque fuga fugit ratione reiciendis
                rem repudiandae voluptatem? Accusamus dicta doloremque est eum explicabo id maiores, numquam quisquam,
                vero voluptas, voluptatibus.
            </p>
            <div className="pt-3 d-flex overflow-auto">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    );
};

export default ShopByCategory;