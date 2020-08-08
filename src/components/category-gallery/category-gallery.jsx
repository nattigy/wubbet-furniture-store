import React from "react";

import home1 from "../../assets/img/home1.webp"
import home2 from "../../assets/img/home2.webp"
import home3 from "../../assets/img/home3.webp"
import home4 from "../../assets/img/home4.webp"
import home5 from "../../assets/img/home5.webp"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CategoryGallery = () => {
    return (
        <div className="container-xl my-3 px-3">
            <h1 className="section-title">Life chills out in the sofa</h1>
            <p className="p-max-width">
                Your sofa is where you let your guard down, put your feet up, and just relax. The perfect place for
                everything from napping, to playing and even studying, so make sure it’s a comfortable one.
            </p>
            <div className="row">
                <div className="col-12 col-md-6 mb-3 mb-md-0 overflow-hidden">
                    <img className="w-100" src={home1} alt=""/>
                </div>
                <div className="col-12 col-md-6 px-0">
                    <div className="col-12 d-flex px-0">
                        <div className="col-6">
                            <div className="mb-3 overflow-hidden">
                                <img className="w-100" src={home2} alt=""/>
                            </div>
                            <div className="overflow-hidden">
                                <img className="w-100" src={home3} alt=""/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3 overflow-hidden">
                                <img className="w-100" src={home4} alt=""/>
                            </div>
                            <div className="overflow-hidden">
                                <img className="w-100" src={home5} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-5 w-100 text-right">
                        <button className="mx-3 px-4 btn btn-danger rounded-pill">
                            Explore more
                            <FontAwesomeIcon className="ml-3" icon={faArrowRight} size="xs" color="#111"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryGallery;