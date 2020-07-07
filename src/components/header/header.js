import React, {useState} from "react";
import ContactSection from "./contactSection";
import SearchSection from "./searchSection";
import NavbarSection from "./navbarSection";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(true);
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("modal").style.display = "block";
        document.body.style.position = "fixed";
    };

    const closeNav = () => {
        if (isOpen) {
            setIsOpen(false);
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("modal").style.display = "none";
            document.body.style.position = "unset";
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