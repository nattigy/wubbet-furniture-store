import React, {useState} from "react";

import ContactSection from "./contact.component";
import SearchSection from "./search.component";
import NavbarSection from "./navbar.component";

import "./header.style.sass"

const Header = () => {

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
            <ContactSection/>
            <SearchSection openNav={() => openNav()}/>
            <NavbarSection closeNav={() => closeNav()} isOpen={isOpen}/>
        </header>
    );
};

export default Header;