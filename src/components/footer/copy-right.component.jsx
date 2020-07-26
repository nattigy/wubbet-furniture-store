import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCcAmex, faCcDiscover, faCcMastercard, faCcPaypal, faCcVisa} from "@fortawesome/free-brands-svg-icons"

export const CopyRight = () => {

    let fullYear = new Date().getFullYear();

    return (
        <div id="bottom-footer" className="section bg-blue-custom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-4 text-center">
                        <ul className="footer-payments px-0">
                            <li className="mx-2 d-inline-block">
                                <a href="/"><FontAwesomeIcon icon={faCcVisa} size="sm" color="#D10024"/></a></li>
                            <li className="mx-2 d-inline-block">
                                <a href="/"><FontAwesomeIcon icon={faCcPaypal} size="sm" color="#D10024"/></a></li>
                            <li className="mx-2 d-inline-block">
                                <a href="/"><FontAwesomeIcon icon={faCcMastercard} size="sm" color="#D10024"/></a>
                            </li>
                            <li className="mx-2 d-inline-block">
                                <a href="/"><FontAwesomeIcon icon={faCcDiscover} size="sm" color="#D10024"/></a>
                            </li>
                            <li className="mx-2 d-inline-block">
                                <a href="/"><FontAwesomeIcon icon={faCcAmex} size="sm" color="#D10024"/></a></li>
                        </ul>
                        <span className="copyright">
                            Copyright &copy; {`${fullYear}`} All rights reserved
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};