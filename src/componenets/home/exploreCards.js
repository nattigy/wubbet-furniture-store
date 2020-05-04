import React from "react";
import homeFurnitures from "../../assets/img/homeFurniture.jpg"
import commercialFurnitures from "../../assets/img/commercialFurnitures.jpg"
import decorationAndFinishing from "../../assets/img/decorationAndFinishing.jpg"
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ExploreCards = () => {
    return (
        <div className="container-lg my-3">
            <div className="row">
                <div className="col-md-4 col-xs-6">
                    <div className="shop">
                        <div className="shop-img">
                            <img src={homeFurnitures} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>Home<br/>Furniture</h3>
                            <a href="/" className="cta-btn">Shop now <FontAwesomeIcon icon={faArrowCircleRight}
                                                                                      color="#fff"/></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xs-6">
                    <div className="shop">
                        <div className="shop-img">
                            <img src={commercialFurnitures} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>Home<br/>Furniture</h3>
                            <a href="/" className="cta-btn">Shop now <FontAwesomeIcon icon={faArrowCircleRight}
                                                                                      color="#fff"/></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-xs-6">
                    <div className="shop">
                        <div className="shop-img">
                            <img src={decorationAndFinishing} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>Home<br/>Furniture</h3>
                            <a href="/" className="cta-btn">Shop now <FontAwesomeIcon icon={faArrowCircleRight}
                                                                                      color="#fff"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreCards;