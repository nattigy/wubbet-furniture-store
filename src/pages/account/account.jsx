import React, {useState} from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import {Link} from "react-router-dom";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Account = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Header/>
            <div className="container-sm px-lg-5 px-3 py-5">
                <div className="px-lg-5">
                    <h1 className="section-title">Hello User</h1>
                    <p className="p-max-width">
                        Welcome to your private corner of Wubbet Furniture Store. You can manage your orders, returns
                        and account info right here.
                    </p>
                    <div className="row my-5">
                        <div className="col-12 col-md-4 my-2">
                            <div className="px-3 py-4 rounded-lg border border-dark">
                                <Link className="text-dark" to="/my-account/orders">
                                    Your Order History <FontAwesomeIcon icon={faArrowRight} color="#111"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 my-2">
                            <div className="px-3 py-4 rounded-lg border border-dark">
                                <Link className="text-dark" to="/cart">
                                    Your Cart <FontAwesomeIcon icon={faArrowRight} color="#111"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 my-2">
                            <div className="px-3 py-4 rounded-lg border border-dark">
                                <Link className="text-dark" to="/wishlist">
                                    Your Saved Items <FontAwesomeIcon icon={faArrowRight} color="#111"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className={`col-4 ${!open && `border-bottom border-danger`}`}>
                                <button
                                    className="btn text-left px-0 border-0 py-2 font-weight-bold"
                                    onClick={() => setOpen(false)}
                                >
                                    Account Info
                                </button>
                            </div>
                            <div className={`col-4 ${open && `border-bottom border-danger`}`}>
                                <button
                                    className="btn text-left mx-3 px-0 border-0 py-2 font-weight-bold"
                                    onClick={() => setOpen(true)}
                                >
                                    Address
                                </button>
                            </div>
                        </div>
                        {
                            !open ? (
                                <div className="px-3">
                                    <div className="py-3">
                                        <p className="font-weight-bold">Your name</p>
                                        <p>Name goes here</p>
                                    </div>
                                    <div className="py-3">
                                        <p className="font-weight-bold">Contact Info</p>
                                        <p className="text-muted">Email</p>
                                        <p>nan@gmail.com</p>
                                        <p className="text-muted">Phone Number</p>
                                        <p>+654684768789</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="px-3">
                                    <div className="py-3">
                                        <p className="font-weight-bold">Country</p>
                                        <p>Ethiopia</p>
                                    </div>
                                    <div className="py-3">
                                        <p className="font-weight-bold">City</p>
                                        <p>Addis Ababa</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Account;