import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faSave, faTrash} from "@fortawesome/free-solid-svg-icons";

const CartItem = props => {
    const {item} = props;
    return (
        <div className="pt-3 border-bottom border-light-custom">
            <div className="d-flex">
                <div className="col-md-5 w-100 overflow-hidden pb-3">
                    <img className="w-100" style={{minWidth: "80px"}} src={item.picture0} alt=""/>
                </div>
                <div className="row col-md-7 flex-fill">
                    <div className="flex-fill">
                        <p className="">
                            <Link to="" className="text-dark font-18">{item.name}</Link></p>
                        <div className="my-4">
                            <span className="cart-item-btn">
                                <Link to="">
                                    <FontAwesomeIcon icon={faTrash} size="1x" color="#475161"/>
                                    <span className="tooltip-custom shadow-sm text-nowrap">REMOVE FROM CART</span>
                                </Link>
                            </span>
                            <span className="cart-item-btn">
                                <Link to="">
                                    <FontAwesomeIcon icon={faEye} size="1x" color="#475161"/>
                                    <span className="tooltip-custom shadow-sm text-nowrap">QUICK VIEW</span>
                                </Link>
                            </span>
                            <span className="cart-item-btn">
                                <Link to="">
                                    <FontAwesomeIcon icon={faSave} size="1x" color="#475161"/>
                                    <span className="tooltip-custom shadow-sm text-nowrap">SAVE FOR LATER</span>
                                </Link>
                            </span>
                        </div>
                        <div className="my-4">
                            <span className="text-nowrap">
                                <span className="qty-span btn bg-white text-dark font-14 text-white">Qty</span>
                                <select className="qty-select btn bg-white font-14 px-0"
                                        style={{width: "50px"}} name="" id="">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number =>
                                            <option key={number} value={number}>{number}</option>)}
                                </select>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="text-right text-danger font-weight-bold text-nowrap">{item.price} <span
                            className="small text-muted">ETB</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
