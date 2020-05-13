import React from "react";
import logo from "../../assets/img/mainLogo.jpg"
import {faBars, faHeart, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const SearchSection = props => {

    const {isLoggedIn, newUser} = props;

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
                            <li className="nav-item position-relative text-center nav-inline mx-3">
                                <FontAwesomeIcon icon={faHeart} color="#fff"/>
                                <Link className="text-white d-block small" to={isLoggedIn ? "/wishlist" : "/login"}
                                >Your Wishlist</Link>
                                <div className="qty">0</div>
                            </li>
                            <li className="nav-item position-relative text-center nav-inline mx-3">
                                <FontAwesomeIcon icon={faShoppingCart} color="#fff"/>
                                <Link className="text-white d-block small" to={isLoggedIn ? "/cart" : "/login"}
                                >Your Cart</Link>
                                <div className="qty">{newUser && newUser.cartList.length}</div>
                            </li>
                            <li className="nav-item nav-inline mx-3">
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

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        isLoggedIn: state.auth.isLoggedIn,
        newUser: state.auth.newUser,
        user: state.auth.user,
    }
};

export default connect(mapStateToProps)(SearchSection);