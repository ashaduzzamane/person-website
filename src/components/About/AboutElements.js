import styled from 'styled-components';
import { Link } from 'react-scroll';

export const AboutContainer = styled.div`
    min-height: 140vh;
    background: linear-gradient(to bottom, #010104 90%, #ebebeb 10%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;

    @media screen and (max-width: 900px) {    
        flex-direction: column;
    }
`

export const AboutWrapper = styled.div`
    min-height: 70vh;
    min-width: 54vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-top: 4rem;

    @media screen and (max-width: 900px) {    
        padding-bottom: 1rem;
    }
`

export const AboutTitle = styled.h5`
    color: #ebebeb;
    font-family: 'Roboto Mono', monospace;
    font-size: 3rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 1rem;

    @media screen and (max-width: 768px) {    
        font-size: 2.8rem;
    }
`

export const AboutText = styled.div`
    color: #ebebeb;
    width: 70%;
    line-height: 1.8;
    font-size: 1.0rem;
    padding: 1rem 0;

    @media screen and (max-width: 900px) {    
        width: 80%;
    }
`

export const AboutLink = styled.a`
    border-bottom: 2px solid #74b3ce;
    text-decoration: none;
    color: #ebebeb;

    &:hover {
        transition: all .4s ease-in-out;
        transform-origin: bottom top;
        cursor: pointer;
        background: #74b3ce;
    }
`

export const AboutPdfStyle = styled.a`
    text-decoration: none;
    background-color: #010104; 
    color: #ebebeb;
    border: none;
    border: 1px solid #ebebeb;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #74b3ce; 
        border: 1px solid #010104;
    }
`

export const AboutImageContainer = styled.div`
    min-height: 120vh;
    min-width: 44vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 900px) {    
        min-height: 100%;
    }
`

export const AboutImage = styled.img`
    z-index: 1;
    width: 65%;
    box-shadow: 20px 20px #74b3ce;
`

export const ContactLink = styled(Link)`
    border-bottom: 2px solid #74b3ce;
    text-decoration: none;
    color: #ebebeb;

    &:hover {
        transition: all .4s ease-in-out;
        transform-origin: bottom top;
        cursor: pointer;
        background: #74b3ce;
    }
`