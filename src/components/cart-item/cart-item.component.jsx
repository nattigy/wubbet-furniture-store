import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const CartItem = props => {

    const {item, addItemToWishList, user} = props;

    return (
        <div className="row mb-4 mx-0">
            <div className="col-4 col-md-3 w-100 px-0 overflow-hidden h-auto">
                <img className="w-100 h-auto" src={item.picture0} alt=""/>
            </div>
            <div className="col-8 col-md-9 row px-2">
                <div className="col-12 row">
                    <div className="col-12 col-md-9">
                        <Link to={`item/${item.id}`}>
                            <h1 className="item-name text-uppercase text-truncate">{item.name}</h1>
                        </Link>
                        <p>
                            size and other information
                        </p>
                        <div>
                            <select className="px-3 mb-3 py-2" name="" id="">
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number =>
                                        <option key={number} value={number}>{number}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 text-md-right text-nowrap small-font">
                        <span className="font-weight-bold">{item.price} </span>
                        <span className="small text-muted">ETB</span>
                    </div>
                </div>
                <div className="col-12 row py-3 justify-content-between order-5">
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
