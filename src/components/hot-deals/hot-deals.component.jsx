import React from "react";
import {Link} from "react-router-dom";

const HotDeals = () => {
    return (
        <div className="bg-light-custom py-5 my-5 px-3">
            <div className="text-center">
                <h1 className="spacing">HOT DEALS</h1>
                <p>NEW COLLECTION UP TO 50% OFF</p>
                <div>
                    <Link to="/search/items/all" className="btn bg-danger rounded-pill text-white px-3 py-2">
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotDeals;