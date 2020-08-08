import React from "react";
import {Link} from "react-router-dom";

import "./path-indicator.style.sass"

const PathIndicator = props => {
    return (
        <div className="breadcrumb mb-3 rounded-0 bg-light px-0 mx-0">
            <div className="container-xl px-3">
                <ul className="breadcrumb-tree my-3 p-0 font-12 px-0 mx-0">
                    {
                        props.path.map(p => (
                            <li className="breadcrumb-item">
                                <Link to={p.pathLink}
                                      className={`text-uppercase ${p.currentPath ? `text-dark` : `text-muted`}`}>
                                    {p.pathName}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default PathIndicator;