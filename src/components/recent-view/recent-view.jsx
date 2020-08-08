import React from "react";

import "./recent-view.style.sass"

import image from "./../../assets/img/living.webp"
import {Link} from "react-router-dom";

const Item = () => (
    <div className="col-4 col-md-3">
        <div className="overflow-hidden h-auto">
            <img className="w-100 cat-image" src={image} alt=""/>
        </div>
        <div className="my-3 w-100 text-truncate">
            <Link className="text-dark">Decorative Modern Wallpapers</Link>
        </div>
    </div>
);

const RecentView = () => {
    return (
        <div className="container-xl px-2 my-5">
            <h1 className="section-title mb-5">Your recently viewed products</h1>
            <div className="d-flex overflow-auto">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    );
};

export default RecentView;