import React from "react";

import {Link} from "react-router-dom";

const SingleItem = props => {

    const {item} = props;

    return (
        <div className="pt-4 pb-2 mb-2 col-md-6 border-bottom border-light-custom border-right">
            <div className="d-flex">
                <div className="border border-light-custom" style={{width: "250px"}}>
                    <img className="w-100" src={item.picture0} alt=""/>
                </div>
                <div className="px-2 text-left border-light-custom">
                    <p>{item.name}</p>
                    <div className="my-4">
                        <Link className="btn checkout-btn bg-red" to={`/account/myitem/${item.id}`}>GO TO DETAIL</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;