import React, {useState} from "react";
import logo from "../../assets/img/mainLogo.jpg"
import {faBars, faHeart, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const SearchSection = props => {

    const [category, setCategory] = useState("HOME_FURNITURE");
    const [name, setName] = useState("");

    const {isLoggedIn, newUser} = props;

    const handleSubmit = e => {
        e.preventDefault();
        props.searchItem({category, name});
    };

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
                            <select name="category" id="" className="custom-select"
                                    onChange={e => setCategory(e.target.value)}>
                                <option disabled>All Category</option>
                                <option value="HOME_FURNITURE">Home Furniture</option>
                                <option value="COMMERCIAL_FURNITURE">Commercial Furniture</option>
                                <option value="FINISHING_MATERIALS">Finishing Materials</option>
                            </select>
                            <input className="search-input" type="search" name="name"
                                   onChange={e => setName(e.target.value)}/>
                            <Link className="bg-red btn search-btn" type="submit"
                                  to={`/items/${category}/${name}`}>
                                <FontAwesomeIcon icon={faSearch} color="#fff"/>
                            </Link>
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

export default SearchSection;