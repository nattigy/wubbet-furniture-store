import React, {useState} from "react";
import logo from "../../assets/img/mainLogo.jpg"
import {faBars, faHeart, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const SearchSection = props => {

    const [category, setCategory] = useState("all");
    const [name, setName] = useState("all");

    const {newUser} = props;

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
                                <select name="category" id="" className="custom-select"
                                        onChange={e => setCategory(e.target.value)}>
                                    <option value="all">All Category</option>
                                    <option value="HOME_FURNITURE">Home Furniture</option>
                                    <option value="COMMERCIAL_FURNITURE">Commercial Furniture</option>
                                    <option value="FINISHING_MATERIALS">Finishing Materials</option>
                                </select>
                                <input className="search-input" type="search" name="name"
                                       onChange={e => setName(e.target.value)}/>
                                <button className="bg-red btn search-btn" type="submit">
                                    <FontAwesomeIcon icon={faSearch} color="#fff"/>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right overflow-hidden">
                        <ul className="navbar-nav d-block text-nowrap pt-4">
                            <li className="nav-item position-relative text-center nav-inline mx-3">
                                <FontAwesomeIcon icon={faHeart} color="#fff"/>
                                <Link className="text-white d-block small" to="/wishlist">Your Wishlist</Link>
                                {newUser !== {} || newUser !== undefined &&
                                <div className="qty">{newUser.wishList.length}</div>}
                            </li>
                            <li className="nav-item position-relative text-center nav-inline mx-3">
                                <FontAwesomeIcon icon={faShoppingCart} color="#fff"/>
                                <Link className="text-white d-block small" to="/cart">Your Cart</Link>
                                {newUser !== {} || newUser !== undefined &&
                                <div className="qty">{newUser.cartList.length}</div>}
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
        newUser: state.auth.newUser
    };
};

export default connect(mapStateToProps)(SearchSection);