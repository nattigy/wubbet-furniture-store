import React from "react";
import {Link} from "react-router-dom";

import image from "./../../assets/img/living.webp"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import "./cat-item.style.sass"

const CategoryItem = props => {
    return (
        <div className="col-12 col-sm-6 col-lg-4 my-4">
            <Link>
                <div className="overflow-hidden h-auto">
                    <img className="w-100 cat-image" src={image} alt=""/>
                </div>
                <div className="my-3">
                    <Link className="text-dark" to="/cat/home/living-room">Living Room</Link>
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowRight} color="#111"/>
                </div>
            </Link>
        </div>
    );
};

export default CategoryItem;