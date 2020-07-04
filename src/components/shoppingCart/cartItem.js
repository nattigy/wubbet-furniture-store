import React from "react";
import product4 from "../../assets/img/product05.png"
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const CartItem = props => {
    const {item} = props;
    return (
        <div className=" p-3 border-bottom border-light">
            <div className="d-flex">
                <div className="col-md-4 overflow-hidden">
                    <img className="w-100" style={{maxWidth: "200px", minWidth: "80px"}} src={product4} alt=""/>
                </div>
                <div className="row col-md-9 flex-fill">
                    <div className="flex-fill">
                        <Link to="">
                            <h5 className="cart-item-name">{item.name}</h5>
                        </Link>
                        <div className="my-4">
                            <span className="qty-span bg-grey p-1 border-0">Qty</span>
                            <select className="bg-grey border-0 py-1" name="" id="">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => <option key={number}
                                                                                       value={number}>{number}</option>)}
                            </select>
                            <button className="mx-2 btn">
                                <FontAwesomeIcon icon={faTrash} color="#ef233c"/>
                            </button>
                            <button className="btn border-0 bg-grey p-1">Save for later</button>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="text-right text-danger font-weight-bold text-nowrap">{item.price} <span
                            className="small text-muted">birr</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;