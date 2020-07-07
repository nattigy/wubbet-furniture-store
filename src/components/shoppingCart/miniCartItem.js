import React from "react";
import product4 from "../../assets/img/product05.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

const MiniCartItem = props => {
    const {cartItem} = props;
    return (
        <div className="d-flex p-2 border-light-custom border-bottom">
            <div className="position-relative">
                <img className="w-100 mini-cart" style={{maxWidth: "80px", minWidth: "30px"}} src={product4}
                     alt="image preview"/>
                <div className="delete-from-cart-btn">
                    <FontAwesomeIcon icon={faWindowClose} className="mini-cart" color="#15161D"/>
                </div>
            </div>
            <div className="px-2 mini-cart">
                <p className="mb-2 font-14 text-uppercase text-truncate mini-cart">name goes here name</p>
                <div className="text-left font-14">
                    <p className="mini-cart">1x <strong className="mini-cart">$198</strong></p>
                </div>
            </div>
        </div>
    );
};

export default MiniCartItem;