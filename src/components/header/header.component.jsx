import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import ContactSection from "./contact.component";
import SearchSection from "./search.component";
import NavbarSection from "./navbar.component";

import logo from "../../assets/img/purelogo.png";

import "./header.style.sass"

const Header = props => {

    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
        document.getElementById("mySidenav").style.width = "400px";
        document.getElementById("modal").style.display = "block";
        document.body.style.overflow = "hidden";
    };

    const closeNav = () => {
        if (isOpen) {
            setIsOpen(false);
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("modal").style.display = "none";
            document.body.style.overflow = "unset";
        }
    };

    return (
        <header>
            {
                !props.isAuthPageOpen ? (
                    <Fragment>
                        <ContactSection/>
                        <SearchSection openNav={() => openNav()}/>
                        <NavbarSection closeNav={() => closeNav()} isOpen={isOpen}/>
                    </Fragment>
                ) : (
                    <div className="my-5 mx-auto" style={{width: "200px"}}>
                        <Link to="/">
                            <img src={logo} className="mx-auto w-100" style={{height: "50px"}} alt=""/>
                        </Link>
                    </div>
                )
            }
        </header>
    );
};

const mapStateToProps = state => {
    return {
        isAuthPageOpen: state.ui.isAuthPageOpen
    }
};

export default connect(mapStateToProps)(Header);