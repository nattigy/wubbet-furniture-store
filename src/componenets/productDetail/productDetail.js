import React, {Fragment, useEffect} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import product4 from "./../../assets/img/product05.png"
import product01 from "./../../assets/img/product05.png"

const ProductDetail = () => {
    useEffect(() => {
        const el = document.querySelector("#module");

        el.addEventListener("mousemove", (e) => {
            el.style.backgroundPositionX = -e.offsetX + "px";
            el.style.backgroundPositionY = -e.offsetY + "px";
            el.style.backgroundSize = "200%";
        });

        el.addEventListener("mousedown", (e) => {
            el.style.backgroundPositionX = "100px";
            el.style.backgroundPositionY = "100px";
            el.style.backgroundSize = "200%";
        });

        el.addEventListener("mouseleave", (e) => {
            el.style.backgroundPositionX = "0px";
            el.style.backgroundPositionY = "0px";
            el.style.backgroundSize = "100%";
        });

        el.addEventListener("touchstart", (e) => {
            el.style.backgroundPositionX = -e.touches[0].clientX + "px";
            el.style.backgroundPositionY = -e.touches[0].clientY + "px";
            document.body.style.position = "fixed";
            document.body.style.top = "-30%";
            el.style.backgroundSize = "200%";
        });

        el.addEventListener("touchmove", (e) => {
            el.style.backgroundPositionX = -e.touches[0].clientX + "px";
            el.style.backgroundPositionY = -e.touches[0].clientY + "px";
            el.style.backgroundSize = "200%";
        });

        el.addEventListener("touchend", (e) => {
            el.style.backgroundPositionX = "0px";
            el.style.backgroundPositionY = "0px";
            document.body.style.position = "unset";
            window.scrollBy(0, 200);
            el.style.backgroundSize = "100%";
        });
    }, []);
    return (
        <Fragment>
            <Header/>
            <div className="container-lg py-3">
                <h4>Product Detail</h4>
            </div>
            <div className="section">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-7">
                            <div id="product-main-img">
                                <div className="cont">
                                    <div className="module"
                                         style={{
                                             backgroundImage: `url(${product4})`,
                                         }}
                                         id="module">
                                    </div>
                                </div>
                                <div className="">
                                    <div className="d-flex">
                                        <div className="product-preview overflow-hidden">
                                            <img className="w-100" src={product01} alt=""/>
                                        </div>

                                        <div className="product-preview overflow-hidden">
                                            <img className="w-100" src={product01} alt=""/>
                                        </div>

                                        <div className="product-preview overflow-hidden">
                                            <img className="w-100" src={product01} alt=""/>
                                        </div>

                                        <div className="product-preview overflow-hidden">
                                            <img className="w-100" src={product01} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="product-details">
                                <h2 className="product-name">product name goes here</h2>
                                <div>
                                    <div className="product-rating">
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star"/>
                                        <i className="fa fa-star-o"/>
                                    </div>
                                    <a className="review-link" href="#">10 Review(s) | Add your review</a>
                                </div>
                                <div>
                                    <h3 className="product-price">$980.00 <del
                                        className="product-old-price">$990.00</del></h3>
                                    <span className="product-available">In Stock</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <div className="product-options">
                                    <label>
                                        Size
                                        <select className="input-select">
                                            <option value="0">X</option>
                                        </select>
                                    </label>
                                    <label>
                                        Color
                                        <select className="input-select">
                                            <option value="0">Red</option>
                                        </select>
                                    </label>
                                </div>

                                <div className="add-to-cart">
                                    <div className="qty-label">
                                        Qty
                                        <div className="input-number">
                                            <input type="number"/>
                                            <span className="qty-up">+</span>
                                            <span className="qty-down">-</span>
                                        </div>
                                    </div>
                                    <button className="add-to-cart-btn">
                                        <i className="fa fa-shopping-cart"/> add to cart
                                    </button>
                                </div>

                                <ul className="product-btns">
                                    <li><a href="#"><i className="fa fa-heart-o"/> add to wishlist</a></li>
                                    <li><a href="#"><i className="fa fa-exchange"/> add to compare</a></li>
                                </ul>

                                <ul className="product-links">
                                    <li>Category:</li>
                                    <li><a href="#">Headphones</a></li>
                                    <li><a href="#">Accessories</a></li>
                                </ul>

                                <ul className="product-links">
                                    <li>Share:</li>
                                    <li><a href="#"><i className="fa fa-facebook"/></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"/></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"/></a></li>
                                    <li><a href="#"><i className="fa fa-envelope"/></a></li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-md-12">
                            <div id="product-tab">
                                <ul className="nav nav-tabs d-inline-block border-bottom-0 section-tab-nav"
                                    role="tablist">
                                    <li className="d-inline-block mr-3 ">
                                        <a className="nav-link-custom active" data-toggle="tab" href="#tab1"
                                           aria-controls="tab1" aria-selected="false">Description</a></li>
                                    <li className="d-inline-block mr-3">
                                        <a className="" data-toggle="tab" href="#tab2"
                                           aria-controls="tab2" aria-selected="false">Details</a></li>
                                    <li className="d-inline-block mr-3">
                                        <a className="" data-toggle="tab" href="#tab3"
                                           aria-controls="tab3" aria-selected="false">Reviews (3)</a></li>
                                </ul>

                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tab1" role="tabpanel"
                                         aria-labelledby="tab1-tab">
                                        <div className="">
                                            <p>tab 1</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab2" role="tabpanel"
                                         aria-labelledby="tab2-tab">
                                        <div className="">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab3" role="tabpanel"
                                         aria-labelledby="tab3-tab">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div id="rating">
                                                    <div className="rating-avg">
                                                        <span>4.5</span>
                                                        <div className="rating-stars">
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star"/>
                                                            <i className="fa fa-star-o"/>
                                                        </div>
                                                    </div>
                                                    <ul className="rating">
                                                        <li>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star"/>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div style={{width: "80%"}}></div>
                                                            </div>
                                                            <span className="sum">3</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star-o"/>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div style={{width: "60%"}}></div>
                                                            </div>
                                                            <span className="sum">2</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star-o"/>
                                                                <i className="fa fa-star-o"/>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div></div>
                                                            </div>
                                                            <span className="sum">0</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star-o"/>
                                                                <i className="fa fa-star-o"/>
                                                                <i className="fa fa-star-o"/>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div></div>
                                                            </div>
                                                            <span className="sum">0</span>
                                                        </li>
                                                        <li>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"/>
                                                                <i className="fa fa-star-o"/>
                                                                <i className="fa fa-star-o"/>
                                                                <i className="fa fa-star-o"/>
                                                                <i className="fa fa-star-o"/>
                                                            </div>
                                                            <div className="rating-progress">
                                                                <div></div>
                                                            </div>
                                                            <span className="sum">0</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div id="reviews">
                                                    <ul className="reviews">
                                                        <li>
                                                            <div className="review-heading">
                                                                <h5 className="name">John</h5>
                                                                <p className="date">27 DEC 2018, 8:0 PM</p>
                                                                <div className="review-rating">
                                                                    <i className="fa fa-star"/>
                                                                    <i className="fa fa-star"/>
                                                                    <i className="fa fa-star"/>
                                                                    <i className="fa fa-star"/>
                                                                    <i className="fa fa-star-o empty"/>
                                                                </div>
                                                            </div>
                                                            <div className="review-body">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                                    dolore magna aliqua</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul className="reviews-pagination">
                                                        <li className="active">1</li>
                                                        <li><a href="#">2</a></li>
                                                        <li><a href="#">3</a></li>
                                                        <li><a href="#">4</a></li>
                                                        <li><a href="#"><i className="fa fa-angle-right"/></a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div id="review-form">
                                                    <form className="review-form">
                                                        <input className="input" type="text" placeholder="Your Name"/>
                                                        <input className="input" type="email" placeholder="Your Email"/>
                                                        <textarea className="input" placeholder="Your Review"/>
                                                        <div className="input-rating">
                                                            <span>Your Rating: </span>
                                                            <div className="stars">
                                                                <input id="star5" name="rating" value="5" type="radio"/>
                                                                <label htmlFor="star5"></label>
                                                                <input id="star4" name="rating" value="4" type="radio"/>
                                                                <label htmlFor="star4"></label>
                                                                <input id="star3" name="rating" value="3" type="radio"/>
                                                                <label htmlFor="star3"></label>
                                                                <input id="star2" name="rating" value="2" type="radio"/>
                                                                <label htmlFor="star2"></label>
                                                                <input id="star1" name="rating" value="1" type="radio"/>
                                                                <label htmlFor="star1"></label>
                                                            </div>
                                                        </div>
                                                        <button className="primary-btn">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
};

export default ProductDetail;