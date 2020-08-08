import React from "react";
import {Link} from "react-router-dom";

import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import homeFurniture from "../../assets/img/homeFurniture.jpg"
import commercialFurniture from "../../assets/img/commercialFurnitures.jpg"
import decorationAndFinishing from "../../assets/img/decorationAndFinishing.jpg"

import "./explore-card.sass"

const ExploreCards = () => {
    return (
        <div className="container-xl my-3 px-2">
            <div className="row px-0 mx-0">
                <div className="col-md-4 col-xs-6 px-0 mx-0 pr-3">
                    <div className="shop">
                        <div className="shop-img">
                            <img src={homeFurniture} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>Home<br/>Furniture</h3>
                            <Link to="/cat/home" className="cta-btn">Shop now
                                <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    color="#fff"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xs-6 px-0 mx-0 pr-3">
                    <div className="shop">
                        <div className="shop-img">
                            <img src={commercialFurniture} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>Commercial<br/>Furniture</h3>
                            <Link to="/cat/commercial" className="cta-btn">Shop now
                                <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    color="#fff"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xs-6 px-0 mx-0 pr-3">
                    <div className="shop">
                        <div className="shop-img">
                            <img src={decorationAndFinishing} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>Decoration and<br/>Finishing</h3>
                            <Link to="/cat/finishing-and-decorations" className="cta-btn">Shop now
                                <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    color="#fff"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreCards;
