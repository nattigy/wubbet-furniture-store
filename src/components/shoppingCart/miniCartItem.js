import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";

const MiniCartItem = props => {
    const {cartItem} = props;
    return (
        <div className="row p-2 border-light-custom border-bottom overflow-hidden">
            <div className="col-sm-4">
                <div className="position-relative overflow-hidden">
                    <img className="w-100 mini-cart" src={cartItem.picture0}
                         alt="image preview"/>
                    <div className="delete-from-cart-btn mini-cart">
                        <FontAwesomeIcon icon={faWindowClose} className="mini-cart" color="#15161D"/>
                    </div>
                </div>
            </div>
            <div className="col-sm-7 px-2 mini-cart overflow-hidden text-left border-left border-light-custom">
                <p className="mb-2 font-14 text-uppercase mini-cart">{cartItem.name}</p>
                <div className="text-left font-14">
                    <p className="mini-cart">1x <strong className="mini-cart">{cartItem.price} ETB</strong></p>
                </div>
            </div>
        </div>
    );
};

export default MiniCartItem;