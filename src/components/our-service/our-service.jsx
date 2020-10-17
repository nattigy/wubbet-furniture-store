import React from "react";

import icon1 from "./../../assets/img/icon-1.png"
import icon2 from "./../../assets/img/icon-2.png"
import icon3 from "./../../assets/img/icon-3.png"
import icon4 from "./../../assets/img/icon-4.png"
import {connect} from "react-redux";

const OurService = props => {

    const {localization} = props;

    return (
        <div className="container-xl">
            <div className="row">
                <div className="my-3 my-md-0 col-md-3">
                    <div className="p-0">
                        <div className="text-center">
                            <div className="overflow-hidden mx-auto max-width-icon">
                                <img className="w-100" src={icon1} alt=""/>
                            </div>
                            <p className="py-4 px-2 mb-0 font-weight-bolder text-nowrap">{localization.secure_payment}</p>
                        </div>
                    </div>
                </div>
                <div className="my-3 my-md-0 col-md-3">
                    <div className="p-0">
                        <div className="text-center">
                            <div className="overflow-hidden mx-auto max-width-icon">
                                <img className="w-100" src={icon2} alt=""/>
                            </div>
                            <p className="py-4 px-2 mb-0 font-weight-bolder text-nowrap">{localization.satisfaction_guaranteed}</p>
                        </div>
                    </div>
                </div>
                <div className="my-3 my-md-0 col-md-3">
                    <div className="p-0">
                        <div className="text-center">
                            <div className="overflow-hidden mx-auto max-width-icon">
                                <img className="w-100" src={icon3} alt=""/>
                            </div>
                            <p className="py-4 px-2 mb-0 font-weight-bolder text-nowrap">{localization.free_shipping}</p>
                        </div>
                    </div>
                </div>
                <div className="my-3 my-md-0 col-md-3">
                    <div className="p-0">
                        <div className="text-center">
                            <div className="overflow-hidden mx-auto max-width-icon">
                                <img className="w-100" src={icon4} alt=""/>
                            </div>
                            <p className="py-4 px-2 mb-0 font-weight-bolder text-nowrap">{localization.hundred_returns}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        localization: state.localization.chosenLanguage
    }
}

export default connect(mapStateToProps)(OurService);