import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExchangeAlt, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";

const ProductDescription = props => {
    // const {name, price, old_price, description, category, sub_category} = props.item;
    const {credentials, editMode} = props;
    return (
        <div className="col-md-5">
            <div>
                {editMode ?
                    <input type="text" className="w-100" value="Name goes here"/>
                    : <h3 className="title">Name goes here</h3>}
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
                        {editMode ? <input type="text" style={{width: "100px"}} value="120"/> :
                            <span className="text-danger font-24">120</span>} birr
                        {/*{old_price && <del className="small text-muted"> {old_price} birr</del>}*/}
                        <del className="small text-muted"> 200 birr</del>
                    </h4>
                    <span className="small text-danger font-weight-bold font-14">IN STOCK</span>
                </div>

                <div className="my-3">
                    {editMode && <span className="text-nowrap">
                                <span className="qty-span btn bg-white text-dark font-14 text-white">Qty</span>
                                <select className="qty-select btn bg-white font-14 px-0"
                                        style={{width: "50px"}} name="" id="">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number =>
                                            <option key={number} value={number}>{number}</option>)}
                                </select>
                            </span>}
                </div>

                {editMode ? <textarea name="" id="" cols="30" rows="10" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur
                        debitis magni nam nemo nesciunt nobis officia praesentium quaerat, recusandae. Commodi ducimus est
                        ipsam magni officia quae quo sequi ut!"/> :
                    <p className="mb-3 font-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                        aspernatur
                        debitis magni nam nemo nesciunt nobis officia praesentium quaerat, recusandae. Commodi ducimus
                        est
                        ipsam magni officia quae quo sequi ut!</p>
                }

                {/*<AddToCartButton credentials={credentials}/>*/}

                <ul className="list-unstyled">
                    <li className="d-inline-block mr-2">
                        <a href="/" className="text-dark">
                            <FontAwesomeIcon icon={faHeart} size="sm"
                                             color="rgb(30, 31, 41, 0.9)"/> add to wishlist</a></li>
                    <li className="d-inline-block ml-2">
                        <a href="/" className="text-dark">
                            <FontAwesomeIcon icon={faExchangeAlt} size="sm"
                                             color="rgb(30, 31, 41, 0.9)"/> add to compare</a></li>
                </ul>

                <ul className="list-unstyled my-4 text-muted font-14">
                    <li className="d-inline-block mr-2">Category:</li>
                    <li className="d-inline-block mr-2">
                        {editMode ? <input type="text" value="HOME_FURNITURE"/> :
                            <a className="text-dark" href={`/items/`}>HOME_FURNITURE </a>}
                    </li>
                    <br/>
                    <li className="d-inline-block mr-2">Sub-Category:</li>
                    <li className="d-inline-block mr-2">
                        {editMode ? <input type="text" value="Living_Room"/> :
                            <a className="text-dark" href={`/items/`}> Living_Room</a>}
                    </li>
                </ul>
                {editMode && <div className="w-100 text-right">
                    <button className="checkout-btn btn bg-red">Update</button>
                </div>}
            </div>
        </div>
    );
};

export default ProductDescription;

{/*<div className="col-md-5">*/
}
{/*    <div>*/
}
{/*        <h3 className="title">{name}</h3>*/
}
{/*        <div className="my-3">*/
}
{/*            <div className="d-inline-block mr-3">*/
}
{/*                <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>*/
}
{/*                <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>*/
}
{/*                <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>*/
}
{/*                <FontAwesomeIcon icon={faStar} size="1x" color="#D10024"/>*/
}
{/*            </div>*/
}
{/*            /!*<a className="text-dark" href="/">10 Review(s) | Add your review</a>*!/*/
}
{/*        </div>*/
}
{/*        <div className="my-2">*/
}
{/*            <h4 className="text-danger mr-3 d-inline-block">*/
}
{/*                <span className="text-danger font-24">{price}</span> birr*/
}
{/*                {old_price && <del className="small text-muted"> {old_price} birr</del>}*/
}
{/*            </h4>*/
}
{/*            <span className="small text-danger font-weight-bold font-14">IN STOCK</span>*/
}
{/*        </div>*/
}
{/*        <p className="mb-3 font-14">{description}</p>*/
}

{/*        <AddToCartButton credentials={credentials}/>*/
}

{/*        <ul className="list-unstyled">*/
}
{/*            <li className="d-inline-block mr-2">*/
}
{/*                <a href="/" className="text-dark">*/
}
{/*                    <FontAwesomeIcon icon={faHeart} size="sm"*/
}
{/*                                     color="rgb(30, 31, 41, 0.9)"/> add to wishlist</a></li>*/
}
{/*            <li className="d-inline-block ml-2">*/
}
{/*                <a href="/" className="text-dark">*/
}
{/*                    <FontAwesomeIcon icon={faExchangeAlt} size="sm"*/
}
{/*                                     color="rgb(30, 31, 41, 0.9)"/> add to compare</a></li>*/
}
{/*        </ul>*/
}

{/*        <ul className="list-unstyled my-4 text-muted font-14">*/
}
{/*            <li className="d-inline-block mr-2">Category:</li>*/
}
{/*            <li className="d-inline-block mr-2">*/
}
{/*                <a className="text-dark" href={`/items/${category}`}>{category} </a></li>*/
}
{/*            <li className="d-inline-block mr-2">*/
}
{/*                <a className="text-dark" href={`/items/${category}/${sub_category}`}> {sub_category}</a></li>*/
}
{/*        </ul>*/
}

{/*        /!*<ul className="list-unstyled">*!/*/
}
{/*        /!*    <li className="d-inline-block mr-2">Share:</li>*!/*/
}
{/*        /!*    <li className="d-inline-block mr-3">*!/*/
}
{/*        /!*        <a className="text-dark" href="/">*!/*/
}
{/*        /!*            <FontAwesomeIcon icon={faFacebookF} size="sm"*!/*/
}
{/*        /!*                             color="rgb(30, 31, 41, 0.9)"/></a>*!/*/
}
{/*        /!*    </li>*!/*/
}
{/*        /!*    <li className="d-inline-block mr-3">*!/*/
}
{/*        /!*        <a className="text-dark" href="/">*!/*/
}
{/*        /!*            <FontAwesomeIcon icon={faTwitter} size="sm"*!/*/
}
{/*        /!*                             color="rgb(30, 31, 41, 0.9)"/></a></li>*!/*/
}
{/*        /!*    <li className="d-inline-block mr-3">*!/*/
}
{/*        /!*        <a className="text-dark" href="/">*!/*/
}
{/*        /!*            <FontAwesomeIcon icon={faGooglePlusG} size="sm"*!/*/
}
{/*        /!*                             color="rgb(30, 31, 41, 0.9)"/></a></li>*!/*/
}
{/*        /!*    <li className="d-inline-block mr-3">*!/*/
}
{/*        /!*        <a className="text-dark" href="/">*!/*/
}
{/*        /!*            <FontAwesomeIcon icon={faEnvelope} size="sm"*!/*/
}
{/*        /!*                             color="rgb(30, 31, 41, 0.9)"/></a>*!/*/
}
{/*        /!*    </li>*!/*/
}
{/*        /!*</ul>*!/*/
}
{/*    </div>*/
}
{/*</div>*/
}