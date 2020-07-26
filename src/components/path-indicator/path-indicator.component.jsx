import React from "react";

import {Link} from "react-router-dom";

const PathIndicator = props => {
    return (
        <div className="breadcrumb mb-3 rounded-0 bg-light px-0">
            <div className="container-lg">
                <ul className="breadcrumb-tree my-3 p-0 font-12">
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