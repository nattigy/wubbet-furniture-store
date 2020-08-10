import React from "react";

import {faCartPlus, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import pic from "../../assets/img/pic.webp"

import "./single-item.style.sass"

const SingleItem = ({item}) => {
    return (
        <div className="col-6 col-md-4 col-lg-3 mb-4 item-cont">
            <div className="overflow-hidden h-auto position-relative w-100">
                <button
                    className="border-0 text-center py-2 shadow-sm-custom bg-light add-to-wishlist m-2">
                    <FontAwesomeIcon icon={faHeart} size="1x" color="#111"/>
                </button>
                <img className="w-100 h-100" src={pic} alt=""/>
            </div>
            <div className="mt-3 w-100">
                <p className="mb-2">
                    {item.name}
                </p>
                <p className="mb-2 small text-muted">
                    size
                </p>
                <p className="mb-2 font-weight-bold small">
                    <span className="font-18">{item.price}</span><sup>.99</sup> ETB
                </p>
                <div className="mb-2 d-flex w-100 flex-nowrap">
                    <div className="">
                        <FontAwesomeIcon icon={faStar} size="xs" color="#111"/>
                        <FontAwesomeIcon icon={faStar} size="xs" color="#111"/>
                        <FontAwesomeIcon icon={faStar} size="xs" color="#111"/>
                        <FontAwesomeIcon icon={faStar} size="xs" color="#111"/>
                        <FontAwesomeIcon icon={faStar} size="xs" color="#111"/>
                    </div>
                    <div className="flex-grow-1 text-right invisible item-btns">
                        <button className="add-btn border-0 bg-red mx-2 shadow-sm-custom">
                            <FontAwesomeIcon className="shadow-lg" icon={faCartPlus} size="1x" color="#fff"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;