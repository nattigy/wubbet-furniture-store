import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExchangeAlt, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "../addToCart/addToCart";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const sub_category = [
    {category: "HOME_FURNITURE", sub_category: "Living room", value: "livingRoom"},
    {category: "HOME_FURNITURE", sub_category: "Bed room", value: "bedRoom"},
    {category: "HOME_FURNITURE", sub_category: "Dinning room/kitchen", value: "kitchen"},
    {category: "COMMERCIAL_FURNITURE", sub_category: "Office", value: "office"},
    {category: "FINISHING_MATERIALS", sub_category: "Decorations", value: "decorations"},
    {category: "FINISHING_MATERIALS", sub_category: "Finishing materials", value: "finishingMaterials"},
    {category: "Other", sub_category: "other", value: "other"},
];

const ProductDescription = props => {
    const {name, price, old_price, description, category, sub_category} = props.item;
    const {credentials, addToWishList} = props;

    const [selected_category, setSelected_category] = useState("HOME_FURNITURE");

    return (
        <div className="col-md-5">
            <div>
                <h3 className="title">{name}</h3>
                <div className="my-3">
                    <div className="d-inline-block mr-3">
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                        <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>
                    </div>
                    {/*<a className="text-dark" href="/">10 Review(s) | Add your review</a>*/}
                </div>
                <div className="my-2">
                    <h4 className="text-danger mr-3 d-inline-block">
                        <span className="text-danger font-24">{price}</span> ETB
                        {old_price && <del className="small text-muted"> {old_price} ETB</del>}
                    </h4>
                    <span className="small text-danger font-weight-bold font-14">IN STOCK</span>
                </div>

                <div className="my-3">
                    <span className="text-nowrap">
                        <span className="qty-span btn bg-white text-dark font-14 text-white">Qty</span>
                        <select className="qty-select btn bg-white font-14 px-0"
                                style={{width: "50px"}} name="" id="">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number =>
                                    <option key={number} value={number}>{number}</option>)}
                        </select>
                    </span>
                </div>

                <p className="mb-3 font-14">{description}</p>

                <div className="my-4">
                    <AddToCartButton credentials={credentials}/>
                </div>

                <ul className="list-unstyled">
                    <li className="d-inline-block mr-2">
                        <button className="text-dark btn"
                                onClick={() => addToWishList({
                                    userId: credentials.userId,
                                    itemId: credentials.itemId,
                                    itemPrice: credentials.itemPrice,
                                    type: "ADD_TO_WISH_LIST"
                                })}>
                            {credentials.isAddingToWishList && <CircularProgress size="1.5rem" color="secondary"/>}
                            <FontAwesomeIcon icon={faHeart} size="sm" color="rgb(30, 31, 41, 0.9)"/> add to wishlist
                        </button>
                    </li>
                    <li className="d-inline-block ml-2">
                        <button className="text-dark btn">
                            <FontAwesomeIcon icon={faExchangeAlt} size="sm" color="rgb(30, 31, 41, 0.9)"/> add to
                            compare
                        </button>
                    </li>
                </ul>

                <ul className="list-unstyled my-4 text-muted font-14">
                    <li className="d-inline-block mr-2">Category:</li>
                    <li className="d-inline-block mr-2">
                        <a className="text-dark" href={`/items/`}>HOME_FURNITURE </a>
                    </li>
                    <br/>
                    <li className="d-inline-block mr-2">Sub-Category:</li>
                    <li className="d-inline-block mr-2">
                        <a className="text-dark" href={`/items/`}> Living_Room</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductDescription;
