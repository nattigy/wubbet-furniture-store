import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const DescriptionAndDetails = () => {
    return (
        <div className="px-3 my-5 row">
            <div className="col-md-3">
                <div id="rating" className="text-center">
                    <div className="rating-avg">
                        <h3 className="d-inline-block">5</h3>
                        <div className="rating-stars d-inline-block ml-3">
                            <FontAwesomeIcon icon={faStar} size="lg" color="#D10024"/>
                            <FontAwesomeIcon icon={faStar} size="lg" color="#D10024"/>
                            <FontAwesomeIcon icon={faStar} size="lg" color="#D10024"/>
                            <FontAwesomeIcon icon={faStar} size="lg" color="#D10024"/>
                            <FontAwesomeIcon icon={faStar} size="lg" color="#D10024"/>
                        </div>
                    </div>
                    <ul className="rating list-unstyled">
                        <li>
                            <div className="rating-stars">
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                            </div>
                            <div className="rating-progress">
                                <div style={{width: "80%"}}/>
                            </div>
                            <span className="sum">4</span>
                        </li>
                        <li>
                            <div className="rating-stars">
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                            </div>
                            <div className="rating-progress position-relative">
                                <div style={{width: "60%"}}/>
                            </div>
                            <span className="sum">3</span>
                        </li>
                        <li>
                            <div className="rating-stars">
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                            </div>
                            <div className="rating-progress position-relative">
                                <div style={{width: "40%"}}/>
                            </div>
                            <span className="sum">2</span>
                        </li>
                        <li>
                            <div className="rating-stars">
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                            </div>
                            <div className="rating-progress position-relative">
                                <div style={{width: "20%"}}/>
                            </div>
                            <span className="sum">1</span>
                        </li>
                        <li>
                            <div className="rating-stars">
                                <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                                <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                            </div>
                            <div className="rating-progress position-relative">
                                <div/>
                            </div>
                            <span className="sum">0</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-md-6">
                <div>
                    <ul className="list-unstyled">
                        <li className="d-flex">
                            <div>
                                <h6>John</h6>
                                <p className="date small text-nowrap mb-0">
                                    27 DEC 2018, 8:00 PM</p>
                                <div className="review-rating">
                                    <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                    <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                    <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                    <FontAwesomeIcon icon={faStar} size="sm" color="#D10024"/>
                                    <FontAwesomeIcon icon={faStar} size="sm" color="#ffdddd"/>
                                </div>
                            </div>
                            <div className="pl-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-md-3">
                <div>
                    <form>
                        <input className="form-control my-3" type="text" placeholder="Your Name"/>
                        <input className="form-control my-3" type="email" placeholder="Your Email"/>
                        <textarea className="form-control my-3" placeholder="Your Review"/>
                        <div>
                            <span>Your Rating: </span>
                            <div className="stars">
                                <input id="star5" name="rating" value="5" type="radio"/>
                                <label htmlFor="star5">5</label>
                                <input id="star4" name="rating" value="4" type="radio"/>
                                <label htmlFor="star4">4</label>
                                <input id="star3" name="rating" value="3" type="radio"/>
                                <label htmlFor="star3">3</label>
                                <input id="star2" name="rating" value="2" type="radio"/>
                                <label htmlFor="star2">2</label>
                                <input id="star1" name="rating" value="1" type="radio"/>
                                <label htmlFor="star1">1</label>
                            </div>
                        </div>
                        <button className="btn btn-danger bg-red">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DescriptionAndDetails;