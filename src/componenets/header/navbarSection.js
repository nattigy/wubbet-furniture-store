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
                    <ul className="list-unstyled mb-0">
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/HOME/livingRoom">Living room</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/HOME/bedRoom">Bed room</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/HOME/kitchen">Dinning room/kitchen</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/COMMERCIAL/office">Office</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/FINISHING_MATERIALS/decorations">Decorations</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/FINISHING_MATERIALS/finishingMaterials">Finishing materials</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/other">Other</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavbarSection;