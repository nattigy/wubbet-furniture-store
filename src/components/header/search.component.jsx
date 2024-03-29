import React, {useEffect, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {faBars, faHeart, faSearch, faShoppingBasket, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ShoppingCartMini from "../cart-mini/cart-mini.component";

import logo from "../../assets/img/new wubbet logo with font.png";

const SearchSection = props => {

    const [name, setName] = useState("all");
    const [openCart, setOpenCart] = useState(false);

    const {user, wishListLength, cartLength, localization} = props;

    useEffect(() => {
        window.onclick = function (event) {
            if (!event.target.matches('.mini-cart') && !event.target.matches('.your-cart')) {
                setOpenCart(false)
            }
        };
        document.getElementById("open-cart-btn").firstElementChild.classList.add("mini-cart")
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        return <Redirect to={`/search/items/${name}`}/>
    };

    return (
        <div className="container-fluid bg-dark-custom px-0 mx-0 shadow-sm search-cont">
            <div className="container-xl px-3 py-3">
                <div
                    className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-between align-items-center w-100 py-3">
                    <div className="flex-shrink-0 order-2 d-block overflow-hidden px-0 mx-0">
                        <Link to="/">
                            <img className="logo-img" src={logo} alt=""/>
                        </Link>
                    </div>
                    <div className="search-input-cont overflow-hidden w-100 order-7 order-md-4 flex-sm-grow-1 px-3 mx-0 mt-3 mt-md-0">
                        <div className="text-nowrap w-100 text-center px-0 mx-0">
                            <form onSubmit={handleSubmit}>
                                <input className="search-input" type="search" name="name"
                                       placeholder={localization.search}
                                       onChange={e => setName(e.target.value)}
                                />
                                <button className="bg-red btn search-btn" type="submit">
                                    <FontAwesomeIcon icon={faSearch} color="#fff"/>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="order-5 d-flex flex-row px-0 mx-0">
                        <ul className="navbar-nav d-block text-nowrap px-0 mx-0">
                            <li className="nav-item nav-inline px-0 ml-3 ml-md-4">
                                <Link to="/my-account">
                                    <FontAwesomeIcon icon={faUser} color="#000"/>
                                </Link>
                            </li>
                            <li className="contact-link nav-item position-relative text-center nav-inline px-0 ml-3 ml-md-4">
                                <Link className="text-white d-block" to="/wishlist">
                                    <FontAwesomeIcon icon={faHeart} color="#000"/>
                                </Link>
                                {
                                    wishListLength &&
                                    <div className="qty">{wishListLength.length}</div>
                                }
                            </li>
                            <li className="contact-link nav-item position-relative text-center nav-inline px-0 ml-3 ml-md-4">
                                <button className="btn mini-cart p-0 bg-transparent d-block your-cart"
                                        onClick={() => setOpenCart(!openCart)}
                                >
                                    <FontAwesomeIcon
                                        className="mini-cart"
                                        id="open-cart-btn"
                                        icon={faShoppingBasket} color="#000000"
                                    />
                                </button>
                                {
                                    cartLength &&
                                    <div className="qty">{cartLength.length}</div>
                                }
                                {
                                    openCart && <ShoppingCartMini user={user}/>
                                }
                            </li>
                            <li className="nav-item nav-inline px-0 ml-3 ml-md-4">
                                <button className="text-white bg-transparent border-0 closebtn"
                                        onClick={() => props.openNav()}
                                >
                                    <FontAwesomeIcon icon={faBars} color="#000000"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        wishListLength: state.wishList.wishListItems,
        cartLength: state.cartList.cartItems,
        localization: state.localization.chosenLanguage
    };
};

export default connect(mapStateToProps)(SearchSection);