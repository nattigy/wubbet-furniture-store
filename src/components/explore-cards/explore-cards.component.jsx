import React from "react";
import {Link} from "react-router-dom";

import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import homeFurniture from "../../assets/img/homeFurniture.webp"
import commercialFurniture from "../../assets/img/commercialFurnitures.webp"
import decorationAndFinishing from "../../assets/img/decorationAndFinishing.webp"

import "./explore-card.style.sass"
import {connect} from "react-redux";

const ExploreCards = ({localization}) => {
    return (
        <div className="container-xl my-3 my-md-5 px-0">
            <div className="row px-0 mx-0">
                <Link to="/cat/HOME_FURNITURE" className="col-md-4 col-xs-6 px-3">
                    <div className="shop rounded-lg">
                        <div className="shop-img">
                            <img src={homeFurniture} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>{localization.home_furniture}</h3>
                            <p className="cta-btn">{localization.shop_now}
                                <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    color="#fff"
                                />
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to="/cat/COMMERCIAL_FURNITURE" className="col-md-4 col-xs-6 px-3">
                    <div className="shop rounded-lg">
                        <div className="shop-img">
                            <img src={commercialFurniture} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>{localization.commercial_furniture}</h3>
                            <p className="cta-btn">{localization.shop_now}
                                <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    color="#fff"
                                />
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to="/cat/FINISHING_AND_DECORATIONS" className="col-md-4 col-xs-6 px-3">
                    <div className="shop rounded-lg">
                        <div className="shop-img">
                            <img src={decorationAndFinishing} alt=""/>
                        </div>
                        <div className="shop-body">
                            <h3>{localization.decoration_and_finishing}</h3>
                            <p className="cta-btn">{localization.shop_now}
                                <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    color="#fff"
                                />
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        localization: state.localization.chosenLanguage
    }
}

export default connect(mapStateToProps)(ExploreCards);

