import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css'

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav>
                    <div className="Navbar-logo">
                        <h4>Enan <span className="Navbar-bar-style">|</span> Software Engineer</h4>
                    </div>
                    <ul className="Navbar-links">
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
                </nav>
            </div>
        );
    }
}

export default Navbar;