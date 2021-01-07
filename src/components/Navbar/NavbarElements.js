import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    min-width: 100%;
    background-color: #202020;
    position: fixed;
    z-index: 2;
    font-size: 1rem;
`

export const NavbarLogo = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #ebebeb;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 1.2rem; 
`