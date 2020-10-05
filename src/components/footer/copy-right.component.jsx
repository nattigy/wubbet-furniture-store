import React from "react";

import amole from "./../../assets/img/amole.png"
import yene from "./../../assets/img/yene.png"
import cbe from "./../../assets/img/cbe.png"
import enqu from "./../../assets/img/enqu.png"

export const CopyRight = () => {

    let fullYear = new Date().getFullYear();

    return (
        <div id="bottom-footer" className="bg-light-custom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-4 text-center">
                        <ul className="footer-payments px-0">
                            <li className="mx-2 d-inline-block">
                                <a href="/"><img src={amole} style={{width: "50px", height: "50px"}} alt=""/></a></li>
                            <li className="mx-2 d-inline-block">
                                <a href="/"><img src={yene} style={{width: "50px", height: "50px"}} alt=""/></a></li>
                            <li className="mx-2 d-inline-block">
                                <a href="/"><img src={cbe} style={{width: "50px", height: "50px"}} alt=""/></a>
                            </li>
                            <li className="mx-2 d-inline-block">
                                <a href="/"><img src={enqu} style={{width: "100px", height: "50px"}} alt=""/></a>
                            </li>
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