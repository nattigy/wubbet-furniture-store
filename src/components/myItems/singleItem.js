import React from "react";
import product4 from "../../assets/img/product05.png";
import {Link} from "react-router-dom";

const SingleItem = props => {
    return (
        <div className="pt-4 pb-2 border-bottom border-light-custom">
            <div className="d-flex">
                <div className="col-md-3 overflow-hidden">
                    <img className="w-100" style={{minWidth: "80px", maxWidth: "150px"}} src={product4} alt=""/>
                </div>
                <div className="row col-md-9 flex-fill">
                    <div className="flex-fill">
                        <p className="">
                            <Link to="" className="text-dark font-18">
                                Name goes here, kafgjhk skjdfh ks jhfkh khk too long name</Link></p>
                        <div className="my-4">
                            <Link className="btn checkout-btn bg-red" to={`item/kdfhkjhsdkjfhgkj`}>GO TO DETAIL</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;