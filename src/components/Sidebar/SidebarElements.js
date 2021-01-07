import styled from 'styled-components';
import { Link } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 5;
    height: 100%;
    width: 100%;
    background-color: #202020;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const SidebarIcon = styled.div`
    color: #ebebeb;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #ebebeb;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 60px);
    text-align: center;
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #ebebeb;
    cursor: pointer;

    &:hover {
        color: #74B3CE;
    }
`