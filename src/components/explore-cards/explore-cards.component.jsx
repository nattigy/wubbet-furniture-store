import React from "react";
import {Link} from "react-router-dom";

import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import homeFurniture from "../../assets/img/homeFurniture.jpg"
import commercialFurniture from "../../assets/img/commercialFurnitures.jpg"
import decorationAndFinishing from "../../assets/img/decorationAndFinishing.jpg"

const ExploreCardsComponent = () => {
    return (
        <div className="container-lg my-5">
            <div className="row">
                <div className="col-md-4 col-xs-6">
                    <div className="shop">
                        <div className="shop-img">
                            <img src={homeFurniture} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>Home<br/>Furniture</h3>
                            <Link to="/category/HOME_FURNITURE" className="cta-btn">Shop now
                                <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    color="#fff"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xs-6">
                    <div className="shop">
                        <div className="shop-img">
                            <img src={commercialFurniture} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>Commercial<br/>Furniture</h3>
                            <Link to="/category/COMMERCIAL_FURNITURE" className="cta-btn">Shop now
                                <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    color="#fff"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xs-6">
                    <div className="shop">
                        <div className="shop-img">
                            <img src={decorationAndFinishing} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>Decoration and<br/>Finishing</h3>
                            <Link to="/category/FINISHING_MATERIALS" className="cta-btn">Shop now
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

export default ExploreCardsComponent;
