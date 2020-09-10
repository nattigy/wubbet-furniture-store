import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import "./cart-item.style.sass"

const CartItem = props => {

    const {item, addItemToWishList, user} = props;

    const [item_no, setItem_no] = useState(1);

    return (
        <div className="row mb-4 mx-0">
            <div className="col-4 col-md-3 px-0">
                <div className="w-100 overflow-hidden cart-item-img-cont">
                    <img className="cart-item-img" src={item.picture0} alt=""/>
                </div>
            </div>
            <div className="col-8 col-md-9 row px-2">
                <div className="col-12 row">
                    <div className="col-12 col-md-9">
                        <Link to={`item/${item.id}`}>
                            <h1 className="item-name text-uppercase text-truncate">{item.name}</h1>
                        </Link>
                        <p className="w-100 text-truncate">
                            {item.description}
                        </p>
                        <div>
                            <div>
                                <div className="d-flex text-nowrap">
                                    <button onClick={() => {
                                        let number = item_no;
                                        setItem_no(number === 1 ? number : --number)
                                    }} className="">-
                                    </button>
                                    <input value={item_no} style={{width: "50px"}} type="number"/>
                                    <button onClick={() => {
                                        let number = item_no;
                                        setItem_no(++number)
                                    }} className="">+
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 text-md-right text-nowrap small-font">
                        <span className="font-weight-bold">{item.price} </span>
                        <span className="small text-muted">ETB</span>
                    </div>
                </div>
                <div className="col-12 row py-3 justify-content-between order-5 px-0 px-md-2">
                    <div className="col-6">
                        <button
                            className="btn small px-0 text-info text-nowrap"
                            onClick={() => addItemToWishList({userId: user.uid, itemId: item.id,})}
                        >Save for later
                        </button>
                    </div>
                    <button
                        className="text-right small col-6 text-nowrap btn border-0 font-14"
                        onClick={() => props.deleteFromCart({userId: user.uid, itemId: item.id})}
                    >
                        <FontAwesomeIcon icon={faTrash} size="sm" color="#475161"/> Remove
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CartItem;
