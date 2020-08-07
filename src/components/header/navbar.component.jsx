import React from "react";

import {Link} from "react-router-dom";

const NavbarSection = props => {
    return (
        <div className="sidenav-cont py-0">
            <div id="modal" onClick={() => props.closeNav()}/>
            <div id="mySidenav" className="sidenav">
                <button className="closebtn btn-light btn bg-transparent border-0"
                        onClick={() => props.closeNav()}>&times;</button>
                <ul className={`list-unstyled pl-5 ${props.isOpen && `navbar-link`}`}>
                    <li>
                        <Link className="px-0 font-weight-bolder font-18">Home Furniture</Link>
                        <ul className="list-unstyled">
                            <li>
                                <Link onClick={() => props.closeNav()}>Living Room</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="px-0 font-weight-bolder font-18">Commercial Furniture</Link>
                        <ul className="list-unstyled">
                            <li>
                                <Link onClick={() => props.closeNav()}>Living Room</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link className="px-0 font-weight-bolder font-18">Finishing and Decorations</Link>
                        <ul className="list-unstyled">
                            <li>
                                <Link onClick={() => props.closeNav()}>Living Room</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavbarSection;

{/*<li className="nav-item nav-item-custom pl-0 pr-3">*/
}
{/*    <Link className="pl-0 nav-link-custom"*/
}
{/*          to="/items/HOME_FURNITURE/_/livingRoom"*/
}
{/*          onClick={() => props.closeNav()}*/
}
{/*    >Living Room</Link>*/
}
{/*</li>*/
}
{/*<li className="nav-item nav-item-custom pl-0 pr-3">*/
}
{/*    <Link className="pl-0 nav-link-custom"*/
}
{/*to="/items/HOME_FURNITURE/_/bedRoom"*/
}
{/*onClick={() => props.closeNav()}*/
}
{/*>Bed Room</Link>*/
}
{/*</li>*/
}
{/*<li className="nav-item nav-item-custom pl-0 pr-3">*/
}
{/*<Link className="pl-0 nav-link-custom"*/
}
{/*to="/items/HOME_FURNITURE/_/kitchen"*/
}
{/*onClick={() => props.closeNav()}*/
}
{/*>Dinning Room/kitchen</Link>*/
}
{/*</li>*/
}
{/*<li className="nav-item nav-item-custom pl-0 pr-3">*/
}
{/*<Link className="pl-0 nav-link-custom"*/
}
{/*to="/items/COMMERCIAL_FURNITURE/_/office"*/
}
{/*onClick={() => props.closeNav()}*/
}
{/*>Office</Link>*/
}
{/*</li>*/
}
{/*<li className="nav-item nav-item-custom pl-0 pr-3">*/
}
{/*<Link className="pl-0 nav-link-custom"*/
}
{/*to="/items/FINISHING_MATERIALS/_/decorations"*/
}
{/*onClick={() => props.closeNav()}*/
}
{/*>Decorations</Link>*/
}
{/*</li>*/
}
{/*<li className="nav-item nav-item-custom pl-0 pr-3">*/
}
{/*<Link className="pl-0 nav-link-custom"*/
}
{/*to="/items/FINISHING_MATERIALS/_/finishingMaterials"*/
}
{/*onClick={() => props.closeNav()}*/
}
{/*>Finishing Materials</Link>*/
}
{/*</li>*/
}
{/*<li className="nav-item nav-item-custom pl-0 pr-3">*/
}
{/*<Link className="pl-0 nav-link-custom"*/
}
{/*to="/items/OTHER/other"*/
}
{/*onClick={() => props.closeNav()}*/
}
{/*>Other</Link>*/
}
{/*</li>*/
}