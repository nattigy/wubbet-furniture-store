import React, {Fragment} from "react";

import {Link} from "react-router-dom";

import Categories from "./categories"

const NavbarSection = props => {
    return (
        <div className="sidenav-cont py-0">
            <div id="modal" onClick={() => props.closeNav()}/>
            <div id="mySidenav" className="sidenav">
                <button className="closebtn btn-dark btn bg-transparent border-0"
                        onClick={() => props.closeNav()}>&times;</button>
                <ul className={`list-unstyled py-5 ${props.isOpen && `navbar-link`}`}>
                    <li>
                        {
                            Categories.map(cat => (
                                <Fragment key={cat.id}>
                                    <Link
                                        className="px-0 font-weight-bolder font-18"
                                        to={`/cat${cat.link}`}
                                        onClick={() => props.closeNav()}
                                    >
                                        {cat.name}
                                    </Link>
                                    <ul className="list-unstyled">
                                        <li>
                                            {
                                                cat.subCategory.map(sub => (
                                                    <Link
                                                        key={sub.id}
                                                        onClick={() => props.closeNav()}
                                                        to={`/cat${sub.link}`}
                                                    >{sub.name}
                                                    </Link>
                                                ))
                                            }
                                        </li>
                                    </ul>
                                </Fragment>
                            ))
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavbarSection;
