import styled from 'styled-components';

export const AboutContainer = styled.div`
    min-height: 120vh;
    background: linear-gradient(to bottom, #010104 85%, #ebebeb 15%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    @media screen and (max-width: 768px) {    
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

    @media screen and (max-width: 768px) {    
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
    width: 65%;
    line-height: 1.8;
    font-size: 16px;
    padding: 1rem 0;
`

export const AboutLink = styled.a`
    border-bottom: 2px solid #74B3CE;
    text-decoration: none;
    color: #ebebeb;

    &:hover {
        transition: all .4s ease-in-out;
        transform-origin: bottom top;
        cursor: pointer;
        background: #74B3CE;
    }
`

export const AboutBtn = styled.button`
    background-color: #74B3CE; 
    border: none;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 18px;

    &:focus {
        outline: none;
        box-shadow: none;
    }

    &:hover {
        cursor: pointer;
        color: white;
    }
`

export const AboutPdfStyle = styled.a`
    border-bottom: 2px solid #74B3CE;
    text-decoration: none;
    color: #ebebeb;

    &:hover {
        cursor: pointer;
        color: white;
    }
`

export const AboutImageContainer = styled.div`
    min-height: 100vh;
    min-width: 44vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {    
        min-height: 100%;
    }
`

export const AboutImage = styled.img`
    z-index: 1;
    width: 60%;
    box-shadow: 20px 20px #74B3CE;
`