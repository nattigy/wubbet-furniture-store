import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {faBars, faHeart, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ShoppingCartMini from "../shopping-cart-mini/shopping-cart-mini.component";

import logo from "../../assets/img/mainLogo.jpg"

const SearchComponent = props => {

    const [category, setCategory] = useState("all");
    const [name, setName] = useState("all");
    const [openCart, setOpenCart] = useState(false);

    const {user, wishListLength, cartLength} = props;

    useEffect(() => {
        window.onclick = function (event) {
            if (!event.target.matches('.mini-shopping-cart') && !event.target.matches('.your-shopping-cart')) {
                setOpenCart(false)
            }
        }
    }, []);

    return (
        <div className="container-fluid bg-dark-custom">
            <div className="container-lg pb-4">
                <div className="row">
                    <div className="col-lg-3 text-center overflow-hidden pt-4">
                        <Link to="/">
                            <img className="logo-img" src={logo} alt=""/>
                        </Link>
                    </div>
                    <div className="col-lg-6 overflow-hidden px-0 pt-4">
                        <div className="text-center pt-2 text-nowrap">
                            <form action={`/items/${category}/${name}`}>
                                <select name="category" id=""
                                        className="custom-select"
                                        onChange={e => setCategory(e.target.value)}
                                >
                                    <option value="all">All Category</option>
                                    <option value="HOME_FURNITURE">Home Furniture</option>
                                    <option value="COMMERCIAL_FURNITURE">Commercial Furniture</option>
                                    <option value="FINISHING_MATERIALS">Finishing Materials</option>
                                </select>
                                <input className="search-input" type="search" name="name"
                                       onChange={e => setName(e.target.value)}
                                />
                                <button className="bg-red btn search-btn" type="submit">
                                    <FontAwesomeIcon icon={faSearch} color="#fff"/>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right">
                        <ul className="navbar-nav d-block text-nowrap pt-4">
                            <li className="contact-link nav-item position-relative text-center nav-inline mx-3">
                                <FontAwesomeIcon icon={faHeart} color="#fff"/>
                                <Link className="text-white d-block small" to="/wishlist">Your Wishlist</Link>
                                {
                                    wishListLength &&
                                    <div className="qty">{wishListLength.length}</div>
                                }
                            </li>
                            <li className="contact-link nav-item position-relative text-center nav-inline mx-3">
                                <FontAwesomeIcon icon={faShoppingCart} color="#fff"/>
                                <button onClick={() => setOpenCart(!openCart)}
                                        className="btn p-0 bg-transparent text-white d-block small your-cart font-12"
                                >
                                    Your Cart
                                </button>
                                {
                                    cartLength &&
                                    <div className="qty">{cartLength.length}</div>
                                }
                                {
                                    openCart && <ShoppingCartMini user={user}/>
                                }
                            </li>
                            <li className="nav-item nav-inline mx-3">
                                <button className="text-white bg-transparent border-0 closebtn"
                                        onClick={() => props.openNav()}
                                >
                                    <FontAwesomeIcon icon={faBars} color="#fff"/>
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
    };
};

export default connect(mapStateToProps)(SearchComponent);