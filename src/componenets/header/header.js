import React from "react";
import ContactSection from "./contactSection";
import SearchSection from "./searchSection";
import NavbarSection from "./navbarSection";

const Header = () => {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("modal").style.display = "block";
        document.body.style.position = "fixed";
    };

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("modal").style.display = "none";
        document.body.style.position = "unset";
    };

    return (
        <header>
            <ContactSection/>
            <SearchSection openNav={() => openNav()}/>
            <NavbarSection closeNav={() => closeNav()}/>
        </header>
    );
};

export default Header;