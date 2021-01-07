import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; 
import { 
    Nav,
    NavbarLogo,
    NavbarBarLogo,
    NavbarMobileIcon,
    NavbarMenu,
    NavbarLink
 } from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >=60) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <div>
            <Nav scrollNav={scrollNav}>
                <NavbarLogo>
                    <h4>Enan <NavbarBarLogo>|</NavbarBarLogo> Software Engineer</h4>
                </NavbarLogo>
                <NavbarMobileIcon onClick={toggle} >
                    <FaBars />
                </NavbarMobileIcon>
                <NavbarMenu>
                    <NavbarLink to="home" spy={true} smooth={true} exact='true' offset={-60}>
                        Home                                    
                    </NavbarLink>
                    <NavbarLink to="about" spy={true} smooth={true} exact='true' offset={-60}>
                        About
                    </NavbarLink>      
                    <NavbarLink to="experiences" spy={true} smooth={true} exact='true' offset={-60}>
                        Experiences
                    </NavbarLink>
                    <NavbarLink to="contact" spy={true} smooth={true} exact='true' offset={-60}>
                        Contact
                    </NavbarLink>
                </NavbarMenu>
            </Nav>
        </div>
    );
}

export default Navbar;