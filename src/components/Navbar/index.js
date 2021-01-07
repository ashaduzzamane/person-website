import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa'; 
import { 
    Nav
 } from './NavbarElements'
import '../../styles/Navbar.css';

const Navbar = ({ toggle }) => {
    return (
        <div>
            <Nav>
                <div className="Navbar-logo">
                    <h4>Enan <span className="Navbar-bar-style">|</span> Software Engineer</h4>
                </div>
                <div className="Navbar-mobile-icon" onClick={toggle} >
                    <FaBars />
                </div>
                <ul className="Navbar-menu">
                    <li>
                        <Link className="Navbar-link-style" activeClass="active" to="home" spy={true} smooth={true}>
                            Home                                    
                        </Link>
                    </li>
                    <li>
                        <Link className="Navbar-link-style" activeClass="active" to="about" spy={true} smooth={true}>
                            About
                        </Link>        
                    </li>
                    <li>
                        <Link className="Navbar-link-style" activeClass="active" to="experiences" spy={true} smooth={true}>
                            Experiences
                        </Link>
                    </li>
                    <li>
                        <Link className="Navbar-link-style" activeClass="active" to="contact" spy={true} smooth={true}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </Nav>
        </div>
    );
}

export default Navbar;