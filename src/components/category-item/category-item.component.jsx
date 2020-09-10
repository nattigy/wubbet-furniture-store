import React from "react";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import "./cat-item.style.sass"

const CategoryItem = ({item}) => {
    return (
        <div className="col-12 col-sm-6 col-lg-4 my-4">
            <Link to={`/cat${item.link}`}>
                <div className="overflow-hidden w-100 cat-img-cont">
                    <img className="cat-img" src={item.images[0]} alt=""/>
                </div>
                <div className="text-dark my-3">{item.name}</div>
                <div>
                    <FontAwesomeIcon icon={faArrowRight} color="#111"/>
                </div>
            </Link>
        </div>
    );
};

export default CategoryItem;