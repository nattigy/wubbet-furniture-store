import React from "react";

import {Link} from "react-router-dom";

const NavbarSection = props => {
    return (
        <div className="container-fluid bg-white sidenav-cont py-0">
            <div id="modal" onClick={() => props.closeNav()}/>
            <div className="container-lg">
                <div id="mySidenav" className="sidenav">
                    <button className="closebtn btn-light btn bg-transparent border-0"
                            onClick={() => props.closeNav()}>&times;</button>
                    <ul className={`list-unstyled mb-0 ${props.isOpen && `navbar-link`}`}>
                        <li className="nav-item nav-item-custom pl-0 pr-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/HOME_FURNITURE/_/livingRoom"
                                  onClick={() => props.closeNav()}
                            >Living Room</Link>
                        </li>
                        <li className="nav-item nav-item-custom pl-0 pr-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/HOME_FURNITURE/_/bedRoom"
                                  onClick={() => props.closeNav()}
                            >Bed Room</Link>
                        </li>
                        <li className="nav-item nav-item-custom pl-0 pr-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/HOME_FURNITURE/_/kitchen"
                                  onClick={() => props.closeNav()}
                            >Dinning Room/kitchen</Link>
                        </li>
                        <li className="nav-item nav-item-custom pl-0 pr-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/COMMERCIAL_FURNITURE/_/office"
                                  onClick={() => props.closeNav()}
                            >Office</Link>
                        </li>
                        <li className="nav-item nav-item-custom pl-0 pr-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/FINISHING_MATERIALS/_/decorations"
                                  onClick={() => props.closeNav()}
                            >Decorations</Link>
                        </li>
                        <li className="nav-item nav-item-custom pl-0 pr-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/FINISHING_MATERIALS/_/finishingMaterials"
                                  onClick={() => props.closeNav()}
                            >Finishing Materials</Link>
                        </li>
                        <li className="nav-item nav-item-custom pl-0 pr-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/OTHER/other"
                                  onClick={() => props.closeNav()}
                            >Other</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavbarSection;