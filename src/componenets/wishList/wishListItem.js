import React from "react";
import product4 from "./../../assets/img/product05.png"
import {faShoppingCart, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const WishListItem = () => {
    return (
        <div className=" p-3 border-bottom border-light">
            <div className="d-flex">
                <div className="col-md-3 overflow-hidden">
                    <img className="w-100" style={{maxWidth: "200px", minWidth: "80px"}} src={product4} alt=""/>
                </div>
                <div className="row col-md-9 flex-fill">
                    <div className="flex-fill">
                        <Link to="">
                            <h6 className="cart-item-name">ALALA Women's Rise Dolman Hoodie, Black, X-Small ALALAl</h6>
                        </Link>
                        <div className="my-4">
                            <button className="mx-2 btn">
                                <FontAwesomeIcon icon={faTrash} color="#ef233c"/>
                            </button>
                            <button className="add-to-cart-btn text-nowrap">
                                <FontAwesomeIcon icon={faShoppingCart} size="1x" color="#fff"/>
                                add to cart
                            </button>
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

export default WishListItem;