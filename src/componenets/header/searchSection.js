import React from "react";
import logo from "../../assets/img/mainLogo.jpg"
import {faBars, faHeart, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchSection = props => {
    return (
        <div className="container-fluid bg-dark-custom">
            <div className="container-lg pb-4">
                <div className="row">
                    <div className="col-lg-3 text-center overflow-hidden pt-4">
                        <img className="logo-img" src={logo} alt=""/>
                    </div>
                    <div className="col-lg-6 overflow-hidden px-0 pt-4">
                        <div className="text-center pt-2 text-nowrap">
                            <select name="" id="" className="custom-select">
                                <option value="">All Category</option>
                            </select>
                            <input className="search-input" type="search"/>
                            <button className="bg-red btn search-btn">
                                <FontAwesomeIcon icon={faSearch} color="#fff"/>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right overflow-hidden">
                        <ul className="navbar-nav d-block text-nowrap pt-4">
                            <li className="nav-item position-relative text-center nav-inline mx-2">
                                <FontAwesomeIcon icon={faHeart} color="#fff"/>
                                <a className="text-white d-block small" href="/">Your Wishlist</a>
                                <div className="qty">2</div>
                            </li>
                            <li className="nav-item position-relative text-center nav-inline mx-2">
                                <FontAwesomeIcon icon={faShoppingCart} color="#fff"/>
                                <a className="text-white d-block small" href="/">Your Cart</a>
                                <div className="qty">2</div>
                            </li>
                            <li className="nav-item nav-inline mx-2">
                                <button className="text-white bg-transparent border-0 closebtn"
                                        onClick={() => props.openNav()}>
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

export default SearchSection;