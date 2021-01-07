import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    min-width: 100%;
    background-color: ${({ scrollNav }) => (scrollNav ? '#202020' : 'transparent')};
    position: fixed;
    top: 0;
    z-index: 2;
    font-size: 1rem;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 768px) {    
        justify-content: space-between;
    }
`

export const NavbarLogo = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #ebebeb;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 1.2rem; 

    @media screen and (max-width: 768px) {    
        letter-spacing: 1.5px;
        font-size: 1.0rem; 
        padding-left: 25px;
    }
`

export const NavbarBarLogo = styled.span`
    color: #74B3CE;
`

export const NavbarMobileIcon = styled.div`
    display: none;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 65%);
        font-size: 1.4rem;
        color: #ebebeb;
        cursor: pointer;
    }
`

export const NavbarMenu = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    list-style: none;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavbarLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #ebebeb;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: bold;
    padding: 0.5rem 1rem;
    transition: 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
    }

    &.active {
        border-bottom: 2px solid #74b3ce;
    }
`