import React from "react";

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
                            <a className="pl-0 nav-link-custom" href="/">Home</a></li>
                        <li className="nav-item nav-item-custom px-3">
                            <a className="pl-0 nav-link-custom" href="/">Home</a></li>
                        <li className="nav-item nav-item-custom px-3">
                            <a className="pl-0 nav-link-custom" href="/">Home</a></li>
                        <li className="nav-item nav-item-custom px-3">
                            <a className="pl-0 nav-link-custom" href="/">Home</a></li>
                        <li className="nav-item nav-item-custom px-3">
                            <a className="pl-0 nav-link-custom" href="/">Home</a></li>
                        <li className="nav-item nav-item-custom px-3">
                            <a className="pl-0 nav-link-custom" href="/">Home</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavbarSection;