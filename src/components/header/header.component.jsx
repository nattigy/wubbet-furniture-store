import React, {Fragment, useState} from "react";

import ContactSection from "./contact.component";
import SearchSection from "./search.component";
import NavbarSection from "./navbar.component";

const HeaderComponent = ({match}) => {

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
            {
                match.path !== '/login' && match.path !== '/register' ? (
                    <Fragment>
                        <ContactSection/>
                        <SearchSection openNav={() => openNav()}/>
                        <NavbarSection closeNav={() => closeNav()} isOpen={isOpen}/>
                    </Fragment>
                ) : null
            }
        </header>
    );
};

export default HeaderComponent;