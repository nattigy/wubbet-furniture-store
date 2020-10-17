import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const HotDeals = ({localization}) => {
    return (
        <div className="bg-light-custom py-5 my-5 px-3">
            <div className="text-center">
                <h1 className="spacing">{localization.hot_deals}</h1>
                <p>{localization.hot_deals_text}</p>
                <div>
                    <Link to="/search/items/all" className="btn bg-red rounded-pill text-white px-3 py-2">
                        {localization.shop_now}
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        localization: state.localization.chosenLanguage
    }
}

export default connect(mapStateToProps)(HotDeals);