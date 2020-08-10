import React from "react";

import "./shop-by-category.style.sass"

import shopcat from "../../assets/img/shopcat.webp"
import Categories from "../header/categories";
import {Link} from "react-router-dom";

const Item = props => (
    <div className="col-6 col-md-4 col-lg-3 px-0 pr-3 mb-3">
        <div className="position-relative overflow-hidden">
            <img className="w-100" src={shopcat} alt=""/>
            <div className="shop-cat-btn w-100 text-center">
                <Link
                    to={`/cat${props.item.link}`}
                    className="small btn btn-danger py-0 py-md-2 rounded-pill shadow-sm-custom">
                    {props.item.name}
                </Link>
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
                {
                    Categories.map(cat => cat.subCategory.map(sub => (
                        <Item key={sub.id} item={sub}/>
                    )))
                }
            </div>
        </div>
    );
};

export default ShopByCategory;