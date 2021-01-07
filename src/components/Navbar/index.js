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
    return (
        <div>
            <Nav>
                <NavbarLogo>
                    <h4>Enan <NavbarBarLogo>|</NavbarBarLogo> Software Engineer</h4>
                </NavbarLogo>
                <NavbarMobileIcon onClick={toggle} >
                    <FaBars />
                </NavbarMobileIcon>
                <NavbarMenu>
                    <NavbarLink activeClass="active" to="home" spy={true} smooth={true}>
                        Home                                    
                    </NavbarLink>
                    <NavbarLink activeClass="active" to="about" spy={true} smooth={true}>
                        About
                    </NavbarLink>      
                    <NavbarLink activeClass="active" to="experiences" spy={true} smooth={true}>
                        Experiences
                    </NavbarLink>
                    <NavbarLink activeClass="active" to="contact" spy={true} smooth={true}>
                        Contact
                    </NavbarLink>
                </NavbarMenu>
            </Nav>
        </div>
    );
}

export default Navbar;