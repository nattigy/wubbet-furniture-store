import React from "react";
import product4 from "../../assets/img/product05.png"
import {faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const WishListItem = () => {
    return (
        <div className="pt-4 border-bottom border-light-custom">
            <div className="d-flex">
                <div className="col-md-4 w-100 overflow-hidden">
                    <img className="w-100" style={{minWidth: "80px"}} src={product4} alt=""/>
                </div>
                <div className="row col-md-8 flex-fill">
                    <div className="flex-fill">
                        <p className="">
                            <Link to="" className="text-dark font-18">
                                Name goes here, kafgjhk skjdfh ks jhfkh khk too long name</Link></p>
                        <div className="my-4">
                            <span className="cart-item-btn">
                                <Link to="">
                                    <FontAwesomeIcon icon={faTrash} size="1x" color="#475161"/>
                                    <span className="tooltip-custom shadow-sm text-nowrap">REMOVE FROM WISHLIST</span>
                                </Link>
                            </span>
                            <span className="cart-item-btn">
                                <Link to="">
                                    <FontAwesomeIcon icon={faEye} size="1x" color="#475161"/>
                                    <span className="tooltip-custom shadow-sm text-nowrap">QUICK VIEW</span>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="text-right text-danger font-weight-bold text-nowrap">123 <span
                            className="small text-muted">birr</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListItem;