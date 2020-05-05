import React from "react";
import product4 from "./../../assets/img/product05.png"
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CartItem = () => {
    return (
        <div className=" p-3 border-bottom border-light">
            <div className="d-flex">
                <div className="col-md-3 overflow-hidden">
                    <img className="w-100" style={{maxWidth: "200px", minWidth: "80px"}} src={product4} alt=""/>
                </div>
                <div className="row col-md-9 flex-fill">
                    <div className="flex-fill">
                        <p className="cart-item-name">ALALA Women's Rise Dolman Hoodie, Black, X-Small ALALAl</p>
                        <div className="btn-group border border-light">
                            <button className="btn btn-light border-0">+</button>
                            <input type="number" className="form-control border-0" style={{maxWidth: "30px"}}/>
                            <button className="btn btn-light border-0">-</button>
                        </div>
                        <div className="py-3">
                            <button className="mr-2 mb-2 btn">
                                <FontAwesomeIcon icon={faTrash} color="red"/>
                            </button>
                            <button className="btn btn-light">Save for later</button>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="text-right text-danger font-weight-bold">$143.00</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;